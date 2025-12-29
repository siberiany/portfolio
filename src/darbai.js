import { useEffect, useRef, useState } from "react";
import darbas1 from "./images/darbas1.png";
import darbas2 from "./images/darbas2.jpg";
import darbas3 from "./images/darbas3.png";

const darbai = [
  { src: darbas1, description: "Brandingo dizainas | Pakelio dizainas | Fizinis produktas" },
  { src: darbas2, description: "Vizualinis dizainas | Skaitmeninė iliustracija" },
  { src: darbas3, description: "Vizualinis dizainas | Skaitmeninė tapyba | Veikėjo dizainas" },
];

export default function Darbai() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* center active item */
  const scrollToIndex = (index) => {
    const track = trackRef.current;
    const item = track.children[index];

    track.scrollTo({
      left:
        item.offsetLeft -
        track.clientWidth / 2 +
        item.clientWidth / 2,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  /* keyboard support */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight" && activeIndex < darbai.length - 1) {
        scrollToIndex(activeIndex + 1);
      }
      if (e.key === "ArrowLeft" && activeIndex > 0) {
        scrollToIndex(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {darbai.map((item, i) => (
          <div
            key={i}
            className={`carousel-item ${i === activeIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(i)}
          >
            <img src={item.src} alt="" />
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}>
          ←
        </button>
        <button onClick={() => scrollToIndex(Math.min(darbai.length - 1, activeIndex + 1))}>
          →
        </button>
      </div>

      <p className="description">{darbai[activeIndex].description}</p>
    </div>
  );
}

export default Darbai;

