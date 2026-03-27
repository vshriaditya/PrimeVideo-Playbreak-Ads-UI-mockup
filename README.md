# Prime Video Playbreak Viewer Demo

An early product prototype for an interactive Prime Video ad experience that lets viewers answer a branded trivia prompt during a pause moment and unlock a reward.

The focus of this project is the interaction itself: whether a sponsored placement inside Prime Video can become a lightweight, high-attention experience that feels natural for viewers and valuable for advertisers.

![Prime Video Playbreak experience flow](./docs/readme/experience-flow.svg)

## What This Project Is

`prime-video-playbreak-viewer-demo` is an early exploration of the **consumer-side Playbreak experience**.

Where the companion console-style prototype focuses on how advertisers would configure and measure campaigns, this repo focuses on the viewer journey itself:

- a viewer pauses Prime Video content
- a sponsored Playbreak unit appears in the pause moment
- the viewer opens a short branded trivia experience
- a correct answer unlocks a reward
- the experience returns the user to playback

This makes the repo useful as a first-principles product artifact because it shows the actual interaction pattern before building the full operational system around it.

## The Problem It Is Solving

Most streaming ads are passive by design.

That creates a few product challenges:

- viewers have limited reason to actively engage
- advertisers struggle to create memorable value exchange inside streaming sessions without disrupting viewing
- interactive ad concepts can sound exciting in strategy discussions but remain abstract without a believable viewing experience
- product teams need a fast way to test whether the interaction feels intuitive before investing in a broader platform

This prototype addresses that by turning the idea into something concrete and testable.

Instead of asking, "What if streaming ads were interactive?", it answers:

**"What would a simple, branded, reward-driven interaction actually feel like inside Prime Video?"**

## The Product Idea

The core concept is straightforward:

**Use a short trivia mechanic to convert a pause ad into an interactive reward moment.**

In this prototype:

- Toyota is the example advertiser
- the viewer is presented with a single timed question
- the interaction is optimized for remote input
- success leads to a Prime Video credit and redemption messaging

That simple structure is important because it lowers cognitive load for viewers while still giving advertisers a clearer engagement signal than a standard impression.

## Product Thinking Behind The Experience

The experience is built around a few core ideas:

- **Clear hypothesis:** interactive streaming engagement should feel lightweight, not complicated
- **User-centered scope:** the experience is short, legible, and designed for lean-back behavior
- **Behavioral realism:** it assumes a viewer pauses playback, notices a voluntary unit, and only gives a few seconds of attention
- **Commercial framing:** the reward is part of the product, not a decorative add-on
- **Prototype sequencing:** it explores the consumer interaction first, before expanding into advertiser tooling and reporting layers

![Playbreak value map](./docs/readme/value-map.svg)

## User Flow

### 1. Prime Video pause moment

The prototype starts from a Prime Video playback pause moment with a sponsored Playbreak placement embedded below the hero area.

### 2. Sponsored interactive unit

The sponsored module is framed as a branded Toyota placement with a clear call to play and a visible Prime Video credit incentive.

### 3. Timed trivia interaction

Once opened, the viewer gets:

- one branded trivia question
- four answer options
- a 10-second countdown
- support for remote-style selection

### 4. Outcome state

If the viewer answers correctly, the flow transitions into a reward state with celebratory feedback and redemption messaging.

If the answer is incorrect or time expires, the prototype drops the viewer back into content playback.

### 5. Return to content

The experience is intentionally lightweight and self-contained so it feels like a moment inside playback, not a separate app experience.

## What This Prototype Demonstrates

This repo helps illustrate several product questions:

- Can interactive ads feel native to a streaming playback environment?
- Does a reward-based mechanic create enough motivation to engage?
- Is trivia a good first interaction pattern for a Prime Video pause ad?
- How should the ad experience transition between discovery, participation, reward, and playback?
- What parts of the consumer journey need to feel polished before building tooling for advertisers?

## How This Connects To The Bigger Product Story

This prototype can be read as the front-end consumer counterpart to a broader Playbreak system.

If the bigger product vision is:

- advertisers configure interactive campaigns
- campaigns run inside Prime Video ad placements
- user engagement and rewards are measured end to end

Then this repo is the earliest proof point in that chain:

**the interaction itself.**

It shows the moment the entire product depends on being believable.

## Who This Repo Is For

This project is especially useful for:

- designers prototyping streaming-native interaction patterns
- engineers evaluating feasibility of lean-back interactive flows
- ads and monetization teams thinking about viewer engagement mechanics
- teams exploring interactive ad concepts for Prime Video

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Running Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Notes

- This is a prototype, not a production-ready ad product.
- The brand, reward, and content examples are illustrative and used to tell the product story.
- The main purpose of the repo is to communicate a Prime Video interaction concept and product hypothesis clearly.
