(() => {
  const TOKEN_KEY = 'tumbo_admin_token';
  const USER_KEY = 'tumbo_admin_user';

  const loginView = document.getElementById('login-view');
  const appView = document.getElementById('app-view');
  const listView = document.getElementById('list-view');
  const formView = document.getElementById('form-view');
  const tableBody = document.getElementById('opp-table-body');
  const pageLabel = document.getElementById('page-label');
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');
  const loginSubmit = document.getElementById('login-submit');
  const formError = document.getElementById('form-error');
  const formSuccess = document.getElementById('form-success');
  const imagePreview = document.getElementById('f-image-preview');
  const adminNameEl = document.getElementById('admin-name');

  let page = 1;
  let totalPages = 1;
  let editingId = null;
  let isAuthenticated = false;

  function getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  function setSession(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  function clearSession() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    isAuthenticated = false;
  }

  function showLogin(message) {
    isAuthenticated = false;
    appView.hidden = true;
    appView.setAttribute('aria-hidden', 'true');
    loginView.hidden = false;
    document.body.classList.add('is-login');
    document.getElementById('login-password').value = '';
    document.getElementById('login-password').type = 'password';
    document.getElementById('eye-open').hidden = false;
    document.getElementById('eye-closed').hidden = true;
    document.getElementById('toggle-password').setAttribute('aria-label', 'Show password');
    if (message) {
      loginError.textContent = message;
      loginError.hidden = false;
    } else {
      loginError.hidden = true;
      loginError.textContent = '';
    }
  }

  function showApp(user) {
    isAuthenticated = true;
    loginView.hidden = true;
    appView.hidden = false;
    appView.setAttribute('aria-hidden', 'false');
    document.body.classList.remove('is-login');
    if (adminNameEl) {
      adminNameEl.textContent = user?.fullName || user?.email || 'Admin';
    }
    showList();
    loadList();
  }

  async function api(path, options = {}) {
    if (!isAuthenticated && !path.includes('/admin/auth/')) {
      showLogin('Please sign in to continue.');
      throw new Error('Please sign in to continue.');
    }

    const headers = { ...(options.headers || {}) };
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    }

    const res = await fetch(path, { ...options, headers });
    if (res.status === 401 || res.status === 403) {
      clearSession();
      showLogin('Session expired or access denied. Please sign in again.');
      throw new Error('Session expired or access denied. Please sign in again.');
    }

    if (res.status === 204) return null;

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || 'Request failed.');
    }
    return data;
  }

  async function verifySession() {
    const token = getToken();
    if (!token) {
      showLogin();
      return false;
    }

    try {
      const me = await fetch('/api/admin/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!me.ok) {
        clearSession();
        showLogin();
        return false;
      }

      const profile = await me.json();
      if ((profile.role || '').toLowerCase() !== 'admin') {
        clearSession();
        showLogin('This account is not an admin.');
        return false;
      }

      const stored = JSON.parse(localStorage.getItem(USER_KEY) || '{}');
      showApp({
        ...stored,
        fullName: profile.fullName || stored.fullName,
        email: profile.email || stored.email,
        role: profile.role,
      });
      return true;
    } catch {
      clearSession();
      showLogin();
      return false;
    }
  }

  function showList() {
    if (!isAuthenticated) return;
    listView.hidden = false;
    formView.hidden = true;
    document.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.view === 'list');
    });
  }

  function showForm(isCreate) {
    if (!isAuthenticated) {
      showLogin('Please sign in to continue.');
      return;
    }
    listView.hidden = true;
    formView.hidden = false;
    document.getElementById('form-title').textContent = isCreate ? 'Create Opportunity' : 'Edit Opportunity';
    document.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.view === 'form');
    });
    formError.hidden = true;
    formSuccess.hidden = true;
  }

  function formatPosted(iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function toLocalInput(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function toDateInput(iso) {
    if (!iso) return '';
    return new Date(iso).toISOString().slice(0, 10);
  }

  function resetForm() {
    editingId = null;
    document.getElementById('opp-form').reset();
    document.getElementById('opp-id').value = '';
    document.getElementById('f-country').value = 'South Africa';
    document.getElementById('f-status').value = 'Draft';
    document.getElementById('f-tag').value = 'job';
    document.getElementById('f-icon').value = 'briefcase';
    document.getElementById('f-featured').value = 'false';
    imagePreview.hidden = true;
    imagePreview.removeAttribute('src');
  }

  function fillForm(item) {
    editingId = item.id;
    document.getElementById('opp-id').value = item.id;
    document.getElementById('f-title').value = item.title || '';
    document.getElementById('f-category').value = item.category || 'Jobs';
    document.getElementById('f-type').value = item.opportunityType || '';
    document.getElementById('f-org').value = item.organization || '';
    document.getElementById('f-status').value = item.status || 'Draft';
    document.getElementById('f-city').value = item.city || '';
    document.getElementById('f-region').value = item.regionOrState || '';
    document.getElementById('f-country').value = item.country || 'South Africa';
    document.getElementById('f-location').value = item.locationLabel || '';
    document.getElementById('f-image-url').value = item.imageUrl || '';
    document.getElementById('f-image-alt').value = item.imageAlt || '';
    document.getElementById('f-short').value = item.shortDescription || '';
    document.getElementById('f-salary').value = item.salaryText || '';
    document.getElementById('f-experience').value = item.experienceRequired || '';
    document.getElementById('f-education').value = item.educationRequired || '';
    document.getElementById('f-tag').value = item.tag || 'job';
    document.getElementById('f-tag-label').value = item.tagLabel || '';
    document.getElementById('f-icon').value = item.detailIcon || 'briefcase';
    document.getElementById('f-posted').value = toLocalInput(item.postedAt);
    document.getElementById('f-deadline').value = toDateInput(item.applicationDeadline);
    document.getElementById('f-featured').value = item.isFeatured ? 'true' : 'false';
    document.getElementById('f-apply-url').value = item.applyUrl || '';
    document.getElementById('f-about').value = item.aboutContent || '';
    document.getElementById('f-requirements').value = item.requirementsContent || '';
    document.getElementById('f-howto').value = item.howToApplyContent || '';
    updatePreview(item.imageUrl);
  }

  function updatePreview(url) {
    if (!url) {
      imagePreview.hidden = true;
      return;
    }
    imagePreview.src = url;
    imagePreview.hidden = false;
  }

  function collectPayload(forcePublish) {
    const posted = document.getElementById('f-posted').value;
    const deadline = document.getElementById('f-deadline').value;
    const tag = document.getElementById('f-tag').value;
    const tagLabel = document.getElementById('f-tag-label').value.trim() || tag.replace(/-/g, ' ').toUpperCase();

    return {
      title: document.getElementById('f-title').value.trim(),
      category: document.getElementById('f-category').value,
      opportunityType: document.getElementById('f-type').value.trim() || null,
      organization: document.getElementById('f-org').value.trim() || null,
      country: document.getElementById('f-country').value.trim() || null,
      regionOrState: document.getElementById('f-region').value.trim() || null,
      city: document.getElementById('f-city').value.trim() || null,
      locationLabel: document.getElementById('f-location').value.trim() || null,
      imageUrl: document.getElementById('f-image-url').value.trim() || null,
      imageAlt: document.getElementById('f-image-alt').value.trim() || null,
      shortDescription: document.getElementById('f-short').value.trim() || null,
      salaryText: document.getElementById('f-salary').value.trim() || null,
      experienceRequired: document.getElementById('f-experience').value.trim() || null,
      educationRequired: document.getElementById('f-education').value.trim() || null,
      tag,
      tagLabel,
      detailIcon: document.getElementById('f-icon').value,
      postedAt: posted ? new Date(posted).toISOString() : null,
      applicationDeadline: deadline ? new Date(`${deadline}T00:00:00Z`).toISOString() : null,
      applyUrl: document.getElementById('f-apply-url').value.trim() || null,
      aboutContent: document.getElementById('f-about').value.trim() || null,
      requirementsContent: document.getElementById('f-requirements').value.trim() || null,
      howToApplyContent: document.getElementById('f-howto').value.trim() || null,
      isFeatured: document.getElementById('f-featured').value === 'true',
      popularityScore: 0,
      status: forcePublish ? 'Published' : document.getElementById('f-status').value,
    };
  }

  async function loadList() {
    if (!isAuthenticated) return;

    const search = document.getElementById('filter-search').value.trim();
    const category = document.getElementById('filter-category').value;
    const status = document.getElementById('filter-status').value;
    const qs = new URLSearchParams({ page: String(page), limit: '12' });
    if (search) qs.set('search', search);
    if (category) qs.set('category', category);
    if (status) qs.set('status', status);

    tableBody.innerHTML = '<tr><td colspan="6" class="muted">Loading…</td></tr>';
    try {
      const data = await api(`/api/admin/opportunities?${qs}`);
      totalPages = data.totalPages || 1;
      pageLabel.textContent = `Page ${data.page} of ${totalPages} (${data.total} total)`;

      if (!data.items?.length) {
        tableBody.innerHTML = '<tr><td colspan="6" class="muted">No opportunities found.</td></tr>';
        return;
      }

      tableBody.innerHTML = data.items
        .map(
          (item) => `
        <tr>
          <td><strong>${escapeHtml(item.title)}</strong></td>
          <td>${escapeHtml(item.category)}</td>
          <td>${escapeHtml(item.locationLabel || item.city || '—')}</td>
          <td><span class="status-pill status-${escapeHtml(item.status)}">${escapeHtml(item.status)}</span></td>
          <td>${formatPosted(item.postedAt)}</td>
          <td class="actions">
            <button type="button" data-edit="${item.id}">Edit</button>
            <button type="button" data-toggle="${item.id}" data-status="${item.status}">${
              item.status === 'Published' ? 'Unpublish' : 'Publish'
            }</button>
            <button type="button" class="danger" data-delete="${item.id}">Delete</button>
          </td>
        </tr>`
        )
        .join('');
    } catch (err) {
      if (!isAuthenticated) return;
      tableBody.innerHTML = `<tr><td colspan="6" class="error">${escapeHtml(err.message)}</td></tr>`;
    }
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  async function openEditor(id) {
    const item = await api(`/api/admin/opportunities/${id}`);
    fillForm(item);
    showForm(false);
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.hidden = true;
    loginError.textContent = '';

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
      showLogin('Please enter your email and password.');
      return;
    }

    loginSubmit.disabled = true;
    loginSubmit.textContent = 'Signing in…';

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        clearSession();
        showLogin(body.message || 'Invalid email or password.');
        return;
      }

      if (!body.token || (body.user?.role || '').toLowerCase() !== 'admin') {
        clearSession();
        showLogin('Invalid email or password.');
        return;
      }

      setSession(body.token, body.user);
      document.getElementById('login-password').value = '';
      showApp(body.user);
    } catch {
      clearSession();
      showLogin('Could not sign in. Check that the API is running and try again.');
    } finally {
      loginSubmit.disabled = false;
      loginSubmit.textContent = 'Sign in';
    }
  });

  document.getElementById('logout-btn').addEventListener('click', () => {
    clearSession();
    showLogin('Signed out successfully.');
  });

  document.getElementById('toggle-password').addEventListener('click', () => {
    const input = document.getElementById('login-password');
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    document.getElementById('eye-open').hidden = show;
    document.getElementById('eye-closed').hidden = !show;
    document.getElementById('toggle-password').setAttribute(
      'aria-label',
      show ? 'Hide password' : 'Show password'
    );
    document.getElementById('toggle-password').title = show ? 'Hide password' : 'Show password';
  });

  document.getElementById('btn-create').addEventListener('click', () => {
    resetForm();
    showForm(true);
  });
  document.getElementById('nav-create').addEventListener('click', () => {
    resetForm();
    showForm(true);
  });
  document.getElementById('btn-back-list').addEventListener('click', () => {
    showList();
    loadList();
  });
  document.querySelector('.nav-btn[data-view="list"]').addEventListener('click', () => {
    showList();
    loadList();
  });

  ['filter-search', 'filter-category', 'filter-status'].forEach((id) => {
    document.getElementById(id).addEventListener('change', () => {
      page = 1;
      loadList();
    });
  });
  document.getElementById('filter-search').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      page = 1;
      loadList();
    }
  });

  document.getElementById('prev-page').addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      loadList();
    }
  });
  document.getElementById('next-page').addEventListener('click', () => {
    if (page < totalPages) {
      page += 1;
      loadList();
    }
  });

  tableBody.addEventListener('click', async (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.dataset.edit) {
      try {
        await openEditor(btn.dataset.edit);
      } catch (err) {
        if (isAuthenticated) alert(err.message);
      }
      return;
    }

    if (btn.dataset.toggle) {
      const next = btn.dataset.status === 'Published' ? 'Unpublished' : 'Published';
      try {
        await api(`/api/admin/opportunities/${btn.dataset.toggle}/status`, {
          method: 'PATCH',
          body: JSON.stringify({ status: next }),
        });
        loadList();
      } catch (err) {
        if (isAuthenticated) alert(err.message);
      }
      return;
    }

    if (btn.dataset.delete) {
      if (!confirm('Delete this opportunity? This can be recovered only from the database.')) return;
      try {
        await api(`/api/admin/opportunities/${btn.dataset.delete}`, { method: 'DELETE' });
        loadList();
      } catch (err) {
        if (isAuthenticated) alert(err.message);
      }
    }
  });

  document.getElementById('f-image-file').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const body = new FormData();
    body.append('file', file);
    try {
      const data = await api('/api/admin/media', { method: 'POST', body });
      document.getElementById('f-image-url').value = data.url;
      updatePreview(data.url);
    } catch (err) {
      if (isAuthenticated) alert(err.message);
    }
  });

  document.getElementById('f-image-url').addEventListener('input', (e) => {
    updatePreview(e.target.value.trim());
  });

  async function saveOpportunity(forcePublish) {
    formError.hidden = true;
    formSuccess.hidden = true;
    const payload = collectPayload(forcePublish);
    try {
      if (editingId) {
        await api(`/api/admin/opportunities/${editingId}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });
      } else {
        const created = await api('/api/admin/opportunities', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        editingId = created.id;
        document.getElementById('opp-id').value = created.id;
        document.getElementById('form-title').textContent = 'Edit Opportunity';
      }
      formSuccess.textContent = 'Saved successfully. Published items appear on the public Opportunities page.';
      formSuccess.hidden = false;
    } catch (err) {
      if (!isAuthenticated) return;
      formError.textContent = err.message;
      formError.hidden = false;
    }
  }

  document.getElementById('opp-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveOpportunity(false);
  });

  document.getElementById('btn-publish').addEventListener('click', async () => {
    document.getElementById('f-status').value = 'Published';
    await saveOpportunity(true);
  });

  // Always start on login. Only open the panel after verified admin auth.
  document.body.classList.add('is-login');
  showLogin();
  verifySession();
})();
