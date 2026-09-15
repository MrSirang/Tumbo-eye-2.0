import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, LogOut, Plus, RefreshCw } from 'lucide-react';

const API_BASE = (import.meta.env.VITE_API_URL ?? '/api').replace(/\/$/, '');

type OpportunityItem = {
  id: string;
  title: string;
  category: string;
  locationLabel?: string | null;
  city?: string | null;
  status: string;
  postedAt: string;
};

type PagedResult = {
  items: OpportunityItem[];
  page: number;
  totalPages: number;
  total: number;
};

type AuthUser = {
  fullName?: string;
  email?: string;
  role?: string;
};

const CATEGORIES = [
  'Jobs',
  'Scholarships',
  'Internships',
  'Grants',
  'Training',
  'Volunteering',
  'Partnerships',
];

const emptyForm = {
  title: '',
  category: 'Jobs',
  opportunityType: '',
  organization: '',
  country: 'South Africa',
  regionOrState: '',
  city: '',
  locationLabel: '',
  imageUrl: '',
  imageAlt: '',
  shortDescription: '',
  salaryText: '',
  experienceRequired: '',
  educationRequired: '',
  tag: 'job',
  tagLabel: 'JOB',
  detailIcon: 'briefcase',
  applyUrl: '',
  aboutContent: '',
  requirementsContent: '',
  howToApplyContent: '',
  status: 'Draft',
  isFeatured: false,
};

/** Resolve API URL for admin calls. */
function endpoint(path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (!API_BASE || API_BASE === '/api') {
    return clean.startsWith('/api') ? clean : `/api${clean}`;
  }
  const origin = API_BASE.replace(/\/api\/?$/, '');
  return `${origin}${clean.startsWith('/api') ? clean : `/api${clean}`}`;
}

