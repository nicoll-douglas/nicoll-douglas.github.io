export default function SidebarSection({ heading, children }) {
  return (
    <div>
      <section className="mb-6 text-sm font-serif">
        <h1 className="uppercase text-red-800 font-semibold text-xs font-sans mb-[2px]">
          {heading}
        </h1>
        {children}
      </section>
    </div>
  );
}
