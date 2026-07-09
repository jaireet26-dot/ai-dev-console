import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  GitCompare,
  History,
  Settings,
} from "lucide-react";

const items = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Prompts", href: "/prompts", icon: FileText },
  { name: "Compare", href: "/compare", icon: GitCompare },
  { name: "History", href: "/history", icon: History },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950">
      <div className="border-b border-zinc-800 p-6">
        <h1 className="text-2xl font-bold">AI Dev Console</h1>
      </div>

      <nav className="flex-1 p-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="mb-2 flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-zinc-900"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}