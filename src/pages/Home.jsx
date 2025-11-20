import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const faqs = [
    {
      question: "mygov nədir?",
      answer:
        "mygov platforması, vətəndaşların və dövlət xidmətlərinin qarşılıqlı əlaqəsini sadələşdirmək üçün nəzərdə tutulmuş əhatəli rəqəmsal həllərdən biridir. mygov vasitəsilə istifadəçilər geniş çeşidli dövlət xidmətlərinə, həyat hadisələrinin idarə edilməsinə və əsas məlumat və sənədlərə asanlıqla daxil ola bilərlər. Bu platforma həm fərdi vətəndaşların, həm də biznes subyektlərinin ehtiyaclarını qarşılamaq üçün hazırlanmışdır, istifadəçi üçün təhlükəsiz, rahat və səmərəli təcrübə təqdim edir. mygov, istifadəçilərin hökumətlə əlaqəli fəaliyyətlərini rəqəmsal mühitdə asanlaşdırmaqla əlçatanlığı, şəffaflığı və rahatlığı artırmağı hədəfləyir.Bu layihə vətəndaşlara rəqəmsal xidmətlər təqdim edən platformadır.",
    },
    {
      question: "İRİA-nın innovasiya sahəsindəki fəaliyyəti nədən ibarətdir?",
      answer:
        "İRİA ölkə ərazisində dayanıqlı innovasiya ekosisteminin formalaşdırılması üçün 5 əsas istiqamət üzrə ekosistemin inkişafını dəstəkləyir. Bu istiqamətlər maliyyə əlçatanlığının təmini, innovasiya mədəniyyətinin formalaşdırılması, insan kapitalının inkişafı, bazar əlçatanlığının təmini və lazımi infrastrukturun formalaşdırılmasıdır. ",
    },
    {
      question: "Azərbaycan İnnovasiya Mərkəzi nədir?",
      answer:
        "AİM (Azərbaycan İnnovasiya Mərkəzi) texnologiya sahibkarlarını, tədqiqatçıları, investorları, innovatorları və texnologiya ekosisteminin əsas iştirakçılarını bir araya gətirən dinamik bir məkandır. Bu məkanda fikirlər inqilabi məhsul və xidmətlərə çevrilir. AİM innovasiya mərkəzi olaraq, əməkdaşlığı təşviq edir, yeni ideyalar üçün inkişaf yeri rolunu oynayır və innovatorlara öz layihələrini inkişaf etdirmək, maliyyələşdirmək və genişləndirmək üçün yaradıcı həllər tapmalarında kömək edir. Startuplar, korporasiyalar, universitetlər, investorlar, tədqiqat laboratoriyaları və dövlət qurumları üçün enerji verici bir mühit yaratmaq məqsədilə AİM inkişafa və innovasiyaya töhfə verən əməkdaşlıq mühitini formalaşdırır.",
    },
    {
      question: "digital.login sistemində necə qeydiyyatdan keçə bilərəm?",
      answer:
        "digital.login sistemində qeydiyyat üçün “İdentifikasiya nömrəsi ilə” bölməsinə daxil olaraq, “Qeydiyyat” düyməsini sıxıb, videoqeydiyyata başlaya bilərsiniz. Videoqeydiyyat zamanı mobil nömrənin sizin adınıza olması ilə bağlı hər hansı tələb mövcud deyil, müraciət 10 iş günü ərzində sistem operatoru tərəfindən yoxlanıldıqdan və təsdiq edildikdən sonra hesab aktivləşir. Müraciətinizin dərhal cavablandırılması üçün isə “SİMA Rəqəmsal İmza” ilə qeydiyyatdan keçə bilərsiniz.",
    },
    {
      question: "Azərbaycan Kibertəhlükəsizlik Mərkəzi nədir?",
      answer:
        "Azərbaycan Kibertəhlükəsizlik Mərkəzi Azərbaycan Respublikası Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi ilə İsrailin “Technion” İnstitutunun birgə əməkdaşlığı ilə təsis edilib. Mərkəz ölkəmizdə kibertəhlükəsizlik sahəsində bilik və bacarıqları inkişaf etdirmək, beynəlxalq səviyyədə rəqabətədavamlı kadrlar yetişdirmək və dövlət, özəl sektor, eləcə də fərdi mütəxəssislər üçün qabaqcıl kiber təlimlər təqdim etmək məqsədilə yaradılmış innovativ mərkəzdir.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
      <div className="all-box">
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
                background:
                  "linear-gradient(65deg,#0059ff,#6a9eff 50%,#002160)",
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
      </div>

      <div className="activity-section">
        <div className="activity-header">
          <h2>Fəaliyyətimiz</h2>
          <div>
            <button ref={prevRef}>
              <FaArrowLeft />
            </button>
            <button ref={nextRef}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="swipers">
          <div className="swiper-section">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                300: {
                  // 640px və yuxarı
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                500: {
                  // 640px və yuxarı
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  // 1024px və yuxarı
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className="swiper-box">
                  <div>
                    <img
                      src="https://api.idda.az/storage/pages/1/mygov-main-page.svg"
                      alt=""
                    />
                  </div>
                  <div className="txt-swiper">
                    <p>mygov</p>
                    <span>
                      “mygov” vətəndaşlarla hökumət arasında effektiv əlaqə
                      yaradaraq dövlət xidmətlərinə və sənədlərə tam rəqəmsal
                      çıxış imkanı təqdim edən rəqəmsal hökumət platformasıdır.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div>
                    <img
                      src="https://api.idda.az/storage/pages/1/idda-awards-main-page.svg"
                      alt=""
                    />
                  </div>
                  <div className="txt-swiper">
                    <p>IDDA Awards</p>
                    <span>
                      "IDDA Awards" İnnovasiya və Rəqəmsal İnkişaf Agentliyinin
                      innovasiyalar sahəsində həyata keçirdiyi mükafatandırma
                      mərasimidir.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div>
                    <img
                      src="https://api.idda.az/resized/resize4762/center/pages/1/mygov-id-main-page.png"
                      alt=""
                    />
                  </div>
                  <div className="txt-swiper">
                    <p>mygov ID</p>
                    <span>
                      mygov ID dövlət və özəl qurumlar tərəfindən təqdim olunan
                      elektron xidmətlərə vahid giriş imkanı verən rəqəmsal
                      identifikasiya sistemidir.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div>
                    <img
                      src="https://api.idda.az/storage/pages/1/akm-main-page.svg"
                      alt=""
                    />
                  </div>
                  <div className="txt-swiper">
                    <p>Azərbaycan Kibertəhlükəsizlik Mərkəzi</p>
                    <span>
                      AKM kibertəhlükəsizlik sahəsində bilik və bacarıqları
                      artırmaq, ölkəni bu sahədə inkişaf etdirmək və beynəlxalq
                      səviyyədə rəqabətədavamlı kadrlar yetişdirmək məqsədi
                      daşıyır.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div>
                    <img
                      src="https://api.idda.az/storage/pages/1/texnopark-main-page-1.svg"
                      alt=""
                    />
                  </div>
                  <div className="txt-swiper">
                    <p>Texnopark</p>
                    <span>
                      Texnopark rezidentləri üçün vergidə 10 illik güzəşt
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-box">
                  <div>
                    <img
                      src="https://api.idda.az/resized/resize4762/center/pages/1/853x560-1.png"
                      alt=""
                    />
                  </div>
                  <div className="txt-swiper">
                    <p>Azərbaycan İnnovasiya Mərkəzi</p>
                    <span>
                      aim texnologiya ekosisteminin əsas iştirakçılarını bir
                      araya gətirən, əməkdaşlığı təşviq edən və innovativ
                      ideyaların inkişafına şərait yaradan dinamik mərkəzdir.
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
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
      <h2 style={{ marginTop: "50px", textAlign: "left", marginLeft: "30px" }}>
        Xəbərlər
      </h2>
      <div className="news-section container">
        <div className="news-card a">
          <p className="date">2025-11-06</p>
          <h3>
            Azərbaycan Kibertəhlükəsizlik Mərkəzi və SABAH qrupları Zəfər Gününə
            həsr olunmuş hakaton təşkil edib
          </h3>
          <img
            src="https://api.idda.az/resized/resize800/center/pages/626/dsc06875.jpg"
            alt="News 1"
          />
        </div>

        <div className="news-card b">
          <p className="date">2025-11-06</p>
          <h3>
            Bakıda ilk dəfə “StrategEast: Dövlət və İT üzrə Avrasiya Forumu”
            keçirilib
          </h3>
          <img
            src="https://api.idda.az/resized/resize800/center/pages/627/0h7a8853.jpg"
            alt="News 2"
          />
        </div>

        <div className="news-card c">
          <p className="date">2025-11-03</p>
          <h3>
            Azərbaycan Kibertəhlükəsizlik Mərkəzinin yeni təlim proqramına
            qeydiyyat başladı
          </h3>
          <img
            src="https://api.idda.az/resized/resize800/center/pages/624/akm-7ci-dalga-16x9-1.png"
            alt="News 3"
          />
        </div>

        <div className="news-card d">
          <p className="date">2025-10-31</p>
          <h3>
            Asiya İnkişaf Bankı RİNN və AZCON tabeli qurumlarının satınalma
            əməkdaşları üçün tədbir keçirib
          </h3>
          <img
            src="https://api.idda.az/resized/resize800/center/pages/622/dsc06325.JPG"
            alt="News 4"
          />
        </div>
        <div className="news-cards q">
          <p className="date">2025-10-31</p>
          <h3>Azərbaycanda “Bebras” Həftəsi keçiriləcək</h3>
        </div>
        <div className="news-cards w">
          <p className="date">2025-10-28</p>
          <h3>“digital.login” fəaliyyətinə “mygov ID”-kimi davam edəcək</h3>
        </div>
        <div className="news-cards e">
          <p className="date">2025-10-27</p>
          <h3>
            Ölkədə informasiyanın rəqəmsallaşma səviyyəsinin diaqnostikası üçün
            yeni qaydalar təsdiq edilib
          </h3>
        </div>
        <button className="all-news-btn r">Bütün xəbərlər ↗</button>
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
      <div className="faq-header">
        <h2>Tez-tez verilən suallar</h2>
        <div className="faq-section">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <IoIosArrowDown
                  className={`arrow ${openIndex === index ? "rotate" : ""}`}
                />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="img-swiper">
        <div className="img-header">
          <h2 style={{ marginBottom: "25px", fontWeight: "400" }}>
            Bizimlə birgə addımlayanlar!
          </h2>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img
              src="https://api.idda.az/resized/resize342/center/pages/1/images-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://api.idda.az/resized/resize342/center/pages/1/26d67be333cbc29d2e010a6d7d175f01.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://api.idda.az/resized/resize342/center/pages/1/logo-1.png"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://api.idda.az/resized/resize342/center/pages/1/elm-tehsil-naziriyi-logo.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://api.idda.az/resized/resize342/center/pages/1/images.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://api.idda.az/resized/resize342/center/pages/1/images-2.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Home;
