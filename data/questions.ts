import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "According to Chapter 1, what is the key distinction between an 'Ad Slot' and an 'Ad Space'?",
    options: [
      { id: 'a', text: "Ad Slot is for video, Ad Space is for display ads." },
      { id: 'b', text: "They are exactly the same thing." },
      { id: 'c', text: "Ad Slot is the container, whereas Ad Space is the area inside it that displays the ad." },
      { id: 'd', text: "Ad Space is the code snippet, Ad Slot is the visual area." }
    ],
    correctOptionId: 'c',
    explanation: "While often used interchangeably, the book clarifies that the Ad Slot is the specific container on a website, while the Ad Space is the actual impression area available inside it.",
    chapterSource: "Chapter 1: Basics"
  },
  {
    id: 2,
    question: "What is the primary function of a Demand-Side Platform (DSP)?",
    options: [
      { id: 'a', text: "To help publishers sell remnant inventory." },
      { id: 'b', text: "To allow media buyers to run campaigns and buy inventory from multiple sources via a single interface." },
      { id: 'c', text: "To verify ad fraud and viewability metrics." },
      { id: 'd', text: "To serve as a direct communication channel between users and brands." }
    ],
    correctOptionId: 'b',
    explanation: "A DSP enables advertisers and agencies to manage campaigns and purchase inventory from various ad exchanges and SSPs centrally.",
    chapterSource: "Chapter 2: Technology"
  },
  {
    id: 3,
    question: "In the context of media buying, what does 'Waterfalling' refer to?",
    options: [
      { id: 'a', text: "A method where all demand sources bid simultaneously." },
      { id: 'b', text: "A sequential process where demand sources are called one by one based on historical yield." },
      { id: 'c', text: "A type of rich media ad unit that flows down the page." },
      { id: 'd', text: "The process of cleaning data in a DMP." }
    ],
    correctOptionId: 'b',
    explanation: "Waterfalling (or daisy chaining) calls demand sources in a sequence. If the first buyer declines, the next in line gets the opportunity.",
    chapterSource: "Chapter 7: Media-Buying"
  },
  {
    id: 4,
    question: "What major inefficiency did Header Bidding emerge to solve?",
    options: [
      { id: 'a', text: "The lack of video ad support in browsers." },
      { id: 'b', text: "The high cost of creative production." },
      { id: 'c', text: "The inefficiency of waterfalling and the preferential treatment of Google's ad exchange." },
      { id: 'd', text: "The complexity of attribution models." }
    ],
    correctOptionId: 'c',
    explanation: "Header bidding allows all demand partners to compete simultaneously for an impression, leveling the playing field compared to the sequential waterfall method.",
    chapterSource: "Chapter 7: Media-Buying"
  },
  {
    id: 5,
    question: "Which attribution model assigns 100% of the conversion credit to the final known referral before conversion?",
    options: [
      { id: 'a', text: "Linear Attribution Model" },
      { id: 'b', text: "Time Decay Attribution Model" },
      { id: 'c', text: "First Click Attribution Model" },
      { id: 'd', text: "Last Click Attribution Model" }
    ],
    correctOptionId: 'd',
    explanation: "The Last Click Attribution Model attributes the entire value of a conversion to the last interaction the user had before converting.",
    chapterSource: "Chapter 10: Attribution"
  },
  {
    id: 6,
    question: "What is a 'Data Clean Room'?",
    options: [
      { id: 'a', text: "A server room with advanced cooling systems." },
      { id: 'b', text: "Software allowing companies to match first-party data against aggregated datasets in a privacy-friendly way." },
      { id: 'c', text: "A process to delete old cookies from a browser." },
      { id: 'd', text: "An agency team dedicated to GDPR compliance." }
    ],
    correctOptionId: 'b',
    explanation: "Data clean rooms match first-party data from different sources (e.g., brand and publisher) without allowing either party to access the other's user-level data directly.",
    chapterSource: "Chapter 8: User Identification"
  },
  {
    id: 7,
    question: "According to the book, what is the 'Publisher’s Dilemma'?",
    options: [
      { id: 'a', text: "Choosing between high CPM with risk of unfilled slots vs. high fill rate at lower CPMs." },
      { id: 'b', text: "Deciding whether to use a paywall or ads." },
      { id: 'c', text: "Choosing between Google Ad Manager and Prebid.js." },
      { id: 'd', text: "Balancing mobile vs. desktop traffic." }
    ],
    correctOptionId: 'a',
    explanation: "The dilemma is whether to sell inventory at a high price (risking no sale) or ensuring a sale at a lower price (sacrificing potential revenue).",
    chapterSource: "Chapter 7: Media-Buying"
  },
  {
    id: 8,
    question: "What is the difference between Deterministic and Probabilistic matching?",
    options: [
      { id: 'a', text: "Probabilistic is more accurate; Deterministic has more scale." },
      { id: 'b', text: "Deterministic uses login data/emails; Probabilistic uses statistical modeling of signals." },
      { id: 'c', text: "Deterministic is for mobile; Probabilistic is for desktop." },
      { id: 'd', text: "There is no difference." }
    ],
    correctOptionId: 'b',
    explanation: "Deterministic matching relies on unique identifiers like emails (high accuracy), while Probabilistic uses signals like IP and device type to estimate identity (high scale).",
    chapterSource: "Chapter 8: User Identification"
  },
  {
    id: 9,
    question: "How does Contextual Targeting work?",
    options: [
      { id: 'a', text: "It uses third-party cookies to track user history." },
      { id: 'b', text: "It targets users based on their GPS location." },
      { id: 'c', text: "It displays ads relevant to the website's content rather than relying on visitor data." },
      { id: 'd', text: "It uses device fingerprinting." }
    ],
    correctOptionId: 'c',
    explanation: "Contextual targeting matches ads to the content being consumed (e.g., showing shoe ads on a sports blog) without needing user tracking data.",
    chapterSource: "Chapter 5: Ad Targeting"
  },
  {
    id: 10,
    question: "What is a 'Vanity URL' primarily used for?",
    options: [
      { id: 'a', text: "To improve SEO rankings." },
      { id: 'b', text: "To measure offline ad exposure (OOH, TV) by linking to online visits." },
      { id: 'c', text: "To shorten links for social media." },
      { id: 'd', text: "To hide affiliate tracking codes." }
    ],
    correctOptionId: 'b',
    explanation: "Vanity URLs (e.g., newproduct.com) are used in offline campaigns to help users remember the link and to attribute offline views to online traffic.",
    chapterSource: "Chapter 10: Attribution"
  }
];