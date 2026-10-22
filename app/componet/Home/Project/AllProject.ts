export type ProjectType = {
  url: string;
  title: string;
  build: string;
  description: string;
};

const projects: ProjectType[] = [
  {
    url: "/home-hero.png",
    title: "GAMERGEAR",
    build: "Next.js / Tailwind",
    description:
      "A modern gaming gear storefront with product browsing and shopping cart functionality",
  },
];

export default projects;