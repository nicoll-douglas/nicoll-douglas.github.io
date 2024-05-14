export default function SidebarSection({ heading, children }) {
  return (
    <div>
      <section className="mb-6 text-sm">
        <h1 className="uppercase text-red-800 font-bold text-xs font-sans mb-[2px]">
          {heading}
        </h1>
        {children}
      </section>
    </div>
  );
}
