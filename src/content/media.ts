/**
 * Local photography in /public.
 * Prefer these over stock Unsplash URLs wherever a matching scene exists.
 */

export const media = {
  housekeepingKitchen: {
    src: "/housekeeping-kitchen.png",
    alt: "Caregiver smiling while cleaning a bright home kitchen",
  },
  mobilitySupport: {
    src: "/mobility-support.png",
    alt: "Caregiver supporting an older adult walking with a cane at home",
  },
  transportationAssist: {
    src: "/transportation-assist.png",
    alt: "Caregiver helping an older adult step from a car with a walker",
  },
  careTeam: {
    src: "/care-team.png",
    alt: "Professional caregiver smiling with a care team in the background",
  },
  companionshipAlbum: {
    src: "/companionship-album.png",
    alt: "Caregiver and older adult sharing a photo album and laughing together at home",
  },
  mealSupport: {
    src: "/meal-support.png",
    alt: "Caregiver serving a meal to an older adult at the dining table",
  },
  homeArrival: {
    src: "/home-arrival.png",
    alt: "Caregiver assisting an older adult with a walker arriving safely at home",
  },
  companionshipPuzzle: {
    src: "/companionship-puzzle.png",
    alt: "Caregiver and older adult enjoying a jigsaw puzzle together at home",
  },
} as const;
