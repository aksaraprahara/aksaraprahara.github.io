export const DEFAULT_AUTHOR_NAME = 'Yudi Putra Wiratama';

const AUTHOR_DIRECTORY = [
  {
    name: DEFAULT_AUTHOR_NAME,
    avatar: '/images/site-logo.png',
    bio: 'Menulis catatan teknis seputar linux, container, observability, storage, virtualisasi, dan operasional infrastruktur.',
  },
  {
    name: 'Peter Wessel Zapffe',
    avatar: '/images/image12.png',
    bio: 'Filsuf dan penulis Norwegia yang dikenal lewat pesimisme eksistensial dan refleksi tajam tentang kesadaran manusia.',
  },
  {
    name: 'Wiji Thukul',
    avatar: '/images/image13.png',
    bio: 'Penyair Indonesia dengan suara yang tajam, langsung, dan politis; dipakai di sini sebagai author dummy untuk pengujian fitur multi-author.',
  },
  {
    name: 'Max Stirner',
    avatar: '',
    bio: 'Pemikir individualis radikal yang di sini dipakai sebagai dummy author untuk menguji fallback avatar dan archive author.',
  },
  {
    name: 'Clarice Lispector',
    avatar: '/images/image15.png',
    bio: 'Novelis dan penulis Brasil yang dikenal dengan prosa introspektif; dipakai sebagai dummy author untuk menguji tampilan bio dan avatar.',
  },
];

export function getAuthorName(data: { author?: string }) {
  return data.author || DEFAULT_AUTHOR_NAME;
}

export function getAuthorProfile(name: string) {
  return AUTHOR_DIRECTORY.find((author) => author.name === name) || {
    name,
    avatar: '',
    bio: '',
  };
}

export function getAuthorAvatar(input: string | { author?: string }) {
  const name = typeof input === 'string' ? input : getAuthorName(input);
  return getAuthorProfile(name).avatar;
}

export function getAuthorBio(input: string | { author?: string }) {
  const name = typeof input === 'string' ? input : getAuthorName(input);
  return getAuthorProfile(name).bio;
}

export function getAuthorInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');
}

export function slugifyAuthor(name: string) {
  return name
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getAuthorHref(name: string) {
  return `/authors/${slugifyAuthor(name)}`;
}
