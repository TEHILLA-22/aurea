"use client";

export default function ConfettiExplosion() {
  return (
    <div className="confetti-wrapper">

      {Array.from({
        length: 60,
      }).map((_, index) => (
        <span
          key={index}
          className="confetti"
          style={{
            left:
              `${Math.random() * 100}%`,
            animationDelay:
              `${Math.random() * .8}s`,
          }}
        />
      ))}

    </div>
  );
}