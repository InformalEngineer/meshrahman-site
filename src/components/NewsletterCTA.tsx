// The newsletter is migrating off Ghost (see the migration plan in the ops
// repo). Until the new list is live this is a plain mailto, honest and zero
// backend. Swap the href for the Listmonk/Buttondown form action when it
// exists, one field, no popups (01-PRD F2).
export default function NewsletterCTA() {
  return (
    <div className="rounded border border-zinc-800 bg-zinc-900/50 p-5">
      <p className="font-mono text-xs text-accent">
        <span aria-hidden>◆ </span>save point · the newsletter
      </p>
      <p className="mt-2 text-sm text-zinc-300">
        One short email a week with what I built and what it actually cost
        (including the parts that broke). Until the signup form is up,
        subscribing is one email to me and I add you by hand.
      </p>
      <a
        href="mailto:MeshaelR@gmail.com?subject=Subscribe&body=Sign%20me%20up%20for%20the%20weekly%20notes."
        className="mt-3 inline-block rounded bg-accent px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90"
      >
        Subscribe by email
      </a>
    </div>
  );
}
