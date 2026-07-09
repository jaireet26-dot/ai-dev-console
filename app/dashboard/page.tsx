import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import StatCard from "@/components/stat-card";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="space-y-8 p-8">
          <div>
            <h1 className="text-4xl font-bold">Welcome back 👋</h1>

            <p className="mt-2 text-zinc-400">
              Here's an overview of your workspace.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StatCard title="Total Prompts" value="0" />
            <StatCard title="Comparisons" value="0" />
            <StatCard title="Saved Versions" value="0" />
          </div>
        </main>
      </div>
    </div>
  );
}