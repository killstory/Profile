export function GridPattern() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 grid-pattern" />
    </div>
  );
}
