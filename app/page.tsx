import fs from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Home() {
  const markdown = await fs.readFile(
    path.join(process.cwd(), "app", "privacy-policy.md"),
    "utf8",
  );

  return (
    <div className="flex flex-1 justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        <article className="markdown-body text-zinc-800 dark:text-zinc-200">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
