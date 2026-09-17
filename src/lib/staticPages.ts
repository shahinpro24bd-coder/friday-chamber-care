const modules = import.meta.glob("../site/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const pages: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, html]) => [
    path.split("/").pop()!.replace(/\.html$/, ""),
    html,
  ]),
);

export function htmlResponse(name: string): Response {
  const html = pages[name] ?? pages["404"] ?? "<h1>Not found</h1>";
  return new Response(html, {
    status: pages[name] ? 200 : 404,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
