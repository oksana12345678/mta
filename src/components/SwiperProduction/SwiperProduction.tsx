import {
  brama1,
  donica,
  furtka,
  wieszak1,
  wieszak2,
  wieszak3,
  wieszak4,
  wieszak5,
} from "../../assets/productsImg/index";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "swiper/css";
import "./SwiperProducts.css";
import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";

const SwiperProduction = () => {
  const swiperRef = useRef(null);

  const PRODUCTS_LIST = [
    {
      label: "Donica ogrodowa z cortenu MTA-DO01",
      img: donica,
      price: "630,00zl - 720,00zl",
    },
    {
      label: "Furtka",
      img: furtka,
      price: "1836,00zl - 3189,00zl",
    },
    {
      label: "Brama pszesuwna",
      img: brama1,
      price: "7986,00zl - 11339,00zl",
    },
    {
      label: "Wieszak na medale MTA-WM10",
      img: wieszak1,
      price: "90,00zl",
    },
    {
      label: "Wieszak na medale MTA-WM09",
      img: wieszak2,
      price: "90,00zl",
    },
    {
      label: "Wieszak na medale MTA-WM08",
      img: wieszak3,
      price: "90,00zl",
    },
    {
      label: "Wieszak na medale MTA-WM07",
      img: wieszak4,
      price: "90,00zl",
    },
    {
      label: "Wieszak na medale MTA-WM06",
      img: wieszak5,
      price: "90,00zl",
    },
  ];

  return (
    <section className="flex flex-col justify-center w-full h-[540px]">
      <div>
        <SectionTitle subtitle="Nasze produkty" title="Przeglądaj produkty" />

        <div className="swiper-container w-[960px] mx-auto relative">
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination",
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {PRODUCTS_LIST.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductItem
                  label={product.label}
                  img={product.img}
                  price={product.price}
                  className="hover:border-product_item_hover hover:border-[1px] w-[226px] rounded-lg p-5 h-[318px] bg-product_item_bg transition-all duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev border-main_color border-[1px] absolute top-[50%] z-40 left-[-8px] transform -translate-y-1/2 p-3 cursor-pointer bg-transparent rounded-full hover:bg-woo_commerce hover:text-white transition-all ease delay-300 duration-300">
            <LuArrowBigLeft />
          </div>
          <div className="swiper-button-next absolute border-main_color border-[1px] top-[50%] z-40 right-[-8px] transform -translate-y-1/2 p-3 cursor-pointer bg-transparent rounded-full hover:bg-woo_commerce hover:text-white transition-all ease delay-300 duration-300">
            <LuArrowBigRight />
          </div>

          <div className="swiper-pagination flex justify-center gap-2 pt-4 h-7 w-full  overflow-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default SwiperProduction;
