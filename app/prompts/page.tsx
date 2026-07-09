export default function PromptsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Prompts</h1>
        <p className="mt-2 text-zinc-400">
          Manage all your AI prompts.
        </p>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700">
        + New Prompt
      </button>

      <div className="rounded-xl border border-zinc-800 p-6">
        <p className="text-zinc-400">
          No prompts yet.
        </p>
      </div>
    </div>
  );
}