import type { CollectionEntry } from 'astro:content';

type DailyNoteEntry = CollectionEntry<'dailyNotes'>;

export function getVisibleDailyNotes(notes: DailyNoteEntry[]) {
  return notes
    .filter((note) => import.meta.env.DEV || !note.data.draft)
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
}
