type SectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;