export const AdminPanel: React.FC = () => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('tumbo_admin_token'));
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      return JSON.parse(localStorage.getItem('tumbo_admin_user') || 'null');
    } catch {
      return null;
    }
  });
  const [email, setEmail] = useState('admin@tumbo.co.za');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [checking, setChecking] = useState(Boolean(token));

  const [items, setItems] = useState<OpportunityItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [listError, setListError] = useState<string | null>(null);
  const [view, setView] = useState<'list' | 'form'>('list');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [formMsg, setFormMsg] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const clearSession = useCallback(() => {
    localStorage.removeItem('tumbo_admin_token');
    localStorage.removeItem('tumbo_admin_user');
    setToken(null);
    setUser(null);
  }, []);

  const authFetch = useCallback(
    async (path: string, options: RequestInit = {}) => {
      const headers: Record<string, string> = {
        ...(options.headers as Record<string, string>),
      };
      if (token) headers.Authorization = `Bearer ${token}`;
      if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = headers['Content-Type'] || 'application/json';
      }
      let res: Response;
      try {
        res = await fetch(endpoint(path), { ...options, headers });
      } catch {
        throw new Error(
          'Cannot reach the Tumbo API. Your website is live, but the .NET backend is not deployed yet.',
        );
      }
      if (res.status === 401 || res.status === 403) {
        clearSession();
        throw new Error('Session expired. Please sign in again.');
      }
      if (res.status === 204) return null;
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || 'Request failed.');
      return data;
    },
    [token, clearSession],
  );

  useEffect(() => {
    if (!token) {
      setChecking(false);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const me = await authFetch('/api/admin/auth/me');
        if (cancelled) return;
        if ((me?.role || '').toLowerCase() !== 'admin') {
          clearSession();
        } else {
          setUser(me);
        }
      } catch {
        if (!cancelled) clearSession();
      } finally {
        if (!cancelled) setChecking(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token, authFetch, clearSession]);

  const loadList = useCallback(async () => {
    if (!token) return;
    setListError(null);
    try {
      const qs = new URLSearchParams({ page: String(page), limit: '12' });
      if (search.trim()) qs.set('search', search.trim());
      if (statusFilter) qs.set('status', statusFilter);
      const data = (await authFetch(`/api/admin/opportunities?${qs}`)) as PagedResult;
      setItems(data.items || []);
      setTotalPages(data.totalPages || 1);
      setTotal(data.total || 0);
    } catch (err) {
      setListError(err instanceof Error ? err.message : 'Failed to load opportunities.');
      setItems([]);
    }
  }, [token, page, search, statusFilter, authFetch]);

  useEffect(() => {
    if (token && !checking) void loadList();
  }, [token, checking, loadList]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);
    try {
      const res = await fetch(endpoint('/api/admin/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body.message || 'Invalid email or password.');
      }
      if (!body.token || (body.user?.role || '').toLowerCase() !== 'admin') {
        throw new Error('Invalid email or password.');
      }
      localStorage.setItem('tumbo_admin_token', body.token);
      localStorage.setItem('tumbo_admin_user', JSON.stringify(body.user));
      setToken(body.token);
      setUser(body.user);
      setPassword('');
      setView('list');
    } catch (err) {
      clearSession();
      if (err instanceof TypeError) {
        setLoginError(
          'Cannot reach the Tumbo API. Deploy the .NET backend for login to work on the live site.',
        );
      } else {
        setLoginError(err instanceof Error ? err.message : 'Sign in failed.');
      }
    } finally {
      setLoginLoading(false);
    }
  };

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormMsg(null);
    setFormError(null);
    setView('form');
  };

  const openEdit = async (id: string) => {
    setFormError(null);
    setFormMsg(null);
    try {
      const item = await authFetch(`/api/admin/opportunities/${id}`);
      setEditingId(id);
      setForm({
        title: item.title || '',
        category: item.category || 'Jobs',
        opportunityType: item.opportunityType || '',
        organization: item.organization || '',
        country: item.country || 'South Africa',
        regionOrState: item.regionOrState || '',
        city: item.city || '',
        locationLabel: item.locationLabel || '',
        imageUrl: item.imageUrl || '',
        imageAlt: item.imageAlt || '',
        shortDescription: item.shortDescription || '',
        salaryText: item.salaryText || '',
        experienceRequired: item.experienceRequired || '',
        educationRequired: item.educationRequired || '',
        tag: item.tag || 'job',
        tagLabel: item.tagLabel || 'JOB',
        detailIcon: item.detailIcon || 'briefcase',
        applyUrl: item.applyUrl || '',
        aboutContent: item.aboutContent || '',
        requirementsContent: item.requirementsContent || '',
        howToApplyContent: item.howToApplyContent || '',
        status: item.status || 'Draft',
        isFeatured: Boolean(item.isFeatured),
      });
      setView('form');
    } catch (err) {
      setListError(err instanceof Error ? err.message : 'Failed to open opportunity.');
    }
  };

  const saveForm = async (publish = false) => {
    setSaving(true);
    setFormError(null);
    setFormMsg(null);
    const payload = {
      ...form,
      status: publish ? 'Published' : form.status,
      opportunityType: form.opportunityType || null,
      organization: form.organization || null,
      applyUrl: form.applyUrl || null,
    };
    try {
      if (editingId) {
        await authFetch(`/api/admin/opportunities/${editingId}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
      } else {
        const created = await authFetch('/api/admin/opportunities', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        setEditingId(created.id);
      }
      setFormMsg('Saved successfully.');
      await loadList();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Save failed.');
    } finally {
      setSaving(false);
    }
  };

  if (checking) {
    return (
      <div className="admin-page admin-loading">
        <p>Checking admin session…</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="admin-page admin-login-page">
        <form className="admin-login-card" onSubmit={handleLogin}>
          <p className="admin-brand">TUMBO</p>
          <h1>Admin Panel</h1>
          <p className="admin-muted">Sign in to manage opportunities</p>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </label>
          <label>
            Password
            <span className="admin-password-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="Enter admin password"
              />
              <button
                type="button"
                className="admin-eye"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </span>
          </label>
          {loginError && <p className="admin-error">{loginError}</p>}
          <button type="submit" disabled={loginLoading}>
            {loginLoading ? 'Signing in…' : 'Sign in'}
          </button>
          <Link to="/" className="admin-back-link">
            ← Back to website
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-page admin-app">
      <aside className="admin-sidebar">
        <div>
          <strong>Tumbo Admin</strong>
          <span>Opportunities CMS</span>
          <span className="admin-user-label">{user?.fullName || user?.email}</span>
        </div>
        <nav>
          <button
            type="button"
            className={view === 'list' ? 'is-active' : ''}
            onClick={() => {
              setView('list');
              void loadList();
            }}
          >
            All Opportunities
          </button>
          <button type="button" className={view === 'form' && !editingId ? 'is-active' : ''} onClick={openCreate}>
            Create New
          </button>
        </nav>
        <button
          type="button"
          className="admin-logout"
          onClick={() => {
            clearSession();
            setLoginError('Signed out successfully.');
          }}
        >
          <LogOut size={16} /> Sign out
        </button>
      </aside>

      <main className="admin-main">
        {view === 'list' ? (
          <>
            <header className="admin-head">
              <div>
                <h2>Opportunities</h2>
                <p className="admin-muted">Create, edit, publish and delete listings</p>
              </div>
              <button type="button" className="admin-primary" onClick={openCreate}>
                <Plus size={16} /> New Opportunity
              </button>
            </header>

            <div className="admin-toolbar">
              <input
                type="search"
                placeholder="Search title, location…"
                value={search}
                onChange={(e) => {
                  setPage(1);
                  setSearch(e.target.value);
                }}
              />
              <select
                value={statusFilter}
                onChange={(e) => {
                  setPage(1);
                  setStatusFilter(e.target.value);
                }}
              >
                <option value="">All statuses</option>
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Unpublished">Unpublished</option>
              </select>
              <button type="button" className="admin-ghost" onClick={() => void loadList()}>
                <RefreshCw size={15} /> Refresh
              </button>
            </div>

            {listError && <p className="admin-error">{listError}</p>}

            <div className="admin-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Opportunity</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Posted</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="admin-muted">
                        No opportunities found.
                      </td>
                    </tr>
                  ) : (
                    items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <strong>{item.title}</strong>
                        </td>
                        <td>{item.category}</td>
                        <td>{item.locationLabel || item.city || '—'}</td>
                        <td>
                          <span className={`admin-status status-${item.status}`}>{item.status}</span>
                        </td>
                        <td>{new Date(item.postedAt).toLocaleDateString()}</td>
                        <td className="admin-row-actions">
                          <button type="button" onClick={() => void openEdit(item.id)}>
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={async () => {
                              const next = item.status === 'Published' ? 'Unpublished' : 'Published';
                              try {
                                await authFetch(`/api/admin/opportunities/${item.id}/status`, {
                                  method: 'PATCH',
                                  body: JSON.stringify({ status: next }),
                                });
                                void loadList();
                              } catch (err) {
                                alert(err instanceof Error ? err.message : 'Failed');
                              }
                            }}
                          >
                            {item.status === 'Published' ? 'Unpublish' : 'Publish'}
                          </button>
                          <button
                            type="button"
                            className="danger"
                            onClick={async () => {
                              if (!confirm('Delete this opportunity?')) return;
                              try {
                                await authFetch(`/api/admin/opportunities/${item.id}`, {
                                  method: 'DELETE',
                                });
                                void loadList();
                              } catch (err) {
                                alert(err instanceof Error ? err.message : 'Failed');
                              }
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="admin-pager">
              <button type="button" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
                Previous
              </button>
              <span>
                Page {page} of {totalPages} ({total} total)
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            <header className="admin-head">
              <div>
                <h2>{editingId ? 'Edit Opportunity' : 'Create Opportunity'}</h2>
                <p className="admin-muted">Changes appear on the public Opportunities page when Published</p>
              </div>
              <button type="button" className="admin-ghost" onClick={() => setView('list')}>
                ← Back to list
              </button>
            </header>

            <div className="admin-form-grid">
              <label>
                Title *
                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  required
                />
              </label>
              <label>
                Category *
                <select
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label>
                Opportunity type
                <input
                  value={form.opportunityType}
                  onChange={(e) => setForm((f) => ({ ...f, opportunityType: e.target.value }))}
                  placeholder="Full-time, Internship…"
                />
              </label>
              <label>
                Status
                <select
                  value={form.status}
                  onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                >
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Unpublished</option>
                </select>
              </label>
              <label>
                City
                <input
                  value={form.city}
                  onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                />
              </label>
              <label>
                Location label
                <input
                  value={form.locationLabel}
                  onChange={(e) => setForm((f) => ({ ...f, locationLabel: e.target.value }))}
                  placeholder="Midrand, GP"
                />
              </label>
              <label className="span-2">
                Apply Now URL
                <input
                  value={form.applyUrl}
                  onChange={(e) => setForm((f) => ({ ...f, applyUrl: e.target.value }))}
                  placeholder="https://…"
                />
              </label>
              <label className="span-2">
                Short description
                <textarea
                  rows={3}
                  value={form.shortDescription}
                  onChange={(e) => setForm((f) => ({ ...f, shortDescription: e.target.value }))}
                />
              </label>
              <label className="span-2">
                About
                <textarea
                  rows={4}
                  value={form.aboutContent}
                  onChange={(e) => setForm((f) => ({ ...f, aboutContent: e.target.value }))}
                />
              </label>
              <label className="span-2">
                Requirements (one per line)
                <textarea
                  rows={4}
                  value={form.requirementsContent}
                  onChange={(e) => setForm((f) => ({ ...f, requirementsContent: e.target.value }))}
                />
              </label>
              <label className="span-2">
                How to apply
                <textarea
                  rows={3}
                  value={form.howToApplyContent}
                  onChange={(e) => setForm((f) => ({ ...f, howToApplyContent: e.target.value }))}
                />
              </label>
              {formError && <p className="admin-error span-2">{formError}</p>}
              {formMsg && <p className="admin-success span-2">{formMsg}</p>}
              <div className="admin-form-actions span-2">
                <button type="button" className="admin-primary" disabled={saving} onClick={() => void saveForm(false)}>
                  {saving ? 'Saving…' : 'Save'}
                </button>
                <button type="button" className="admin-secondary" disabled={saving} onClick={() => void saveForm(true)}>
                  Save & Publish
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
