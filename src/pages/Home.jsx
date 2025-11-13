import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
          <button
            style={{
              background:
                "linear-gradient(65deg, #171840 15%, #bb48ff 50%, #0059ff)",
            }}
          >
            Innovasiya
          </button>
          <button
            style={{
              background: "linear-gradient(65deg,#0059ff,#6a9eff 50%,#002160)",
            }}
          >
            Rəqəmsallaşma
          </button>
          <button
            style={{
              background:
                "linear-gradient(65deg, #c79b6e, #e2b88d 50%, #614c36)",
            }}
          >
            Rəqəmsal səriştələrin inkişafı
          </button>
          <button
            style={{
              background:
                "linear-gradient(65deg, #0059ff, #6a9eff 50%, #002160)",
            }}
          >
            Nüvə tədqiqatları
          </button>
        </div>
      </div>
      <div className="activity-section">
        <div className="activity-header">
          <h2>Fəaliyyətimiz</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <button>
              <FaArrowLeft />
            </button>
            <button>
              <FaArrowRight />
            </button>
          </div>
          <div className="boxes"></div>
        </div>
        <div className="circle-section">
          <h3>Rəqəmsal hökumət layihələrinin inkişafına dair göstəricilər</h3>
          <div className="circles">
            <div className="circle-item">
              <div className="blue-circle">
                <p>1.9</p>
                <span>milyon</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/alt-sisteme-inteqrasiya-olunan-qurum-sayi-1.png"
                alt=""
              />
            </div>
            <div className="circle-item">
              <div className="blue-circle">
                <p>2</p>
                <span>milyon sənəd</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/stats-002.jpg"
                alt=""
              />
            </div>{" "}
            <div className="circle-item">
              <div className="blue-circle">
                <p>4</p>
                <span>milyon+</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/140-giris-digital-login.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="circle-section">
          <h3>İKT kadr bazasını inkişaf etdirmək üçün uğurlu layihələr</h3>
          <div className="circles-brown">
            <div className="circle-item">
              <div className="brown-circle">
                <p>100+</p>
                <span>layihə</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/stats-004.jpg"
                alt=""
              />
            </div>
            <div className="circle-item">
              <div className="brown-circle">
                <p>380</p>
                <span>məzun</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/stats-005.jpg"
                alt=""
              />
            </div>{" "}
            <div className="circle-item">
              <div className="brown-circle">
                <p>10.000</p>
                <span>nəfər</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/stats-006.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="circle-section">
          <h3>Startap ekosisteminin inkişaf etdirilməsi</h3>
          <div className="circles-purple">
            <div className="circle-item">
              <div className="purple-circle">
                <p>140+</p>
                <span>şirkət</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/stats-007.jpg"
                alt=""
              />
            </div>
            <div className="circle-item">
              <div className="purple-circle">
                <p>750+</p>
                <span>startap</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/stats-007.jpg"
                alt=""
              />
            </div>{" "}
            <div className="circle-item">
              <div className="purple-circle">
                <p>15.6</p>
                <span>milyon dollar</span>
              </div>

              <img
                src="https://api.idda.az/resized/resize400/center/pages/1/stats-007.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="project-section">
          <h2>Rəqəmsal hökumət layihələri</h2>
          <div className="img-container">
            <div className="left-side">
              <Link to="http://my.gov.az/">
                <img
                  src="https://api.idda.az/resized/resize1042/center/pages/1/mygov-main-poster-az.png"
                  alt=""
                />
              </Link>
              <Link to="https://idda.az/az/reqemsallasma/reqemsal-sened-dovriyyesi">
                <img
                  src="https://api.idda.az/resized/resize1042/center/pages/1/digital-bridge-poster-az.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="right-side">
              <Link to="https://idda.az/az/reqemsallasma/digital-bridge">
                <img
                  src="https://api.idda.az/resized/resize1042/center/pages/1/rsd-poster-az-2.png"
                  alt=""
                />
              </Link>
              <Link to="https://mygovid.gov.az/">
                <img
                  src="https://api.idda.az/resized/resize1042/center/pages/1/digital-login-main-poster-az-2.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div class="news-section">
          <div class="news-card">
            <p class="date">2025-11-06</p>
            <h3>
              Azərbaycan Kibertəhlükəsizlik Mərkəzi və SABAH qrupları Zəfər
              Gününə həsr olunmuş hakaton təşkil edib
            </h3>
            <img
              src="https://api.idda.az/resized/resize800/center/pages/626/dsc06875.jpg"
              alt="News 1"
            />
          </div>

          <div class="news-card">
            <p class="date">2025-11-06</p>
            <h3>
              Bakıda ilk dəfə “StrategEast: Dövlət və İT üzrə Avrasiya Forumu”
              keçirilib
            </h3>
            <img
              src="https://api.idda.az/resized/resize800/center/pages/627/0h7a8853.jpg"
              alt="News 2"
            />
          </div>

          <div class="news-cards">
            <p class="date">2025-10-31</p>
            <h3>Azərbaycanda “Bebras” Həftəsi keçiriləcək</h3>
          </div>

          <div class="news-card">
            <p class="date">2025-11-03</p>
            <h3>
              Azərbaycan Kibertəhlükəsizlik Mərkəzinin yeni təlim proqramına
              qeydiyyat başladı
            </h3>
            <img
              src="https://api.idda.az/resized/resize800/center/pages/624/akm-7ci-dalga-16x9-1.png"
              alt="News 3"
            />
          </div>

          <div class="news-card">
            <p class="date">2025-10-31</p>
            <h3>
              Asiya İnkişaf Bankı RİNN və AZCON tabeli qurumlarının satınalma
              əməkdaşları üçün tədbir keçirib
            </h3>
            <img
              src="https://api.idda.az/resized/resize800/center/pages/622/dsc06325.JPG"
              alt="News 4"
            />
          </div>

          <div class="news-cards">
            <p class="date">2025-10-28</p>
            <h3>“digital.login” fəaliyyətinə “mygov ID”-kimi davam edəcək</h3>
            <div class="news-cards">
              <p class="date">2025-10-27</p>
              <h3>
                Ölkədə informasiyanın rəqəmsallaşma səviyyəsinin diaqnostikası
                üçün yeni qaydalar təsdiq edilib
              </h3>
            </div>
          </div>
          {/* <button class="all-news-btn">Bütün xəbərlər ↗</button> */}
        </div>
        <div className="container-img">
          <div className="inner-container">
            <div className="txt">
              <h2>Bizə qoşulun, rəqəmsal gələcəyi birlikdə quraq.</h2>
              <p>
                İnnovasiya və Rəqəmsal İnkişaf Agentliyinin komandasına qoşulmaq
                istəyirsinizsə, iş elanlarımızı izləyin.
              </p>
              <Link to="https://idda.az/az/karyera/vakansiyalar"> Ətraflı</Link>
            </div>
            <div>
              <img
                src="https://api.idda.az/resized/resize822/center/pages/1/be-architect-img-01-0.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
