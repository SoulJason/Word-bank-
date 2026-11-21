# Margin — a reading companion for words

A quiet iPhone/iPad app that sits beside the book you're reading. Write a word on the line and it is set on a fresh leaf of paper. Later the words come back at natural pauses, one or two at a time.

Clickable prototype: `prototype/index.html`, with its dictionary in `prototype/dict/`. Serve the folder over HTTP to run it locally (`python3 -m http.server`).

---

## 1. The goal, stated as a constraint

> The book comes first. Margin should take a reader's attention only when they ask for it, give it back quickly, and make the few moments it holds feel like part of reading.

Every decision below is checked against two questions:
1. **Does it protect the reading?** Fewer, shorter, better-timed interruptions.
2. **Does it help the word stay?** Use the few things learning research says actually work.

## 2. What learning research tells us

| Finding | What it means | How Margin uses it |
|---|---|---|
| **Context and encoding specificity** (Tulving) | Words are remembered better with the situation they were learned in. | Your sentence and page are saved with the word and come back in practice. Practice is literally "back in the book." |
| **Pretesting / errorful generation** (Kornell, Richland) | Guessing before seeing an answer improves memory, even when the guess is wrong. | **Guess before the meaning** (optional): a leaf arrives veiled; you guess from the sentence, then lift the veil. Your guess stays on the leaf in handwriting. Pencilled ("later") words are always guessed first. |
| **Generation and self-reference** (Slamecka & Graf; Rogers) | What you produce yourself, or connect to yourself, sticks better than what you read. | **A note in the margin** in handwriting. **In your words**: strong words ask for a sentence of your own, kept on the leaf. |
| **Retrieval practice / testing effect** (Roediger & Karpicke) | Pulling a word out of memory strengthens it more than re-reading it. | Practice never shows the answer first. Each return asks you to recall, then shows the word. |
| **Spacing and the forgetting curve** (Ebbinghaus; Cepeda) | Reviews spread over growing gaps beat cramming. | Returns at 1, 3, 7, 16, 35 days. A miss brings a word back in an hour. |
| **Sleep consolidation** | Memory settles overnight. | The first return is the next day, never the same session. |
| **Desirable difficulties** (Bjork) | Effortful but achievable recall works best; too hard discourages. | A ladder: **recognise** (pick from three) → **recall** (meaning + first letter, type it) → **use** (write your own line). Difficulty rises with strength. |
| **Interleaving** | Mixing items works better than blocking. | Revisit mixes chapters and books. |
| **Encountering a word again** | Meeting a word in the wild is natural spaced repetition, and re-looking-up means it hasn't stuck. | **Echoes**: looking up a word you've met before brings its leaf back ("Met again in chapter VII") and schedules it sooner. |
| **Event segmentation** (Zacks) | People naturally consolidate at boundaries, like the end of a chapter. | **Chapter's end**: when you move to the next chapter, the chapter's words appear with meanings folded; tap each to check yourself. Pencilled words wait here. |
| **Intrinsic motivation & overjustification** (Deci & Ryan) | Points, streaks and badges can crowd out the pleasure of the activity itself. | No streaks, scores or red badges. Progress is the **ink darkening** on the headword, and the **Commonplace Book** you end up with. |
| **Attention residue** (Leroy) | Switching tasks leaves part of the mind behind; long interruptions cost reading focus. | Lookup is one line and one key. **Later** lets you save a word without reading its meaning, so you don't leave the book at all. Practice never interrupts mid-chapter. |
| **Cognitive load** | One idea at a time. | One word per leaf. The meaning is a single line first; other senses are folded away. |

### Can the research support the feeling you want?

