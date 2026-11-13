export type Speaker = {
  name: string;
  role: string;
  photo: string;
};

// Add confirmed speakers here when the lineup is announced.
export const speakers: Speaker[] = [
  {
    name: "Anuja Dawane",
    role: "Senior Machine Learning Engineer @ Uber AV Labs",
    photo: "/speakers/AnujaDawane.jpeg",
  },
  {
    name: "Purna Mallepaddi",
    role: "Machine Learning Engineer @ TikTok",
    photo: "/speakers/PurnaMallepaddi.jpeg",
  },
];
