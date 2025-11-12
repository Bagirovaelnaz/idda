import React, { useEffect, useState } from "react";

const Home = () => {
  const slides = [
    {
      img: "https://api.idda.az/resized/resize3810/center/pages/625/site.png",
      text: "Kibertəhlükəsizlik üzrə mütəxəssis ol!",
    },
    {
      img: "https://api.idda.az/resized/resize3810/center/pages/618/chatgpt-image-oct-24-2025-11-26-04-am.png",
      text: "IDDA Awards ilə innovasiyanın zirvəsinə yüksəl!",
    },
    {
      img: "https://api.idda.az/resized/resize3810/center/pages/81/home-cover-0-4.png",
      text: "Azərbaycanın rəqəmsal gələcəyini qururuq!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img
              src={slide.img}
              alt={`slide-${index}`}
              className="slider-img"
            />
            <div className="slide-text">{slide.text}</div>
          </div>
        ))}
      </section>

      <div className="box">
        <div className="box-text">
          <img
            src="https://api.idda.az/resized/resize0x60/center/pages/122/isolation-mode-0.png"
            alt=""
          />
          <p>
            Biz Azərbaycanın rəqəmsal gələcəyini qururuq. Dörd əsas istiqamət
            üzrə müasir texnologiyalar vasitəsilə cəmiyyətin müvafiq sahələrdə
            inkişafına töhfə verməyi hədəfləyirik.
          </p>
        </div>

        <div className="box-btns">
          <button>İnnovasiya</button>
          <button>Rəqəmsallaşma</button>
          <button>Rəqəmsal səriştələrin inkişafı</button>
          <button>Nüvə tədqiqatları</button>
        </div>
      </div>
      <div className="space">
        <h2>Fəaliyyətimiz</h2>
      </div>
    </main>
  );
};

export default Home;
