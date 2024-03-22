import brackets from "../assets/svg/Brackets";

export function Tagline({ className, children }) {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-4">{children}</div>
      {brackets("right")}
    </div>
  );
}
