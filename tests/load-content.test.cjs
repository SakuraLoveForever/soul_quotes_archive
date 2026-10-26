const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('index.html', 'utf8');
const loader = source.match(/      async function loadContent\(\) \{[\s\S]*?(?=\n      function bind\()/)[0];

async function check() {
  const content = { innerHTML: '' };
  let latest = '# Test\n1. First';
  const calls = [];
  const rendered = [];
  const context = vm.createContext({
    CONFIG: { textFile: '心灵鸡汤.md', embedId: 'quote-md' },
    window: { location: { protocol: 'https:' } },
    document: { getElementById: id => id === 'content' ? content : { textContent: 'STALE SNAPSHOT' } },
    fetch: async (url, options) => {
      calls.push({ url, options });
      return { ok: true, text: async () => latest };
    },
    parseContent: text => { rendered.push(text); return '<p>' + text + '</p>'; },
    renderToc() {}, setExpanded() {}, updateActiveToc() {}, categories: [],
    escapeHtml: text => String(text).replaceAll('<', '&lt;')
  });
  vm.runInContext(loader, context);
  await context.loadContent();
  assert.equal(rendered[0], latest, 'must load MD instead of embedded snapshot');
  latest = '# Test\n1. Updated';
  await context.loadContent();
  assert.equal(rendered[1], latest, 'next load must read updated Markdown');
  assert.equal(calls.length, 2);
  assert.equal(decodeURI(calls[0].url), '心灵鸡汤.md');
  assert.equal(calls[0].options.cache, 'no-store');
  context.fetch = async () => ({ ok: false, status: 404 });
  await context.loadContent();
  assert.match(content.innerHTML, /404/);
  assert.equal(rendered.length, 2, 'failed requests must not silently show stale content');
  context.window.location.protocol = 'file:';
  context.fetch = async () => { throw Error('must not fetch local files'); };
  await context.loadContent();
  assert.match(content.innerHTML, /打开网页\.cmd/);
  assert.equal(rendered.length, 2);
  console.log('PASS: fresh Markdown on each load, cache bypass, HTTP failure, and local-file guidance');
}
check().catch(error => { console.error(error); process.exitCode = 1; });
