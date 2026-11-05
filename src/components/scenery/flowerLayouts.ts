// Flower layouts for each page. `src` is a file in public/ without the
// .webp extension; `className` positions, sizes and rotates the flower.
export type Flower = { src: string; className: string };

export const heroFlowers: Flower[] = [
  // top left
  { src: "flower-blossom-cream", className: "-top-2 left-3 w-7" },
  { src: "flower-blossom-cream", className: "-top-3 left-8 w-16" },
  {
    src: "flower-blossom-pink-lg",
    className: "-top-1 left-30 w-16 hidden md:block",
  },
  {
    src: "flower-blossom-pink-md",
    className: "top-17 left-36 w-14 hidden md:block",
  },
  // top right
  { src: "flower-blossom-cream", className: "-top-3 right-6 w-14" },
  { src: "flower-blossom-pink-md", className: "-top-3 right-20 w-12" },
  { src: "flower-blossom-cream", className: "top-9 right-6 w-13" },
  {
    src: "flower-blossom-pink-lg",
    className: "top-3 right-34 w-14 hidden md:block",
  },
  {
    src: "flower-blossom-cream",
    className: "top-21 right-24 w-7 hidden md:block",
  },
  {
    src: "flower-blossom-cream",
    className: "top-21 right-36 w-7 hidden md:block",
  },
];

export const sponsorsFlowers: Flower[] = [
  // top left
  { src: "flower-blossom-pink-md", className: "top-6 left-2 w-12" },
  { src: "flower-blossom-pink-sm", className: "top-14 left-14 w-9" },
  { src: "flower-blossom-cream", className: "top-24 -left-3 w-14" },
  {
    src: "flower-blossom-pink-md",
    className: "top-28 left-36 w-12 hidden md:block",
  },
  // top right
  {
    src: "flower-blossom-cream",
    className: "top-2 right-28 w-11 hidden md:block",
  },
  {
    src: "flower-blossom-pink-sm",
    className: "top-28 right-36 w-8 hidden md:block",
  },
  { src: "flower-blossom-pink-md", className: "top-24 right-10 w-12" },
  { src: "flower-blossom-pink-lg", className: "top-24 -right-2 w-14" },
];

// Shared by the judges and speakers pages.
export const cardPageFlowers: Flower[] = [
  // top
  { src: "flower-leaf", className: "top-1 left-[1%] w-12 rotate-12" },
  { src: "flower-blossom-cream", className: "top-10 left-[4%] w-9" },
  { src: "flower-leaf-pair", className: "-top-2 left-[10%] w-14 -rotate-12" },
  { src: "flower-blossom-pink-lg", className: "-top-3 left-[13%] w-20" },
  { src: "flower-blossom-cream", className: "-top-1 left-[21%] w-12" },
  { src: "flower-leaf", className: "top-16 left-[26%] w-9 -rotate-45" },
  {
    src: "flower-blossom-6petal",
    className: "top-4 left-[30%] w-16 hidden md:block",
  },
  {
    src: "flower-blossom-pink-sm",
    className: "top-6 left-[39%] w-8 hidden md:block",
  },
  {
    src: "flower-leaf-pair",
    className: "-top-1 left-[46%] w-12 rotate-6 hidden md:block",
  },
  {
    src: "flower-blossom-pink-lg",
    className: "-top-3 left-[50%] w-16 hidden md:block",
  },
  {
    src: "flower-blossom-cream",
    className: "top-2 right-[34%] w-10 hidden md:block",
  },
  {
    src: "flower-blossom-pink-sm",
    className: "top-12 right-[28%] w-10 hidden md:block",
  },
  {
    src: "flower-leaf",
    className: "top-3 right-[20%] w-11 rotate-[-30deg] hidden md:block",
  },
  { src: "flower-blossom-6petal", className: "top-14 right-[15%] w-10" },
  { src: "flower-blossom-cream", className: "-top-2 right-[9%] w-11" },
  { src: "flower-leaf-pair", className: "top-12 right-[5%] w-12 rotate-45" },
  { src: "flower-blossom-pink-md", className: "top-2 right-[1%] w-14" },
  // bottom
  { src: "flower-blossom-pink-lg", className: "bottom-14 left-[2%] w-20" },
  {
    src: "flower-blossom-cream",
    className: "bottom-4 left-[14%] w-10 hidden md:block",
  },
  { src: "flower-blossom-pink-md", className: "bottom-6 left-[27%] w-12" },
  {
    src: "flower-blossom-pink-sm",
    className: "bottom-12 right-[28%] w-10 hidden md:block",
  },
  { src: "flower-blossom-pink-md", className: "bottom-4 right-[20%] w-14" },
  { src: "flower-blossom-cream", className: "bottom-2 right-[6%] w-10" },
];

