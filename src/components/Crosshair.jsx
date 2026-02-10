import { useEffect } from "react";
import "./Crosshair.css";

const Crosshair = () => {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor-line cursor-line--vertical" />
      <div className="cursor-line cursor-line--horizontal" />
    </>
  );
};

export default Crosshair;