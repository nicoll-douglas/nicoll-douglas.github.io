export default function ArticleBody({ children }) {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      {children}
    </div>
  );
}
