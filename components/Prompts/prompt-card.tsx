type Props = {
  title: string;
  description: string;
};

export default function PromptCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 text-zinc-400">
        {description}
      </p>
    </div>
  );
}