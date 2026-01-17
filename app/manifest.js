export default function manifest() {
  return {
    name: "Seif Eldin | Full-Stack Developer",
    short_name: "Seif Eldin",
    description:
      "Full-stack web developer crafting performant Next.js frontends and scalable Laravel/REST backends.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/profile-img.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
