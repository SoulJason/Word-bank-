# Margin — a reading companion for words

A quiet iPhone/iPad app that sits beside the book you're reading. Write a word on the line, and it is set on a fresh leaf of paper. Later the words come back, one or two at a time, when you open the book again.

Clickable prototype: `prototype/index.html` with its dictionary in `prototype/dict/`. Serve the folder over HTTP to run it locally, e.g. `python3 -m http.server`.

## Feel

- **Paper, not screens.** Warm leaf on a slightly darker ground, a faint paper grain, Garamond type, old-style numerals, chapter numbers in roman, small-caps running heads. At night it becomes "lamplight": dark paper, parchment ink, an amber accent.
- **Things arrive and leave like ink and paper.** A new definition sets in line by line, like ink settling. Your word in the sentence is underlined by a pencil stroke drawn a moment later. Pages rise and settle; slips slide up and away.
- **Very little chrome.** A running head (book, chapter), the gallery, a ruled writing line, and one fleuron (❦). There are no tabs, badges or counters. When a word is waiting to return, a single small ink dot appears under the fleuron.

## The main experience: the Gallery

- One word per **leaf**, in the order you met them. You swipe through them like pages, and the neighbouring leaves rest faintly at the edges.
- The **writing line** at the bottom is always there. Type a word, press return, and it is set on a new leaf at the end. When you focus the line, a second line opens for *the sentence, if you like* and the page number.
- The sentence is used to **pick the right sense** of words with many meanings (a simplified Lesk algorithm compares your sentence with each sense). You can switch senses from "other senses" on the leaf.
- Word forms are understood: *melancholies → melancholy*, *stopped → stop*. Misspellings get a gentle "Perhaps…" with the closest words.
- The **leaf**: chapter and page, headword, part of speech, a plain pronunciation (MEL-uhn-kah-lee), the meaning, your sentence with the pencil underline, kindred words, and, when the dictionary has one, a literary quotation ("from rank to rank she darts her ardent eyes", Alexander Pope).
- **Keeping it quiet**: the Gallery only ever shows one word at a time. Tapping "Known" presses a word into the Index and takes it out of the Gallery.

## Leaving the Gallery

Tap the fleuron ❦, or pinch the gallery closed, and a **Contents** page appears, set like the front of a book with dotted leaders:

| Contents | |
|---|---|
| The Gallery | back to the leaves |
| Revisit | a short, quiet round |
| Index | every word, A–Z, like the back of a book |
| Commonplace Book | this book's words, typeset as a keepsake |
| The Shelf | switch or add books |

"Return to the book" at the top of every page brings you back.

## Three ideas for delight

1. **The Return.** Practice lives inside reading rather than in a separate quiz. When you open the book, at most two words that are due rise on a paper slip: *"Before you read on —"*, your own sentence with a gap, the first letter showing and the rest as faint dots. Pick the word (or reveal it), say whether you remembered, and the slip slides away. *Not now* is always one tap. It never appears more than once every 20 minutes. Revisit in Contents runs the same thing for up to six words.
2. **Ink that darkens.** There are no scores or streaks. A new word's headword is printed in pale graphite, and each time you remember it the ink darkens until it reaches full black. Forgetting fades it a little. Progress shows up only as the colour of the type.
3. **The Commonplace Book and echoes.** Each book collects into a typeset glossary: chapter by chapter, each word with its meaning and your sentence, ending in a colophon ("8 words gathered between 3 and 21 November"). It's something to keep when you finish the book. If you look up a word you've met before, in this book or another, the leaf comes back with *"Met again in chapter VII. It will come back sooner."* Meeting a word twice is the clearest sign it hasn't stuck, so it is rescheduled sooner.

## Spaced repetition

Strength 0–5 → next return in 0, 1, 3, 7, 16, 35 days. "Not yet" brings the word back in about an hour and lowers its strength by one. Meeting a word again also lowers it and brings it back tomorrow.

## Dictionary: free, offline, no credits

- **WordNet 3.1** (Princeton; free licence) for meanings, examples, literary quotations and synonyms. **CMU Pronouncing Dictionary** for pronunciations, turned into plain respellings.
- Built by `tools/build-dictionary.mjs` into 26 JSON files (one per letter, ~15 MB total, 82,784 words). The app loads a letter only when it needs it. The licence is in `prototype/dict/LICENSE.txt`.
- In the native app the same data ships inside the app bundle, so lookups are instant and work on a plane. Optional extras that are also free: the **Free Dictionary API** (dictionaryapi.dev, no key) for audio pronunciation and etymology when online, and Apple's built-in dictionary (`UIReferenceLibraryViewController`) as a "full entry" view.

## Native build plan (SwiftUI)

- Gallery: a horizontal paging `ScrollView` with `.scrollTargetBehavior(.viewAligned)`, and neighbours dimmed via `scrollTransition`. Contents opens with a pinch (`MagnifyGesture`) or from the fleuron.
- Ink-in: per-line `.transition(.opacity.combined(with: .blur))` with staggered delays. Pencil underline: an animated `Path` trim.
- Data: SwiftData (`Book`, `Word`, `Echo`) synced through CloudKit between iPhone and iPad. The dictionary is a read-only SQLite file in the bundle.
- Capture: a Share extension (select a word in Books or Kindle → Share → Margin, sentence included), an App Intent for Siri/Shortcuts, and later VisionKit Live Text to tap a word on a paper page.
- The Return: shown on app open. At most one gentle notification a day, off by default.

## Open questions

- Should the Gallery open on the newest leaf (current) or the fresh blank page?
- Is the pinch to Contents discoverable enough, or should the fleuron be the only way?
- Sound: a very soft paper sound on the page turn, off by default?
