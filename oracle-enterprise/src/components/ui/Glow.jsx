export default function Glow({
  className = "",
}) {
  return (
    <div
      className={`absolute rounded-full blur-[130px] opacity-40 ${className}`}
    />
  );
}