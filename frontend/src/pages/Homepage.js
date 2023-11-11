import { useState, useRef, useCallback, useEffect } from "react";
import SortBy from "../components/SortBy";
import PortalPopup from "../components/PortalPopup";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";
import FlashSales from "../components/FlashSales";
import LimitedStockDeals from "../components/LimitedStockDeals";
import BestSelling from "../components/BestSelling";
import HomeNavigation from "../components/HomeNavigation";
import SearchBar from "../components/SearchBar";
import styles from "./Homepage.module.css";
import Trending from "../components/Trending";
import DealsOfTheDay from "../components/DealsOfTheDay";
import NewArrivals from "../components/NewArrivals";
import { useSearch } from "../context/SearchContext";

const Homepage = () => {
  const { setChoice, setChoice1, setChoice2 } = useSearch();

  useEffect(() => {
    setChoice("Popularity");
    setChoice1("Popularity");
    setChoice2("Popularity");
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  const images = [
    "/storage.jpg",
    "/farm.jpeg",
    "/logistics.jpeg",
    "/livestock.jpeg",
  ];
  const captions = [
    "Kani Silos",
    "Mayor Farms",
    "Xpo Logistics",
    "Sunny Livestocks",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
            <Footer />
          </div>

          <div className={styles.farmersOfTheContainer}>
            <span className={styles.farmersOfThe}>Trending </span>
            <span className={styles.week}>Farms</span>
          </div>

          <FlashSales />

          <LimitedStockDeals />
          <BestSeller />

          <NewArrivals />

          <DealsOfTheDay />

          <Trending />

          <div className={styles.slideshow}>
            <img
              className={styles.ezgif1Icon}
              src={process.env.PUBLIC_URL + images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
            />
            <div className={styles.caption}>{captions[currentImageIndex]}</div>
          </div>

          <section className={styles.groupWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img
                className={styles.bba003827272830485a6b84d4dLarIcon}
                alt=""
                src="/851951bba003827272830485a6b84d4d-largeremovebgpreview-4@2x.png"
              />
              <img
                className={styles.bba003827272830485a6b84d4dLarIcon1}
                alt=""
                src="/851951bba003827272830485a6b84d4d-largeremovebgpreview-5@2x.png"
              />
              <img
                className={styles.pngTomato187024Icon}
                alt=""
                src="/png-tomato-18702-4@2x.png"
              />
              <img
                className={styles.lettuceRemovebgPreview3Icon}
                alt=""
                src="/lettuceremovebgpreview-3@2x.png"
              />
              <img
                className={styles.lettuceRemovebgPreview4Icon}
                alt=""
                src="/lettuceremovebgpreview-4@2x.png"
              />
              <div className={styles.getUpTo}>Get up to 60% OFF</div>
              <button className={styles.rectangleGroup} data-animate-on-scroll>
                <div className={styles.groupItem} />
                <div className={styles.shopNow}>SHOP NOW</div>
              </button>
              <div className={styles.vEG}>V E G E T A B L E S</div>
              <img
                className={styles.sweetRedPeppersCopy600x6Icon}
                alt=""
                src="/sweetredpeppers--copy600x600removebgpreview-3@2x.png"
              />
            </div>
          </section>
          <div className={styles.farmersoftheweek}>
            <div className={styles.farmersoftheweekInner}>
              <div className={styles.groupParent}>
                <button className={styles.rectangleContainer}>
                  <div className={styles.groupInner} />
                  <div className={styles.mandraFarms}>Mandra Farms</div>
                  <div className={styles.abuja}>Abuja</div>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-133.svg"
                  />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-133@2x.png"
                  />
                </button>
                <button className={styles.groupButton}>
                  <div className={styles.groupInner} />
                  <div className={styles.mandraFarms}>Damia Farms</div>
                  <div className={styles.abuja}>Abuja</div>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-133.svg"
                  />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-1331@2x.png"
                  />
                </button>
                <button className={styles.rectangleParent1}>
                  <div className={styles.groupInner} />
                  <div className={styles.mandraFarms}>Defabs Foods</div>
                  <div className={styles.abuja}>Abuja</div>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-133.svg"
                  />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-1332@2x.png"
                  />
                </button>
                <button className={styles.rectangleParent2}>
                  <div className={styles.groupInner} />
                  <div className={styles.mandraFarms}>Granje Farms</div>
                  <div className={styles.abuja}>Abuja</div>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-133.svg"
                  />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-1333@2x.png"
                  />
                </button>
                <button className={styles.rectangleParent3}>
                  <div className={styles.groupInner} />
                  <div className={styles.mandraFarms}>Bloomfield</div>
                  <div className={styles.abuja}>Abuja</div>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-133.svg"
                  />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-1334@2x.png"
                  />
                </button>
                <button className={styles.rectangleParent4}>
                  <div className={styles.groupInner} />
                  <div className={styles.mandraFarms}>Mandra Farms</div>
                  <div className={styles.abuja}>Abuja</div>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-133.svg"
                  />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-1335@2x.png"
                  />
                </button>
                <button className={styles.rectangleParent5}>
                  <div className={styles.groupInner} />
                  <div className={styles.mandraFarms}>Mandra Farms</div>
                  <div className={styles.abuja}>Abuja</div>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-134.svg"
                  />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-1336@2x.png"
                  />
                </button>
                <button className={styles.rectangleParent6}>
                  <div className={styles.groupInner} />
                  <div className={styles.mandraFarms}>Mandra Farms</div>
                  <div className={styles.abuja}>Abuja</div>
                  <div className={styles.div}>4.8</div>
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-134.svg"
                  />
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-1337@2x.png"
                  />
                </button>
              </div>
            </div>
            <img
              className={styles.farmersoftheweekChild}
              alt=""
              src="/group-328.svg"
            />
          </div>
          <BestSelling />
        </div>
        <SearchBar
          dimensionText="/phuserlight.svg"
          dimensionText2="/bibasketfill.svg"
        />

        <HomeNavigation />
      </div>
    </>
  );
};

export default Homepage;
