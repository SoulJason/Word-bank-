# Margin — a reading companion for words

A quiet iPhone/iPad app for one job: when a word stops you in a book, understand it in a few seconds and get back to reading. Later, the words come back in a way that deepens your understanding and, eventually, lets you use them in your own writing.

Clickable prototype: `prototype/index.html`, with its dictionary in `prototype/dict/`. Serve the folder over HTTP to run it locally (`python3 -m http.server`). Future work is in `BACKLOG.md`. **What Margin is and where it stops is in `VISION.md`; why each part exists is in `PRINCIPLES.md`.** Both take precedence where they differ from this document.

---

## 1. The goal

> Learn words **in the context of the book**, so the book is more enjoyable. Understanding in the moment comes first; recall is saved for later, when it won't cost you the story.

Two different moments, two different jobs:

| | While reading | Coming back |
|---|---|---|
| What you want | The meaning, now, then the book again | To really own the word: understand it, recognise it anywhere, use it |
| What Margin does | Look up in seconds. Save automatically. Ask nothing. | Short, varied, quiet rounds when *you* choose |
| What Margin never does | Quiz you, ask for chapter or page, make you guess | Nag, count streaks, score you |

## 1b. What's essential (the literary core)

Everything on screen should earn its place. What stays, because it *is* the experience:
1. **The word, set large in a book face**, inked darker as you come to know it.
2. **The pronunciation**, as a plain respelling (*i-BUHL-yuhnt*). Tap it to hear the word spoken. The prototype picks the most natural English voice on the device (Premium, Enhanced or Natural voices before the robotic defaults), and Preferences lets you choose. The native app should prefer **real human recordings** (Wiktionary/Wikimedia Commons audio, free through the Free Dictionary API when online), falling back to the best on-device voice (`AVSpeechSynthesizer` with a Premium voice) offline.
3. **One plain meaning**, the sense that fits your sentence.
4. **Your sentence from the book, with the word underlined in pencil.** This is the strongest memory cue there is, and the most loved detail.
5. **Your own marks**: a margin note in handwriting, your own sentences from Revisit.
6. **A literary quotation**, when one exists. It costs nothing and it delights.

Folded away under one quiet "kindred words · 2 other senses": synonyms and alternative senses. **Notes are rare, by design.** The North Star is to read more; learning words is what happens along the way. So a page never asks for a note. Instead, each leaf has a small folded corner: **dog-ear** a word that really catches you: one tap folds the corner and puts the cursor on a faint *why this word?* line under your sentence. Write a few words, or just tap away; the word stays dog-eared either way. Dog-eared words get a small corner mark in the book's list and a *Dog-eared* filter, reach the "write your own line" step in Revisit sooner, and are gathered in Patterns with your reasons, so you can see what the words you love have in common.

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

## 5c+. Finished books and the Library

Margin doesn't try to be Goodreads. It only needs to know one thing about a book: *are you still reading it?*
- **Reading now** books are the tabs at the top of the book page and the ones the gallery opens to. Nothing else gets in the way.
- **I've finished this book** (at the foot of its word list) moves it to the Library and shows a short **closing page**: the date, an ink strip of all its words, how many sittings, which words settled and which are still settling, then *What are you reading next?* with your other books or a new title. "Finished earlier? Remove the date" is there for books you mark late.
- **The Library** (Contents → The Library): *Reading now* as a simple list, then finished books as small volumes grouped by year ("Finished in 2026", "Finished earlier"). Each volume shows title, author, word count, when you read it, and its **ink strip**: one mark per word, shaded from pale (new) to black (known). At a glance you see which books you've really absorbed.
- Finished books stay fully usable: open one to read its words, search, *Revisit its words*, copy as a list, or tap *Reading it again*. Their words keep coming back in Revisit, because finishing the book shouldn't mean forgetting its words.
- **Importing old notes**: "I've finished these books" is ticked by default, so old lists go straight to the Library with no dates.

## 5c++. Sittings: when you picked the book up

Dates do help a little. Remembering *when and where* you met a word is a real retrieval cue, and the record of your reading rhythm is quietly pleasing. But big date headings made the list long, so:
- The book page opens with a **thread of your sittings**: a single line from your first day to your last (or the day you finished), one dot per sitting, sized by how many words you met. "You picked it up on 9 days over 5 weeks." Tap a dot to jump to those words.
- In the list itself, a sitting is only a **hairline with a tiny date**, not a heading, so the words stay close together. *A–Z* removes them entirely.

## 5c+++. The Library as a bookshelf

- Each book is a **spine on a wooden shelf**: cloth-coloured (oxblood, bottle green, navy, ochre, slate, plum), title in gilt, the word count at its foot. **Thicker spines hold more words.**
- **Reading now** is its own shelf; a red ribbon marks the books you're in. A dashed "+" spine adds a book.
- Finished books are shelved **by the year you finished them** ("2026", "Read before"), each shelf closed with a bookend.
- A short opening line in prose: "6 books, 35 words. *Wolf Hall* gave you the most. *ardent* has followed you through 3 books. 2 words have settled into dark ink."
- Take a spine down (tap) to open its words, with the ink strip and sittings thread at the top.

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
- **Contents** (❦): The Gallery · This Book's Words · Revisit · Index (all books, searchable by word, meaning or note) · Patterns · The Library (reading now, finished books, import from Notes) · Preferences · *The Writing Desk, in a later edition*.
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