Mostly yes, with one real tension. Retrieval practice works because it takes effort, and effort is the opposite of calm. Margin resolves this by:
- **Placing effort only at natural pauses** (opening the book, a chapter's end, or when you choose Revisit), never during reading.
- **Keeping it short**: two words on opening, one chapter's words at a chapter's end, six in Revisit.
- **Never penalising**: "Not yet" is as easy to tap as "I remembered." A miss only means the word returns sooner.
- **Making the reward aesthetic, not numeric**: darker ink, a fuller Commonplace Book.
- **Letting you turn it down**: the Return can be switched off. Guessing first is off by default.

## 3. How the app organises itself around that

The learning loop, mapped onto the reading:

```
 Encounter ──► Encode ──────────────► Consolidate ──► Retrieve ───────────────► Use ──────► Keep
 (a word in    (gist, your sentence,  (overnight)     (book opening, chapter's   (own line   (Commonplace
  the book)     guess, margin note)                    end, Revisit)               of text)    Book, Index)
```

| Moment in reading | What Margin does | How much it asks of you |
|---|---|---|
| Mid-paragraph, a word stops you | Write it. **Return** = see the meaning now. **Later** = pencil it in and keep reading. | 3–5 seconds |
| You want the right sense | Add the sentence. It picks the matching meaning (a simplified Lesk algorithm). | Optional |
| End of a chapter (› in the running head) | The chapter's words, meanings folded. Tap to check yourself. Pencilled words: guess, then lift the veil. | ~30 seconds, skippable with "Read on" |
| Opening the book after 30+ minutes away | At most two due words rise on a slip: "Before you read on —" | ~15 seconds, "Not now" always there |
| When you feel like it | Revisit: up to six words on the recognise → recall → use ladder. | ~2 minutes |
| Finishing a book | The Commonplace Book: a typeset glossary of that book, with your sentences and notes. | None. It's a keepsake. |

## 4. Mobile UX practices applied

- **Thumb zone**: the writing line and the ❦ sit at the bottom, where one thumb reaches on a phone. Swiping the gallery sideways is a natural one-thumb gesture. The rarely used chapter control is at the top.
- **Speed of capture is the product**: the writing line is always visible, and on iPad with a keyboard any letter key starts typing. The keyboard shows "search". No confirmation dialogs.
- **Undo instead of confirm**: Remove and Known show a quiet line with **Undo** for five seconds.
- **Progressive disclosure**: the sentence and page fields only open when you start writing. Other senses are folded. Everything secondary lives one tap behind ❦.
- **Touch targets**: 44 pt minimum on every control, even the small-caps text buttons.
- **No badges, no red, no counts on the home screen**: one 5 px ink dot under ❦ when words are waiting.
- **Respect the system**: light and dark ("lamplight") themes, Reduce Motion turns all ink and paper motion into plain fades, and text size is adjustable (Dynamic Type in the native app).
- **The device as a reading companion**: optional **keep the screen awake** for a phone lying beside a paper book.
- **Forgiving input**: inflected forms are understood (*melancholies → melancholy*), misspellings get "Perhaps…", and checking your recall accepts any form of the word.
- **Motion with meaning**: things arrive the way paper and ink do (settle, ink in, a pencil underline drawn a beat later) and leave the same way. One motion per event, never decoration.
- **iPad**: neighbouring leaves are visible at the sides, the layout is comfortable in Split View beside Books or Kindle, and arrow keys turn leaves.

## 5. What a reader wants (and the features that serve it)

1. **Don't break my flow.** → *Later*: save a word without reading its meaning. *Chapter's end* collects them.
2. **Get the meaning that fits this sentence.** → Your sentence picks the sense, and you can switch with one tap.
3. **Don't make me manage a list.** → One word per leaf. Known words are pressed into the Index. The gallery only shows this book's words.
4. **Help me remember without homework.** → The Return at book opening, chapter's end, darkening ink. Revisit is opt-in.
5. **Let it be mine.** → Margin notes and your own sentences in handwriting, your guesses kept, the Commonplace Book.
6. **Work across my books.** → The Shelf, a cross-book Index, and echoes across books.
7. **Work offline and free.** → The whole dictionary ships with the app.

## 6. The screens

- **Gallery** (main): one word per leaf, swiped like pages. Each leaf has, in order: running head (chapter in roman numerals, page), headword (ink darkens with strength), part of speech and plain pronunciation (loog-YOO-bree-uhs), meaning, your guess, your sentence with a pencil underline, kindred words, margin note, your own sentence, echo note, a literary quotation when the dictionary has one, and other senses folded. At the foot: folio ("4 of 9"), Known, Remove. The last leaf is always a fresh blank page.
- **Writing line**: always present. Return = define now. *later* = pencil it in. Focusing it reveals *the sentence, if you like* and *page*.
- **Slips**: paper slips that rise from the bottom over a soft veil (the Return, Chapter's end) and slide away.
- **Contents** (❦ or pinch the gallery): The Gallery, Revisit, Index, Commonplace Book, The Shelf, Preferences, each set with dotted leaders like the front of a book.
- **Preferences**: words return when I open the book · guess before the meaning · keep the screen awake · size of type.

## 7. Dictionary: free, offline, no credits

- **WordNet 3.1** (Princeton, free licence) for meanings, examples, literary quotations and synonyms. **CMU Pronouncing Dictionary** for pronunciations, turned into plain respellings.
- Built by `tools/build-dictionary.mjs` into 26 JSON files (one per letter, ~15 MB, 82,784 words), loaded a letter at a time. Licence in `prototype/dict/LICENSE.txt`.
- Native: the same data as a read-only SQLite file in the app bundle. Free optional extras when online: the Free Dictionary API (dictionaryapi.dev) for audio and etymology, and Apple's built-in dictionary (`UIReferenceLibraryViewController`) as a "full entry" view.

## 8. Native build plan (SwiftUI)

- **Gallery**: horizontal paging `ScrollView` with `.scrollTargetBehavior(.viewAligned)`, neighbours dimmed with `scrollTransition`. Contents via `MagnifyGesture` or the ❦.
- **Motion**: ink-in as `.opacity` + `.blur` transitions with staggered delays. The pencil underline is an animated `Path.trim`. Slips are sheets with custom detents and a slight rotation. All of it collapses to fades under Reduce Motion.
- **Haptics**: a single soft `.impact(.soft)` when a word is set, and when a slip settles. Nothing else.
- **Data**: SwiftData (`Book`, `Word`, `Echo`, `Review`) synced through CloudKit between iPhone and iPad.
- **Capture without opening the app**:
  - Share extension: select a word in Books or Kindle, then Share → Margin. The sentence comes along automatically, so the sense is picked for you.
  - App Intent "Pencil in a word" for Siri, the Action Button and a Control Center control, which saves a *later* word without leaving the book.
  - VisionKit Live Text: point the camera at a paper page and tap the word. This captures the sentence too.
- **Lock Screen widget**: shows only "3 words waiting" in the same quiet type, or nothing. No notifications by default; an optional single evening reminder.
- **Focus**: respect the Reading Focus. When it's on, the Return never appears unprompted.

## 9. Open questions

- Should the chapter's end also offer the Return's due words, or keep them strictly separate?
- Should *later* become the default for paper-book readers (guess first, everything at the chapter's end)?
- Audio pronunciation (free API, when online): worth the extra button?
- A soft paper sound on page turns, off by default?
