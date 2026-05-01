import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

function extractYouTubeId(urlString) {
  try {
    const url = new URL(urlString);
    const host = url.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      return url.pathname.split('/').filter(Boolean)[0] || null;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      if (url.pathname === '/watch') {
        return url.searchParams.get('v');
      }

      const segments = url.pathname.split('/').filter(Boolean);
      if (segments[0] === 'embed' || segments[0] === 'shorts') {
        return segments[1] || null;
      }
    }

    return null;
  } catch {
    return null;
  }
}

function extractStandaloneUrl(node) {
  if (!node || node.type !== 'paragraph' || !Array.isArray(node.children)) {
    return null;
  }

  const meaningfulChildren = node.children.filter(
    (child) => !(child.type === 'text' && child.value.trim() === ''),
  );

  if (meaningfulChildren.length !== 1) {
    return null;
  }

  const [child] = meaningfulChildren;

  if (child.type === 'link') {
    return child.url;
  }

  if (child.type === 'text') {
    return child.value.trim();
  }

  return null;
}

function remarkAutoEmbedYouTube() {
  return (tree) => {
    function transform(node) {
      if (!node || !Array.isArray(node.children)) return;

      node.children = node.children.map((child) => {
        const standaloneUrl = extractStandaloneUrl(child);
        const videoId = standaloneUrl ? extractYouTubeId(standaloneUrl) : null;

        if (videoId) {
          return {
            type: 'html',
            value: `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`,
          };
        }

        transform(child);
        return child;
      });
    }

    transform(tree);
  };
}

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
    remarkPlugins: [remarkAutoEmbedYouTube],
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
