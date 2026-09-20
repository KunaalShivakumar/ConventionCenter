import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const normalizeBase = (value?: string) => {
  if (!value || value === '/') {
    return value;
  }

  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];

export default defineConfig({
  plugins: [react()],
  base:
    normalizeBase(process.env.VITE_BASE_PATH) ??
    normalizeBase(repositoryName) ??
    '/',
});
