# Margin — a reading companion for words

A quiet iPhone/iPad app for one job: when a word stops you in a book, understand it in a few seconds and get back to reading. Later, the words come back in a way that deepens your understanding and, eventually, lets you use them in your own writing.

Clickable prototype: `prototype/index.html`, with its dictionary in `prototype/dict/`. Serve the folder over HTTP to run it locally (`python3 -m http.server`). Future work is in `BACKLOG.md`.

---

## 1. The goal

> Learn words **in the context of the book**, so the book is more enjoyable. Understanding in the moment comes first; recall is saved for later, when it won't cost you the story.

Two different moments, two different jobs:

| | While reading | Coming back |
|---|---|---|
| What you want | The meaning, now, then the book again | To really own the word: understand it, recognise it anywhere, use it |
| What Margin does | Look up in seconds. Save automatically. Ask nothing. | Short, varied, quiet rounds when *you* choose |
| What Margin never does | Quiz you, ask for chapter or page, make you guess | Nag, count streaks, score you |

## 2. Today's workflow, and where it hurts

You keep a note per book (title on top, one word per line), and to see a meaning you double-tap the word, find **Look Up** in the menu, read, close. If you forget a word, you go back and do it all again.

| Pain | What Margin does instead |
|---|---|
| Double-tap → find "Look Up" → read → close, every time | Open the app: the writing line is ready. Type a few letters, tap the suggestion. The meaning sets in on the page. |
| You can't spell a word you've never seen | Autocomplete from 82,000 words as you type, and "Perhaps…" spelling suggestions for misspellings. |
| Forgetting means looking it up again | Your own words come first in autocomplete (marked with a dot). Typing a word you've saved shows its page instantly. Every saved word stays in the book's list with its meaning beside it. |
| The note has words but no meanings | **This Book's Words**: your note, but each line shows its meaning, your sentence and your margin note. Tap the book's title to see it. |
| The right meaning depends on the sentence | Paste the sentence instead of the word, tap the word you meant, and the meaning that fits that sentence is chosen. |
| You already have notes full of words | **Bring in a list from Notes**: paste a note (title, then one word per line) and every word is set, with misspellings offered a fix. **Copy as a list** goes the other way. |
| Noting chapter and page is too much work | Gone. Words are grouped automatically by **sitting** ("Thursday evening", "Last night"), the way you actually remember reading. |

## 3. The reading moment: seconds, not steps

1. Open Margin. On iPad with a keyboard the cursor is already on the line; on iPhone, one tap.
2. Type `lach` and **lachrymose** appears. Tap it. *(Or press return.)*
3. The page sets in: meaning first, then pronunciation, kindred words, and a literary quotation when there is one.
4. Back to the book. There's nothing to save, file or confirm.

**When you're reading on the same device** (Kindle, Books, a PDF): copy the sentence, paste it on the line, and tap the word. That's one gesture more than Look Up, and it saves the sentence, so the word is remembered *in its context* and the right sense is chosen. The native app's Share extension removes even that step (see §7).

### Small things that make it calm
- **One word per leaf.** The gallery shows only this book's words, one at a time, newest last. A blank leaf waits at the end.
- **No questions while reading.** The guess-first, later and chapter features from the earlier version are gone: they added work in the moment you most want to stay in the story.
- **"Known" presses a word into the Index**, out of the gallery, with Undo.
- **Before you read** (optional, on by default): when you come back to a book after a few hours, last sitting's words rise on a slip *with their meanings showing*, in case they turn up again. It's not a quiz, just a glance. Words in a novel recur, so this primes the next chapter. "Begin reading" sends it away.

## 4. Coming back: what learning research says, and how Revisit uses it

Revisit is where the effort lives, and only when you open it. A round is 4–7 words, takes 2–3 minutes, and mixes books.

The deciding idea: **knowing a word is not one thing.** Researchers describe word knowledge in layers (Nation): form, meaning, meaning *in different contexts*, related words, and finally using it yourself. Most flashcard apps only train one layer. Revisit walks a word up through them as it gets stronger.

| Strength | Card | What it trains | Why |
|---|---|---|---|
| New | **What it means.** Your word, in *your book's sentence*. "Say it to yourself, then look." Then Clear / Hazy / Forgot. | Meaning, in its original context | Recall from the reading direction (word → meaning), which is what you need to enjoy the next book. Context helps recall (encoding specificity). |
| Growing | **Met elsewhere.** A *different* author's sentence with a gap. Pick the word from three of your own. | Recognising the word in a new context | Varied contexts build a flexible meaning instead of one memorised sentence. Retrieval beats re-reading. |
| Steady | **The company it keeps.** "Which is nearest in meaning to *ardent*?": *fiery*, *taciturn*, *sanguine*. | Nuance and neighbours | Contrasting near words and synonyms deepens precision, the layer writers need. |
| Strong | **In your own hand.** Write a line of your own with it. It's kept on the leaf, in handwriting, beside the book's sentence. | Production, for your own writing | Generating a sentence is the deepest processing (the generation effect) and the bridge to writing. These sentences will feed the Writing Desk later. |

Supporting mechanics:
- **Spacing**: next return after 1, 3, 7, 16, 35 days as strength grows. The first return is the next day (sleep consolidates).
- **Honest self-rating**: Clear / Hazy / Forgot. Hazy holds the word in place; Forgot steps it back and **re-asks it at the end of the same round**, the fastest fix for a fresh miss.
- **Echoes**: looking a word up again in a later sitting means it hasn't stuck. Its leaf comes back and it returns sooner.
- **Interleaving**: rounds mix books and strengths.
- **The reward is the ink, not points.** A new word is printed in pale graphite and darkens each time it comes back clearly. The round ends with the list of words fading darker in front of you. No streaks or scores, since external rewards tend to crowd out the pleasure of reading itself (the overjustification effect).
- **When it shows up**: never on its own mid-read. A single ink dot under ❦ when three or more words are ready, a quiet "Revisit 6 words" on the *Before you read* slip, and (native) an optional once-a-day reminder you choose the time for.

