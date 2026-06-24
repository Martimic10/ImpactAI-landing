/**
 * iPhone 16 device-frame mockups (1274×2690).
 * Full renders with bezel — no multiply blend on the light page background.
 */
export const DEVICE_MOCKUP_ASPECT = 1274 / 2690;

export const deviceMockups = {
  home: "/IMG_6099_iphone16.png",
  newRound: "/IMG_6097_iphone16.png",
  liveScorecard: "/IMG_6098_iphone16.png",
  liveLeaderboard: "/IMG_6105_iphone16.png",
  rounds: "/IMG_6100_iphone16.png",
  roundResults: "/IMG_6101_iphone16.png",
  newCrew: "/IMG_6104_iphone16.png",
  crewLeaderboard: "/IMG_6106_iphone16.png",
  profile: "/IMG_6107_iphone16.png",
} as const;

export type DeviceMockupKey = keyof typeof deviceMockups;

export const screenshotRail = [
  { key: "home", label: "Home", src: deviceMockups.home, alt: "Home dashboard with live rounds and stats" },
  { key: "new-round", label: "New Round", src: deviceMockups.newRound, alt: "Set up a new round at your course" },
  { key: "scorecard", label: "Scorecard", src: deviceMockups.liveScorecard, alt: "Live scorecard during a round" },
  { key: "leaderboard", label: "Leaderboard", src: deviceMockups.liveLeaderboard, alt: "Live leaderboard and hole-by-hole scores" },
  { key: "rounds", label: "Rounds", src: deviceMockups.rounds, alt: "Active and past rounds" },
  { key: "results", label: "Results", src: deviceMockups.roundResults, alt: "Round results and final standings" },
  { key: "crew", label: "Create Crew", src: deviceMockups.newCrew, alt: "Create a golf crew" },
  { key: "group", label: "Group Board", src: deviceMockups.crewLeaderboard, alt: "Weekly and season crew leaderboard" },
  { key: "profile", label: "Profile", src: deviceMockups.profile, alt: "Achievements and group seasons" },
] as const;

export const howItWorksTabs = [
  {
    id: "crew",
    label: "Create Crew",
    description: "Invite your regular foursome and set up your golf group in minutes.",
    src: deviceMockups.newCrew,
    alt: "Create your golf crew",
  },
  {
    id: "round",
    label: "Live Round",
    description: "Track scores live during the round — every hole updates in real time.",
    src: deviceMockups.liveLeaderboard,
    alt: "Live scoring and leaderboard during a round",
  },
  {
    id: "compete",
    label: "Compete",
    description: "See weekly standings, season leaderboards, and challenge winners.",
    src: deviceMockups.crewLeaderboard,
    alt: "Crew leaderboard and season standings",
  },
] as const;
