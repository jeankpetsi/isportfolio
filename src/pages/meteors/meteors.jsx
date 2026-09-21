export const Meteors = ({ number = 20 }) => {
  const meteors = Array.from({ length: number }, (_, i) => i);
  const SPEED = 8; // durée fixe = vitesse constante pour toutes les comètes

  return (
    <>
      {meteors.map((el) => {
        // Départ réparti le long du bord haut ET du bord gauche
        // pour que les comètes n'apparaissent pas toutes au même endroit
        const startFromTop = Math.random() > 0.5;
        const offset = Math.floor(Math.random() * 100) + "%";
        const delay = Math.random() * 8;

        const positionStyle = startFromTop
          ? { top: "-10%", left: offset }
          : { top: offset, left: "-10%" };

        return (
          <span
            key={"meteor" + el}
            className="animate-meteor absolute"
            style={{
              ...positionStyle,
              animationDelay: `${delay}s`,
              animationDuration: `${SPEED}s`,
              animationTimingFunction: "linear",
            }}
          >
            {/* Traînée : s'estompe vers l'arrière (coin sup. gauche) */}
            <span
              className="block rounded-full bg-gradient-to-b from-transparent via-cyan-300/60 to-white"
              style={{
                width: "2px",
                height: "90px",
                boxShadow: "0 0 6px 1px rgba(34,211,238,0.5)",
              }}
            />

            {/* Tête de la comète (pointe vers le coin inf. droit) */}
            <span
              className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full bg-white"
              style={{
                width: "3px",
                height: "3px",
                boxShadow:
                  "0 0 8px 2px rgba(255,255,255,0.9), 0 0 16px 4px rgba(34,211,238,0.5)",
              }}
            />
          </span>
        );
      })}
    </>
  );
};

export default Meteors;
