# Margin — vision

> **North Star: become more well read.** Read more books, and learn their words along the way.
> Margin is a quiet companion for a **reader of paper books**. It keeps what matters, asks for input only when that input pays you back, and is easy to put down.

This document decides what Margin is, what it will become, and where it stops. `PRINCIPLES.md` explains why each existing part earns its place; `DESIGN.md` describes how it works; `BACKLOG.md` holds the details of future work.

## Decisions (November 2026)

| Question | Decision | Consequence |
|---|---|---|
| Who is it for? | A reader of **paper books**. Not built for everyone. | Capture is designed around a phone lying beside an open book: type fast, autocomplete, keep the screen awake, and (native) point the camera at the page. E-book share flows are not a priority. |
| Words or passages? | **Words.** You underline passages in the book itself, with a pen. | No highlights, no quotes database. Passages may come later only if they never distract from words. |
| Numbers? | **Welcome when they come free** from what you already do (days read, books finished, words gathered). | No logging, no timers, no page counts: nothing you have to enter just to be measured. |
| Native app? | **On the table.** Get the prototype right first, then build the native iPhone/iPad app. | The prototype is the spec. |

## The three rooms

Every feature lives in exactly one room and serves that room's single measure. If it can't, it isn't built.

| Room | When | Its one job | Its measure | Today |
|---|---|---|---|---|
| **The Margin** (home) | While reading | Understand a word and get back to the book | Seconds away from the page | Gallery, writing line with autocomplete, paste a sentence, dog-ear, pronunciation |
| **The Commonplace** | Between readings | Make words yours | Words that stay (the ink) | Revisit, dog-eared words, words that keep finding you, still settling, kinship |
| **The Library** | Across a reading life | See what reading has given you, and begin the next book | Books read, days read | Shelves, beginning and closing a book, reading rhythm, the year |

Navigation: the Margin is always home. ❦ opens **the Library**; words ready to return and the Commonplace sit at its top, Preferences at its foot. There is no menu page in between.

## The shape of the experience: unlock → word → meaning → lock

Margin is closed most of the time. Reading is meant to slow things down and take you away from screens, so Margin should feel almost as calm as the page.

- **Opening it is for looking up.** Nothing greets you, reminds you or asks anything. The writing line is ready.
- **A word met in this sitting shows only what you need:** the word, its sound, its meaning, your sentence. The rest (quotation, kinship, kindred words, other books) appears when you come back to it later.
- **Motion is a 0.2-second fade.** Nothing moves after the meaning appears, because movement at the edge of your vision pulls your eye back to the phone.
- **No signals on the reading screen.** Words ready to return are shown in the Library, where you go when you choose to.
- **The phone is not a bookmark.** No always-on screen beside the book, and no continuously running camera. The camera (native) opens only for the moment you tap a word on the page.
- **One payment, then it's yours.** Free for the first book; nothing runs on a server; it works on a plane and in ten years.
- **The first launch is one question:** *What are you reading?* Then the writing line. One quiet line offers to bring in your old Notes lists.

## How Margin motivates without being an addictive app

1. **Gain, never loss.** Progress is something you *have*: darker ink, a fuller shelf, a page for your year. Nothing breaks if you miss a day. There are no streaks.
2. **Mark the moments a reader already feels.** Beginning a book, finishing it, the turn of the year. Never daily prompts.
3. **Coming back is always welcome.** After three weeks away you see *Last time: …*, never a backlog or a guilt message.
4. **Ask only when it pays you back.** A dog-ear changes what returns to you; a reason for starting a book comes back on its closing page. A star rating would change nothing, so there isn't one.
5. **Reflect what you read, not how much you used the app.** Reading rhythm counts days you read, not lookups.

## What's built (prototype)

- **Margin:** instant lookup, own-words-first autocomplete, paste a sentence and tap the word, dog-ear in one tap with an optional *why this word?*, spoken pronunciation.
- **Commonplace:** an invitation to Revisit when words are ready; dog-eared words with your reasons; words that keep finding you across books; still settling; **kinship**: on a word's page, *kin to fervent (Wolf Hall)*, linking your own words by meaning or root.
- **Library:** shelves by year; adding a book is just its title (author optional on the same line); the closing page; **reading rhythm** (days read, by month); **the year**, one typeset page per year: days read, books finished (as spines), words gathered and settled, your first and latest word, the word that followed you, your dog-ears.

## Roadmap

### Next, in the prototype
1. Polish what exists with real use: import your Notes lists, read with it for a week, and note anything that slows the reading moment.
2. Ambient "Last time" and Revisit tuning based on that week.

### The native app (v1): a paper reader's companion
1. **Tap the page, on demand.** The camera opens only for a moment (VisionKit Live Text): tap a word on the printed page, and the camera closes; the sentence comes with it, so the right sense is chosen and the context is saved. The single biggest gain for a paper reader.
2. **Open straight to the line.** (The most important native feature after the camera: unlock → word → meaning → lock.) Control Center control, Action Button and Lock Screen shortcut open Margin with the keyboard up.
3. **iCloud sync** between iPhone and iPad.
4. **One word, once a day.** A Lock Screen / Home Screen widget: a word from your margins, your sentence, the book's title; tap to see the meaning. Review that costs no reading time.
5. **Bundled dictionary** (WordNet as SQLite), human-recorded pronunciations when online, the best on-device voice offline.

### The long-term vision: The Writing Desk (Commonplace)
Write or paste your own writing, and words from your bank that could fit appear as pencil notes in the margin, never as automatic replacements. It closes the loop from reading to writing, the final layer of knowing a word: using it yourself. It's built on the same matching as kinship and on the sentences you've written in Revisit.

## Where Margin stops

Margin will not have, at any point:
- **Social anything:** feeds, followers, sharing for likes, leaderboards.
- **Streaks, XP, levels, badges, or loss-framed reminders.** At most one optional reminder, off by default.
- **Book tracking that Goodreads already does:** ratings, reviews, to-read lists, page counts, progress percentages, reading timers.
- **Recommendations or discovery.**
- **An AI tutor or chat.** The core stays free, offline and instant.
- **Flashcard decks to manage, or a graph to explore.** Kinship is the graph's value in one line.
- **Passages and highlights**, for now. The pen in the book does that better.

**The test for anything new:** which room does it belong to, does it improve that room's measure, and does it measure *reading and remembering* rather than *using the app*? If any answer is no, it doesn't get built.
