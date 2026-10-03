"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // Disable automatic browser scroll restoration on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    };

    // Scroll to top when page reloads / unloads
    window.addEventListener("beforeunload", resetScroll);

    // If there is an anchor hash on refresh, clean it and jump to top
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      requestAnimationFrame(resetScroll);
    } else if (window.scrollY > 0) {
      requestAnimationFrame(resetScroll);
    }

    return () => {
      window.removeEventListener("beforeunload", resetScroll);
    };
  }, []);

  return null;
}
