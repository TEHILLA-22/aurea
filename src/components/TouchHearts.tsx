"use client";

import { useEffect } from "react";

export default function TouchHearts() {

  useEffect(() => {

    const createHeart = (
      x: number,
      y: number
    ) => {

      const heart =
        document.createElement("div");

      heart.className =
        "touch-heart";

      heart.style.left =
        `${x}px`;

      heart.style.top =
        `${y}px`;

      document.body.appendChild(
        heart
      );

      setTimeout(() => {
        heart.remove();
      }, 2000);
    };

    const handleTouch = (
      event: TouchEvent
    ) => {

      const touch =
        event.touches[0];

      if (!touch) return;

      createHeart(
        touch.clientX,
        touch.clientY
      );
    };

    window.addEventListener(
      "touchstart",
      handleTouch
    );

    return () => {
      window.removeEventListener(
        "touchstart",
        handleTouch
      );
    };

  }, []);

  return null;
}