export default function Article({ children }) {
  return (
    <article className="max-w-[800px] flex flex-col gap-4">{children}</article>
  );
}
