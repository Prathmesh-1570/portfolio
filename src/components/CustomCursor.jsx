import { useEffect, useRef, useState } from "react";

// Minimal custom cursor for fine-pointer (desktop) devices.
// Disabled entirely on touch devices via CSS (see index.css @media pointer: coarse)
// and skipped in JS when reduced motion is requested.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsFinePointer(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    let ringX = 0;
    let ringY = 0;
    let targetX = 0;
    let targetY = 0;
    let raf;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setActive(true);
        setLabel(target.getAttribute("data-cursor") || "");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: active ? 64 : 34,
          height: active ? 64 : 34,
          background: active ? "rgba(236,21,82,0.12)" : "transparent",
          borderColor: active ? "var(--color-accent)" : "var(--color-line-strong)",
        }}
        aria-hidden="true"
      >
        {active && label}
      </div>
    </>
  );
}
