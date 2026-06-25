"use client";

import { useEffect } from "react";

export default function CursorHearts() {

  useEffect(() => {

    const move = (e: MouseEvent) => {

      const heart =
        document.createElement("div");

      heart.className = "heart";

      heart.style.left =
        `${e.clientX}px`;

      heart.style.top =
        `${e.clientY}px`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 2000);
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  }, []);

  return null;
}