import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Illari Health",
    short_name: "Illari Health",
    description: "Concierge Medicine & Direct Primary Care in Wicker Park, Chicago",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#161616",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
