export default function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-indigo-500">{eyebrow}</p>
        <h2 className="text-[23px] font-semibold tracking-[-0.035em]">{title}</h2>
      </div>
      {action}
    </div>
  );
}