## 5. Mobile UX practices applied

- **Speed of capture is the product**: the line is always visible, autocomplete keeps spelling out of the way, and the keyboard's key says "search".
- **Thumb zone**: the line and ❦ at the bottom; sideways swipes through leaves.
- **Undo, not "Are you sure?"**
- **Progressive disclosure**: one meaning up front, other senses folded, everything secondary behind ❦.
- **Touch targets** of 44 pt minimum.
- **No badges or red counts.**
- **Respect the system**: light and dark ("lamplight") themes, Reduce Motion, and adjustable text size (Dynamic Type in the native app).
- **Forgiving input**: plurals and tenses map to the dictionary form, misspellings get suggestions, and pasted text is split into tappable words.
- **Works offline and free**: the dictionary ships with the app.

## 5b. Many books, many words

- **Switching books**: tap the book's title (or the "4 of 120" folio on any leaf). Your books sit along the top of that page as tabs; tap one to switch. No scrolling.
- **Long lists**: once a book has more than a handful of words, a search line and a *By sitting / A–Z* switch appear. The Index searches every book by word, meaning or note.
- **One word, many books**: a word you meet in several books is one entry that knows all of them ("also in *Wolf Hall*, *Jane Eyre*"). It shows in each book's gallery and list, dated by when it entered that book.

## 5c. Bringing in your Notes

No AI needed: the format you already use (title line, then one word per line) is parsed directly and every word goes through the same offline dictionary.
- Paste one note, or **several at once** (tick "Several notes in one paste"; each starts with its title after an empty line). `#` headings or `---` lines also separate books.
- Bullets, numbers, checkboxes, "word – note" and "word: note" are cleaned; comma lists are split.
- A **preview** shows each book and its word count before anything is saved. Titles matching a book on your shelf add to it.
- Misspellings are offered a fix ("did you mean *florid*?").
- Imported words are spread across the coming days (about eight a day) so Revisit never floods.

## 5d. Patterns

A page (Contents → Patterns) that looks across all your books:
- **Words that keep finding you**: words met in more than one book, ranked by how many. Authors you read reach for them, so they're the most valuable to know well. "Revisit these" starts a round of just those words.
- **Still settling**: words forgotten in Revisit or looked up again. These also get "Revisit these".
- **How settled they are**: how many words sit at each shade of ink, from new to inked.
- **Words per book**, **When you meet them** (by month, looked-up words only, since imported words have no real date), **What kind of words** (adjectives vs nouns…), and **What they're about** (ideas that recur across your words' meanings).

## 6. Screens

- **Gallery** (main): leaves for this book. Each has the sitting ("Last night"), headword (ink darkens with strength), part of speech and pronunciation, meaning, your sentence with a pencil underline, kindred words, + a note in the margin, *In your hand* sentences, a literary quotation, other senses, Known and Remove.
- **Writing line**: autocomplete with your words first. A pasted sentence becomes "Which word?"
- **This Book's Words** (tap the title, or pinch the gallery): your note, typeset, grouped by sitting; Copy as a list.
- **Contents** (❦): The Gallery · This Book's Words · Revisit · Index (all books, searchable by word, meaning or note) · Patterns · The Shelf (books, import from Notes) · Preferences · *The Writing Desk, in a later edition*.
- **Preferences**: Before I read, show last time's words · Keep the screen awake · Size of type.

## 7. Native app: removing the remaining steps

The prototype runs in a browser, so a few things only the real iOS app can do:

1. **Share extension, "Add to Margin"**: select a word in Kindle, Books, Safari or a PDF, then Share → Margin. The surrounding sentence comes along, the sense is chosen, and a small card shows the meaning *without leaving the book*. This replaces Look Up entirely for e-books.
2. **Live Text from the camera** (paper books): point at the page and tap the word. The sentence is captured too.
3. **Control Center control / Action Button / Lock Screen**: opens straight to the writing line with the keyboard up.
4. **Spotlight / Siri**: "Define lachrymose in Margin."
5. **iCloud sync** between iPhone and iPad (SwiftData + CloudKit).
6. **One optional evening reminder** for Revisit, off by default. A Lock Screen widget can show one word and its meaning, which is passive review with no interaction.

SwiftUI notes: paging `ScrollView` with `.scrollTargetBehavior(.viewAligned)`; ink-in as opacity+blur transitions; pencil underline as an animated `Path.trim`; slips as sheets with custom detents; a single soft haptic when a word is set.

## 8. Dictionary: free, offline, no credits

- **WordNet 3.1** (Princeton, free licence): meanings, examples, literary quotations, synonyms. **CMU Pronouncing Dictionary**: pronunciations, as plain respellings.
- `tools/build-dictionary.mjs` builds 26 JSON files (~15 MB, 82,784 words) loaded one letter at a time. Proper names are flagged so autocomplete skips them. Licence in `prototype/dict/LICENSE.txt`.
- Optional, free, online-only extras for the native app: the Free Dictionary API (dictionaryapi.dev) for audio and etymology; Apple's built-in dictionary as a "full entry" view.

## 9. Open questions

- Should *Before you read* also appear when switching books, or only after a few hours away?
- Should an imported Notes list start with "What it means" cards for everything, since those words have no sentence?
- Audio pronunciation (free API, online only): worth a small speaker button on the leaf?
