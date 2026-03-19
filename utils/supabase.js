const { SUPABASE_URL, SUPABASE_KEY } = require('../config');
const logger = require('./logger');

const headers = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation',
};

async function query(table, options = {}) {
  const { select = '*', filters = '', method = 'GET', body } = options;
  const url = `${SUPABASE_URL}/rest/v1/${table}?select=${select}${filters ? '&' + filters : ''}`;
  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase ${method} ${table}: ${res.status} ${text}`);
  }
  return res.json();
}

async function insert(table, data) {
  return query(table, { method: 'POST', body: data });
}

async function update(table, filters, data) {
  const url = `${SUPABASE_URL}/rest/v1/${table}?${filters}`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase PATCH ${table}: ${res.status} ${text}`);
  }
  return res.json();
}

async function healthCheck() {
  try {
    const start = Date.now();
    const res = await fetch(`${SUPABASE_URL}/rest/v1/`, { headers, signal: AbortSignal.timeout(5000) });
    return { ok: res.ok, ms: Date.now() - start };
  } catch (e) {
    logger.error('Supabase health check failed:', e.message);
    return { ok: false, ms: -1 };
  }
}

module.exports = { query, insert, update, healthCheck };
