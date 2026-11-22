# Margin — first principles

Why every part of Margin is there, judged in a fixed order. Anything that can't justify itself is cut.

## 0. The order of judgement

1. **The North Star: become more well read.** Read more books, and learn more words along the way. The book is the point. Margin is a tool you put down.
2. **Learning that actually works.** When Margin does take your attention, it should leave the word more firmly in memory than any other use of those seconds.
3. **Subtle delight.** Motion and craft that make the few moments in Margin feel like part of reading, never a reason to stay longer.
4. **Visuals and quietness.** Paper, ink and type. Nothing that blinks, counts or calls.

A feature has to pass (1) before (2)–(4) count. A delightful thing that pulls you away from the book fails.

## 1. Eight principles

| # | Principle | What it means in practice | Grounding |
|---|---|---|---|
| 1 | **The book comes first** | Every interaction is measured in seconds away from the page. Lookup should take under five. | North Star. Attention residue (Leroy): each switch away costs focus after you return. |
| 2 | **Meaning in half a second** | No animation may delay the definition. Decoration comes *after* the meaning is readable. | Doherty threshold: responses under ~400 ms keep you in flow. |
| 3 | **Nothing asks** | Margin never prompts, nags, scores or streaks. You start everything, except one optional reminder line. | Self-determination theory: autonomy keeps motivation intrinsic. Overjustification effect: rewards crowd out pleasure. |
| 4 | **Effort only at pauses** | Recall happens in Revisit, which you choose. Never mid-chapter. | Retrieval practice works (Roediger & Karpicke), but only when it doesn't cost the story. |
| 5 | **Context is the memory** | Your sentence from the book, with the word underlined, is the most important thing on the page after the meaning. | Encoding specificity (Tulving): memory comes back with the context it was formed in. |
| 6 | **One thing at a time** | One word per leaf, one meaning up front, one card per Revisit step. | Cognitive load; Hick's law: fewer choices, faster decisions. |
| 7 | **Paper, not software** | Things arrive like ink settling and leave like a page turning. Each motion says what happened, once. | Motion as feedback (Material, Apple HIG), not decoration. Skeuomorphism used for *meaning* (a dog-ear means "this page matters"). |
| 8 | **Yours, and portable** | Your notes, sentences and lists can always be copied out. Nothing is locked in. | Trust; and the app should be easy to leave. |

## 2. The reading moment (where the North Star is won or lost)

```
a word stops you  →  open Margin  →  type 3–4 letters  →  tap the suggestion  →  meaning (≤0.5 s)  →  back to the book
                     (line ready)    (spelling solved)    (or paste sentence)    + your sentence
```

Target: **under five seconds, two taps, zero decisions you didn't need to make.** Everything in the gallery is judged by whether it slows this down.

## 3. Surface-by-surface audit

Verdicts: **Keep** as is · **Simplified** in this pass · **Cut** in this pass.

### The gallery (main screen)

