export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-8">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <button className="rounded-lg bg-white px-4 py-2 text-black">
        Profile
      </button>
    </header>
  );
}