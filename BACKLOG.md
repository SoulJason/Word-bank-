# Margin backlog

## The Writing Desk (future tab)

The long-term vision for the Commonplace (see VISION.md). Not shown in the app until it exists.

**Idea:** paste or write your own text, and Margin suggests words from *your* word bank that could fit, so the words you collected while reading find their way into your writing.

How it could work, offline and free, building on what is already in place:
- Tokenise the text. For each plain word or phrase, look for word-bank entries whose WordNet synonyms or definitions overlap with it (e.g. you wrote *very happy* → **ebullient**: "joyously unrestrained"; *stubborn* → **obdurate**).
- Show suggestions as quiet pencil marks in the margin of your text, never as auto-replacements. Tap one to see the word's leaf, your book sentence and your *In your hand* sentences, so you can judge whether it fits.
- Prefer words at strength 3+ (you know them well enough to use them) and words you haven't used yet.
- Each word you accept counts as a "use" and strengthens it, which closes the loop from reading to writing.
- Optional later: an LLM pass to check register and whether the word truly fits the sentence (would need an API key or on-device model).

Groundwork already done: *In your hand* sentences are stored per word (`owns`), synonyms are stored per sense, and the word bank spans books.

## Native iOS app

- Share extension "Add to Margin" with sentence capture and an in-place meaning card.
- VisionKit Live Text camera capture for paper books.
- Control Center control, Action Button, Lock Screen and Siri entry points.
- SwiftData + CloudKit sync between iPhone and iPad.
- Optional single daily Revisit reminder; Lock Screen widget with one word.
- Bundle the WordNet data as SQLite.

## Smaller ideas

- **Goodreads**: its public API is closed to new apps, but Goodreads can export your library as a CSV (My Books → Import and export). Reading that file could fill in authors and finish dates for books in the Library, and mark books finished automatically.
- Human-recorded pronunciations (Wiktionary / Wikimedia Commons audio via the Free Dictionary API) when online, falling back to the device's best voice. The prototype can't fetch them because the artifact page blocks outside sites.
- Etymology line when online.
- Export a book's words (with meanings) as a nicely typeset PDF keepsake.