export const notFoundFlowers: Flower[] = [
  // top
  { src: "flower-blossom-cream", className: "top-0 left-[6%] w-12" },
  { src: "flower-leaf", className: "top-6 left-[10%] w-12 rotate-45" },
  { src: "flower-blossom-pink-lg", className: "-top-4 left-[13%] w-16" },
  { src: "flower-leaf", className: "top-12 left-[1%] w-8 rotate-90" },
  {
    src: "flower-blossom-cream",
    className: "top-6 left-[34%] w-12 hidden md:block",
  },
  {
    src: "flower-blossom-pink-md",
    className: "top-14 left-[39%] w-12 hidden md:block",
  },
  {
    src: "flower-blossom-pink-lg",
    className: "-top-2 left-[46%] w-16 hidden md:block",
  },
  {
    src: "flower-leaf",
    className: "top-16 left-[52%] w-10 -rotate-12 hidden md:block",
  },
  {
    src: "flower-leaf",
    className: "top-8 right-[38%] w-8 rotate-[70deg] hidden md:block",
  },
  {
    src: "flower-blossom-pink-sm",
    className: "-top-3 right-[37%] w-10 hidden md:block",
  },
  { src: "flower-blossom-pink-lg", className: "top-12 right-[32%] w-16" },
  { src: "flower-blossom-pink-md", className: "-top-2 right-[25%] w-16" },
  { src: "flower-blossom-6petal", className: "top-6 right-[24%] w-16" },
  { src: "flower-leaf", className: "top-0 right-[10%] w-8 rotate-45" },
  { src: "flower-blossom-pink-sm", className: "top-0 right-[6%] w-10" },
  { src: "flower-blossom-pink-md", className: "-top-1 right-[1%] w-16" },
  {
    src: "flower-leaf",
    className: "top-12 right-[6%] w-10 hidden md:block",
  },
  // bottom
  { src: "flower-blossom-cream", className: "-bottom-4 left-[3%] w-12" },
  { src: "flower-blossom-pink-md", className: "-bottom-5 left-[19%] w-14" },
  { src: "flower-blossom-pink-md", className: "-bottom-5 left-[27%] w-14" },
  {
    src: "flower-blossom-cream",
    className: "-bottom-4 left-[33%] w-12 hidden md:block",
  },
  {
    src: "flower-leaf",
    className: "bottom-6 left-[38%] w-8 rotate-90 hidden md:block",
  },
  { src: "flower-blossom-pink-sm", className: "-bottom-2 left-[44%] w-10" },
  {
    src: "flower-blossom-cream",
    className: "bottom-2 left-[45%] w-12 hidden md:block",
  },
  { src: "flower-blossom-pink-md", className: "-bottom-5 right-[44%] w-14" },
  {
    src: "flower-leaf",
    className: "bottom-8 right-[36%] w-10 rotate-12 hidden md:block",
  },
  {
    src: "flower-blossom-cream",
    className: "bottom-2 right-[15%] w-14 hidden md:block",
  },
  { src: "flower-blossom-pink-sm", className: "bottom-2 right-[7%] w-10" },
  { src: "flower-leaf", className: "bottom-4 right-[0%] w-10 -rotate-45" },
];
