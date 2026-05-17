import React from "react";

export default function Blob({
  from = "rgba(20,202,238,0.5)",
  fromStop = "0%",
  via = "rgba(41,116,221,0.8)",
  viaStop = "40%",
  to = "rgba(126,26,247,0.8)",
  toStop = "100%",
  duration = "15s",
  delay = "0s",
  direction = "normal",
  timing = "ease-in-out",
}) {
  return (
    <div
      className="absolute blob animate-blob"
      style={{
        background: `linear-gradient(
          ${from} ${fromStop},
          ${via} ${viaStop},
          ${to} ${toStop}
        )`,
        animation: `
          moveRotateShape ${duration} ${timing} ${delay} infinite ${direction},
          morphShape ${duration} ${timing} ${delay} infinite ${direction}
        `,
      }}
    />
  );
}