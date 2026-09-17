import { createFileRoute } from "@tanstack/react-router";
import { htmlResponse } from "@/lib/staticPages";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () => htmlResponse("index"),
    },
  },
});
