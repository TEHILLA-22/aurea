"use client";

import { useState } from "react";

export default function SecretTapHandler() {

  const [count, setCount] = useState(0);

  const [show, setShow] =
    useState(false);

  const handleTap = () => {

    const next = count + 1;

    setCount(next);

    if (next === 5) {

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);

      setCount(0);
    }
  };

  return (
    <>
      <button
        onClick={handleTap}
        className="secret-trigger"
      >
        ✦
      </button>

      {show && (
        <div className="secret-modal">
          You look beautiful today ❤️
        </div>
      )}
    </>
  );
}