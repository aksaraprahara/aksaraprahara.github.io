import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const envOrUndefined = (value) => (value && value.trim() ? value.trim() : undefined);
const isUserPagesRepo =
  Boolean(repository && repositoryOwner) &&
  repository.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;
const detectedSite = repositoryOwner ? `https://${repositoryOwner}.github.io` : 'https://example.com';
const site = envOrUndefined(process.env.SITE_URL) ?? detectedSite;
const base =
  process.env.BASE_PATH !== undefined
    ? envOrUndefined(process.env.BASE_PATH)
    : repository && !isUserPagesRepo
      ? `/${repository}`
      : undefined;

// https://astro.build/config
export default defineConfig({
  output: 'static', // Explicitly specify static output (which is also the default)
  site,
  base,
  // Enable built-in image optimization with specific settings
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Use webp as preferred format for better compression and quality
        format: 'webp',
        // Higher quality setting (0-100)
        quality: 80,
        // Default sizes for responsive images
        sizes: [640, 960, 1280, 1600, 2000],
        // Process images into multiple sizes for responsiveness
        resizeOptions: {
          fit: 'cover',
          position: 'center'
        }
      }
    }
  },
  vite: {
    // Using Tailwind CSS v4 with @tailwindcss/vite
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    }
  },
  integrations: [
    mdx(),
    pagefind(),
    sitemap()
  ]
});