| Element | Why it's there | Verdict |
|---|---|---|
| Book title as running head | Orientation: which book's words you're in. Doubles as the door to the book's list (no extra button). | Keep |
| One word per leaf, horizontal swipe | One thing at a time; swiping sideways is the most natural one-thumb gesture and mirrors turning pages. | Keep |
| Neighbouring leaves dimmed and slightly smaller | Wayfinding: you can see there's more without it competing. | Keep |
| Blank last leaf | Tells you where new words go; a clear end. | Keep |
| Sitting label ("Last night") | Small episodic cue: *when* you met it helps recall a little; costs one line of small caps. | Keep |
| Headword, ink darkening with strength | The only progress indicator in the app. Feedback without numbers. | Keep |
| Pronunciation respelling, tap to hear | Knowing how a word sounds makes it far likelier you'll recognise and use it (phonological encoding; dual coding of sound and text). | Keep |
| Meaning: one sense, plain | The reason you opened the app. The sense that fits your sentence is chosen for you. | Keep |
| Your sentence with the pencil underline | The strongest memory cue (context), and the most loved detail. | Keep |
| Literary quotation (when one exists) | Delight that also gives a second, different context, which helps flexible understanding. Costs nothing when absent. | Keep |
| "kindred words · other senses" folded | Useful for writing and for correcting the sense; folded because it's rarely needed while reading. | Keep (folded) |
| Dog-ear corner → *why this word?* | Self-reference effect, but only for the few words that matter to you. One tap; no prompt on other words. | Keep |
| *Also in…* / *looked up again* lines | One line each. Meeting a word twice is the clearest signal it matters, or that it hasn't stuck. | Keep |
| *In your hand* sentences | Your own sentences from Revisit: production is the deepest learning, and the bridge to writing. | Keep |
| Folio "8 of 9" (tap → book's list) | Wayfinding plus a second door to the list, where your thumb already is. | Keep |
| Known / Remove (with Undo) | Lets you keep the gallery quiet. Undo instead of "Are you sure?". | Keep |
| Writing line, always visible, bottom | Thumb zone; capture speed is the product. | Keep |
| Autocomplete (your words first) | Solves spelling a word you've never seen; finds a word you forgot in two letters. | Keep |
| Paste a sentence → "Which word?" | One gesture saves context *and* picks the right sense on e-books. | Keep |
| ❦ (Contents) and the single ink dot | The only way out to everything else; the dot is the only signal, and it appears only with 3+ words ready. | Keep |
| "Before you read" sheet over the book | Primed last sitting's words, but it covered the book and needed a tap to dismiss. | **Simplified** → a 14-second line under the writing line: *Last time: parsimony · ebullient · lugubrious.* Nothing to dismiss. |
| Pinch the gallery → book's list | Invisible shortcut for people who look for it; costs nothing. | Keep |

### The three rooms (November 2026)

Contents now lists only the three rooms from `VISION.md`: **The Margin** (here), **The Commonplace** (Revisit, dog-ears, words that keep finding you, still settling) and **The Library** (shelves, reading rhythm, the year). Patterns no longer exists as its own page: its word sections moved to the Commonplace, and reading rhythm moved to the Library, because each belongs with the room whose measure it serves. Preferences sits beneath the rooms in small type.

New, each passing the five questions in §6: **kinship** on a word's page (one line, your own words only); **beginning a book** (a title page with an optional *why this book?* that returns on the closing page); **the year** (one page per year, made only from data you already give).

### Contents

| Element | Why | Verdict |
|---|---|---|
| The Gallery, This Book's Words | Both already reachable (Return; tap the title or the folio). Duplicates cost a decision. | **Cut** |
| Index | Autocomplete finds any of your words, and the Library now searches every book. | **Cut** → merged into the Library search |
| The Writing Desk, "in a later edition" | A promise on screen is noise today. | **Cut** (kept in BACKLOG.md) |
| Revisit · The Library · Patterns · Preferences | The four places you can't reach otherwise. | Keep |

### This Book's Words

| Element | Why | Verdict |
|---|---|---|
| Book tabs along the top | Switching books in one tap. | Keep |
| Sittings thread | Reading rhythm for this book ("You picked it up on 9 days over 5 weeks"); quietly rewards *reading*, which is the North Star. Tap a dot to jump. | Keep |
| Ink strip at the top | The words below already show their own ink; this was the same information twice. | **Cut** here (kept on the closing page, where it's a summary) |
| Search, By sitting / A–Z / Dog-eared | Needed once a book has many words; hidden below 9 words. | Keep |
| Compact entries with sentence and underline | Your note, but better: meaning and context beside each word. | Keep |
| I've finished this book · Revisit its words · Copy as a list · Bring in from Notes · Remove | Each is a real need; all are in small text at the foot of the list. | Keep |

### Revisit (the only place effort lives)

| Element | Why | Verdict |
|---|---|---|
| Opt-in only, 4–7 words | Effort only when you choose it; short enough to never replace reading. | Keep |
| What it means → Met elsewhere → The company it keeps → In your own hand | Word knowledge has layers (Nation): meaning, meaning in new contexts, neighbours, production. Difficulty rises only as strength grows (desirable difficulties, Bjork). | Keep |
| Clear / Hazy / Forgot | Honest metacognition; three levels beat two for scheduling without becoming a scale. | Keep |
| Forgotten words return at the end of the round | Immediate re-retrieval after a miss is the fastest fix. | Keep |
| Spacing 1 · 3 · 7 · 16 · 35 days | Spacing effect (Ebbinghaus, Cepeda); the first return is the next day, after sleep. | Keep |
| End list, ink darkening in front of you | The only reward, and it's aesthetic, not numeric. | Keep |

### The Library

| Element | Why | Verdict |
|---|---|---|
| Spines on shelves (cloth colours, thickness = words) | Looking back should feel like looking at a shelf of books you've read. Reinforces the North Star: *books*, not words, are the unit. | Keep |
| Reading now shelf with ribbons | What you're in, at a glance. | Keep |
| Finished shelves by year, bookends | The record of a reading life; the bookend closes each shelf quietly. | Keep |
| Opening line of prose | One sentence of reflection instead of a dashboard. | Keep |
| Search any word, any book | Replaces the Index; appears once you have more than 8 words. | **New** (absorbs Index) |
| Closing page when you finish | A moment of completion at the natural end of a book, then *What are you reading next?*, which points straight back to the North Star. | Keep |

### Patterns

| Section | Why | Verdict |
|---|---|---|
| Words that keep finding you | Words met in several books matter most; authors you read use them. Leads to a focused Revisit. | Keep |
| Dog-eared, with your reasons | Lets you see what you love in words. | Keep |
| Still settling | Words you keep forgetting; a focused Revisit. | Keep |
| How settled they are (ink counts) | The same information as the ink on every word and the Library spines. | **Cut** |
| Words per book | The same as spine thickness in the Library. | **Cut** |
| What kind of words (adjectives %) | Curious, but changes nothing you do. | **Cut** |
| What they're about (themes from definitions) | Results were unreliable; a wrong insight is worse than none. | **Cut** |
| When you meet them (lookups per month) | Measured *looking up*, not reading. Counter to the North Star. | **Replaced** → **Your reading rhythm**: days you read with Margin open, by month. |

### Preferences

| Setting | Why | Verdict |
|---|---|---|
| Remind me of last time's words | The whisper can be switched off. | Keep |
| Keep the screen awake | For a phone lying beside a paper book. | Keep |
| Voice | The device's best voice, or your choice. | Keep |
| Size of type | Accessibility. | Keep |

## 3b. The calm pass (November 2026)

Measured against *unlock → word → meaning → lock*, nine things were fluff and were changed:

| # | What | Why it was fluff | Now |
|---|---|---|---|
| 1 | "Last time: …" line on opening | You open Margin to look something up, not to be reminded | **Cut** |
| 2 | Extras on a word just looked up (sitting date, quotation, kinship, also-in, kindred words) | More reading while you want the book | Shown only when you return to the word in a later sitting |
| 2b | *Correction:* other meanings were hidden along with the extras | The right meaning is the point of a lookup (*phalanx* showed the bones, not the troops) | Other meanings always show as small numbered lines under the main one; one tap makes one the meaning. Only kindred words stay folded |
| 3 | Pencil underline drawing itself | Peripheral motion pulls the eye back to the phone | Drawn instantly |
| 4 | Blur-to-sharp ink-in and rising leaf | Calm beats clever at the moment of lookup | A 0.2 s fade |
| 5 | Ink dot on ❦ when words are due | A badge in disguise | **Cut**; shown in the Library instead |
| 6 | Contents page | A whole page to choose between two places | ❦ opens the Library; Revisit and the Commonplace at its top |
| 7 | "Beginning" page (author, *why this book?*) | Two fields between you and page one | A book is its title; author optional on the same line |
| 8 | Five actions at the foot of a book's list | Choices you rarely need | "I've finished this book" visible; the rest behind *More* |
| 9 | Sample Middlemarch words on first launch | A demo, not an experience | One question: *What are you reading?* |

Also rejected on the same grounds: an always-on "bookmark" screen beside the book, a "closing the book" ritual screen, and a continuously running camera (battery, and technology sitting inside the reading).

## 4. Motion audit

Rule: **no motion delays information, every motion says what just happened, and all of it collapses to a plain fade under Reduce Motion.**

| Motion | Duration | What it says | Verdict |
|---|---|---|---|
| New leaf: headword, pronunciation, meaning ink in (blur → sharp) | 0.55 s; meaning starts at 0.12 s, readable by ~0.4 s | "This was just set for you." | **Simplified**: was ~1.4 s before the meaning was sharp; violated principle 2 |
| Pencil underline draws under your word | 0.9 s, after 0.7 s | "This is where you met it." Arrives after the meaning, so it never competes. | **Simplified** (was 1.1 s after 1.1 s) |
| Leaf arrives (slight rise) | 0.6 s | "New page added." | Keep |
| Neighbouring leaves dim/scale while swiping | 0.6 s | Focus follows your swipe. | Keep |
| Headword ink colour change | 1.2 s | "You know this one better now." Slow on purpose: progress should feel gradual. | Keep |
| Dog-ear fold | 0.5 s | "Marked." | Keep |
| Autocomplete suggestions ink in | 0.35 s | "Here are matches," without jumping. | Keep |
| Pages (Contents, Library…) rise and fade | 0.45–0.55 s | "You've stepped away from the book"; Return reverses it. | Keep |
| Revisit card slides in like a turned page | 0.7 s | "Next card." | Keep |
| Revisit end: words darken in front of you | 2.4 s | The reward. The one long motion, at the one moment there's time for it. | Keep |
| Spines lift on hover | 0.45 s | "You can take this down." | Keep |
| Paper grain | static | Atmosphere at zero cost. | Keep |
| "Before you read" sheet rising over the book | 0.8 s | Covered the book. | **Cut** with the sheet |

## 5. What Margin deliberately doesn't do

- **No streaks, scores, levels or badges.** They make the app the goal.
- **No notifications by default.** At most one optional evening reminder in the native app.
- **No quizzes while reading,** no "guess first", no chapter or page entry.
- **No feed or recommendations.** Your books, your words.
- **No AI in the loop** for the core: the dictionary is free, offline and instant.

## 6. How to judge the next feature

Before adding anything, answer in order:
1. Does it help you read more, or at least never take you away from the book for longer than it must?
2. Does it make a word stick better than the same seconds spent another way?
3. Is it already said somewhere else in the app? (If so, it doesn't get a second place.)
4. Can it be quieter: folded, smaller, later, or only on request?
5. Does its motion say what happened, after the information, in under a second?
