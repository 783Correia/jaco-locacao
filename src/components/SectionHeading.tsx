export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  light = false,
  as: Heading = "h2",
}: {
  tag?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      {tag && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 ${light
              ? "text-lime bg-lime/10"
              : "text-primary bg-primary/10"
            }`}
        >
          {tag}
        </span>
      )}
      <Heading
        className={`text-heading text-balance ${light ? "text-white" : "text-gray-900"
          }`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""
            } ${light ? "text-white/60" : "text-gray-500"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
