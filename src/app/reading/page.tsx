import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading",
  description:
    "Book notes, consolidated. The Western, Islamic, and Eastern reading structure from the old site survives here.",
};

// Consolidated from the old site's philosophy and book-notes pages
// (04-migration: thin pages fold into one). The three-tradition structure
// is the spine; notes per book get added as they're written.
const shelves = [
  {
    title: "Stoic and Western",
    books: [
      { title: "Meditations", author: "Marcus Aurelius", note: "the one I actually reread" },
      { title: "The Tao of Seneca", author: "Seneca", note: "" },
      { title: "The Beginning of Infinity", author: "David Deutsch", note: "" },
      { title: "Six Easy Pieces", author: "Richard Feynman", note: "" },
      { title: "Skin in the Game", author: "Nassim Taleb", note: "" },
    ],
  },
  {
    title: "Islamic wisdom",
    books: [
      { title: "The Clear Quran", author: "contemporary translation", note: "" },
      { title: "The Incoherence of the Philosophers", author: "Al-Ghazali", note: "" },
      {
        title: "The Reconstruction of Religious Thought in Islam",
        author: "Muhammad Iqbal",
        note: "",
      },
    ],
  },
  {
    title: "Eastern and contemporary",
    books: [
      { title: "The Book of Life", author: "Jiddu Krishnamurti", note: "" },
      { title: "Striking Thoughts", author: "Bruce Lee", note: "" },
      { title: "The Prophet", author: "Khalil Gibran", note: "" },
      { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", note: "" },
      { title: "The Untethered Soul", author: "Michael Singer", note: "" },
    ],
  },
  {
    title: "Practical",
    books: [
      { title: "Man's Search for Meaning", author: "Viktor E. Frankl", note: "" },
      { title: "Poor Charlie's Almanack", author: "Charles T. Munger", note: "" },
      { title: "Atomic Habits", author: "James Clear", note: "notes coming back in a rewrite" },
    ],
  },
];

export default function Reading() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Reading</h1>
      <p className="mt-3 max-w-xl text-zinc-400">
        The bookshelf, organized the way my head organizes it. Notes get added
        per book as I rewrite them from the old site (slowly, on purpose).
      </p>
      <div className="mt-12 space-y-10">
        {shelves.map((shelf) => (
          <section key={shelf.title}>
            <h2 className="font-mono text-xs uppercase tracking-wide text-accent">
              {shelf.title}
            </h2>
            <ul className="mt-3 space-y-2">
              {shelf.books.map((book) => (
                <li key={book.title} className="text-zinc-300">
                  <span className="font-medium">{book.title}</span>
                  <span className="text-zinc-500"> · {book.author}</span>
                  {book.note && (
                    <span className="text-sm text-zinc-500"> ({book.note})</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
