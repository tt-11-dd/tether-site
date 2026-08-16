import { useLayoutEffect, useRef } from "react";

const ROPE =
  "M17.5 31.9 C17.5 25.35 22.55 20.1 28.8 20.1 C32.25 20.1 34.9 21.7 37.55 24.45 L45.55 32.55 C48.1 35.15 50.7 36.15 53.35 36.15 C59.15 36.15 63.5 31.45 63.5 25.65 C63.5 19.85 58.95 15.1 53.15 15.1 C49.85 15.1 47.05 16.55 44.45 19.2 L36.15 27.65 L28.1 35.85 C25.65 38.35 22.95 39.75 19.65 39.75 C13.85 39.75 9.5 35.1 9.5 29.3 C9.5 23.5 14.05 18.75 19.85 18.75 C22.95 18.75 25.6 20.05 28.15 22.55 L36.55 30.75 L44.65 38.7 C47.25 41.25 50.05 42.6 53.3 42.6 C59.15 42.6 63.5 37.85 63.5 32.05";

export function TetherLogo({
  width = 34,
  height = 20,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  const flow = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const node = flow.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.strokeDasharray = "none";
      return;
    }
    const len = node.getTotalLength();
    if (!len) return;
    const head = len * 0.28;
    node.style.strokeDasharray = `${head} ${len - head}`;
    const anim = node.animate(
      [{ strokeDashoffset: 0 }, { strokeDashoffset: -(len - head) }],
      { duration: 2200, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
    );
    return () => anim.cancel();
  }, []);

  return (
    <svg
      className={`tether-logo ${className}`.trim()}
      width={width}
      height={height}
      viewBox="0.9 10 53.3 30"
      fill="none"
      aria-hidden="true"
    >
      <g transform="translate(-4.5 -0.35) scale(0.88)">
        <path d={ROPE} className="tether-logo-base" />
        <path ref={flow} d={ROPE} className="tether-logo-flow" />
      </g>
    </svg>
  );
}
