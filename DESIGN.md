# Margin — a reading companion for words

A small iPhone/iPad app that sits next to the book you're reading. Type a word, get a definition you'll actually remember, and later get the words back in a short practice round.

Clickable prototype: `prototype/index.html` (single file, open in any browser; live definitions work when viewed as a Claude artifact).

## Principles

1. **Lookup in under two seconds.** The input field is the first thing on screen and is focused when you open the app. One field, one button.
2. **Gist first.** A long dictionary entry is what makes words slip away. Each card leads with a 3–7 word gist, then one sentence of definition.
3. **Give the memory something to hold.** Every card has a vivid image ("Picture it") and a root that links to a word you already know (ardent → arson).
4. **Keep the reading screen quiet.** Only the newest card is open. The current chapter is a list of one-liners. Earlier chapters fold into a single row. Words you mark "I know this" leave the reading screen.
5. **Practice should feel like going back into the book**, not like flashcards.

## Structure

| Area | Purpose |
|---|---|
| **Reading** | Current book + chapter, the lookup field, the newest card, this chapter's words, earlier chapters folded. |
| **Words** | Every word across books. Search by word or meaning, filter by book, memory strength dots. |
| **Practice** | A round of up to 7 words that are due. Badge on the tab shows how many. |

On iPhone: bottom tab bar, one column. On iPad: sidebar with books and sections, and the reading screen splits into card (left) and chapter list (right), so it works in Split View beside Apple Books or a Kindle app.

## The word card

```
ebullient                      ← headword, highlighter underline
/ɪˈbʊl.i.ənt/  adj.  p.124  Ch.7
Bubbling over with energy      ← gist (the line you remember)
Cheerful and full of energy.   ← one-sentence definition
IN THE BOOK   "Fred, ebullient after his good fortune."
PICTURE IT    A pot boiling over with laughter.
ROOT          Latin ebullire, "to boil out".
EXAMPLE       Fred came in ebullient after the race.
```

Optional at capture time: paste the sentence (also used to pick the right sense of a word with several meanings) and the page number. The chapter is set once with the ‹ Ch. 7 › stepper and applied to every word until you change it.

## Practice

Spaced repetition with gentle intervals (0, 1, 3, 7, 16, 35 days by strength level 0–5). Three kinds of question, chosen by how well you know the word:

- **Back in the book** (new words): your own sentence comes back with a gap; pick from three words in your bank.
- **Name it**: see the gist and first letter, type the word. Then grade yourself: Forgot / Hazy / Knew it.
- **Use it** (stronger words): write your own sentence; Claude says in one or two lines whether it lands and corrects it if not.

## Native build plan (SwiftUI)

- **Data**: SwiftData models `Book`, `Word`, `Review`; sync via CloudKit so iPhone and iPad share one bank.
- **Definitions**: Claude API call returning the same JSON as the prototype (`word, ipa, pos, gist, def, hook, root, example`), with the context sentence when given. Offline fallback: `UIReferenceLibraryViewController` (Apple's built-in dictionary).
- **Fast capture**: App Intent / Shortcut "Look up in Margin", a Lock Screen / Control Center control, and a Share Sheet extension so you can select a word in Books or Kindle and send it.
- **Camera capture (later)**: point at the page, tap a word (VisionKit Live Text) — it also grabs the sentence.
- **Practice reminders**: one quiet notification a day when words are due, never more.

## Open questions to iterate on

- Should earlier chapters fold automatically, or should the book screen show only the current session?
- Is the "Picture it" hook helpful, or noise? Could be toggled off.
- Practice: daily round vs. "end of reading session" round when you close the book.
- Audio pronunciation on the card?
