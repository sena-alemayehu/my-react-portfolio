import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>(".reveal");

    if (elements.length === 0) return;

    // Show elements that are already visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}