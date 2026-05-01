import { getCollection } from 'astro:content';
import { getVisibleDailyNotes } from '../../utils/daily-notes';

export async function GET() {
  const notes = getVisibleDailyNotes(await getCollection('dailyNotes'));

  return new Response(
    JSON.stringify(
      notes.map((note) => ({
        slug: note.id,
        title: note.data.title,
        excerpt: note.data.excerpt,
        date: note.data.date,
        tags: note.data.tags || [],
        searchable: `${note.data.title} ${note.data.excerpt} ${(note.data.tags || []).join(' ')}`.toLowerCase(),
      })),
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
  );
}
