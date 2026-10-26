import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Trip Planner · Autonomous Travel Agent" },
      { name: "description", content: "Plan trips with an autonomous AI agent that monitors weather, flights and prices and re-plans for you." },
      { property: "og:title", content: "AI Trip Planner" },
      { property: "og:description", content: "An autonomous travel agent that plans, monitors and re-plans your trips." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/planner.html"
      title="AI Trip Planner"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
