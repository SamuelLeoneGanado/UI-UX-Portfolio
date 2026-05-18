import { useEffect, useRef } from "react";

export default function BackgroundParallax() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${-y * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div ref={bgRef} className="bg" />;
}
