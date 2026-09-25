export default function manifest() {
  return {
    name: "Seif Aldin | Full-Stack Software Developer",
    short_name: "Seif Aldin",
    description:
      "Full-Stack Software Developer building scalable web and mobile applications, REST APIs, e-commerce platforms, ERP systems, and AI-integrated applications with Laravel, React, and Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
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
