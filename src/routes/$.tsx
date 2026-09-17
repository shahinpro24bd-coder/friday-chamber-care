import { createFileRoute } from "@tanstack/react-router";
import { htmlResponse } from "@/lib/staticPages";

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const raw = (params as { _splat?: string })._splat ?? "";
        const name = raw.replace(/\/$/, "").replace(/\.html$/, "") || "index";
        return htmlResponse(name);
      },
    },
  },
});
