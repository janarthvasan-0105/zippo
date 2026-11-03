// Fails the build if any locale dictionary drifts from en.json: missing or extra keys,
// different array lengths, empty strings, or lost {placeholders}.
import { readFileSync } from 'node:fs';
import { locales } from '../src/i18n/locales.mjs';

const load = (code) => JSON.parse(readFileSync(new URL(`../src/i18n/${code}.json`, import.meta.url), 'utf8'));
const source = load('en');
const placeholders = (s) => (s.match(/\{\w+\}/g) ?? []).sort().join();
const errors = [];

function compare(a, b, path, code) {
  if (typeof a === 'string') {
    if (typeof b !== 'string' || !b.trim()) return errors.push(`${code}: ${path} missing or empty`);
    if (placeholders(a) !== placeholders(b)) errors.push(`${code}: ${path} placeholders differ`);
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return errors.push(`${code}: ${path} must be an array of ${a.length}`);
    return a.forEach((v, i) => compare(v, b[i], `${path}[${i}]`, code));
  }
  if (typeof b !== 'object' || b === null) return errors.push(`${code}: ${path} must be an object`);
  for (const k of Object.keys(a)) compare(a[k], b[k], path ? `${path}.${k}` : k, code);
  for (const k of Object.keys(b)) if (!(k in a)) errors.push(`${code}: ${path ? `${path}.${k}` : k} is not in en.json`);
}

for (const { code } of locales.filter((l) => l.code !== 'en')) {
  try {
    compare(source, load(code), '', code);
  } catch (e) {
    errors.push(`${code}: ${e.message}`);
  }
}

if (errors.length) {
  console.error(`i18n check failed (${errors.length}):\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log(`i18n check passed: ${locales.length} locales match en.json`);
