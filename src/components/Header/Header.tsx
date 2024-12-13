import { MdOutlinePerson } from "react-icons/md";
import HeaderNav from "./HeaderNav/HeaderNav";
import { SlBasket } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" md:w-[1140px] flex-col flex justify-center mx-auto items-center px-4">
      <div className="flex justify-center  w-screen bg-wp_preset_color_vivid_red py-[10px]">
        <div className=" md:w-[1140px] justify-between flex  text-white">
          <div className="flex gap-4 ">
            <a
              href="https://www.facebook.com/profile.php?id=61554803133963"
              target="blank"
            >
              <FaFacebook className="hover:opacity-[0.7] transition-opacity duration-300" />
            </a>
            <a
              href="https://www.instagram.com/laserowe.ogrody.mta.production/#"
              target="blank"
            >
              <FaInstagram className="hover:opacity-[0.7] transition-opacity duration-300" />
            </a>
          </div>
          <div className="flex gap-4">
            <NavLink
              className="text-[11px] font-poppins uppercase hover:opacity-[0.7] font-light transition-opacity duration-300"
              to="regulamin"
            >
              regulamin
            </NavLink>
            <NavLink
              className="text-[11px] font-poppins uppercase hover:opacity-[0.7] font-light transition-opacity duration-300"
              to="contact"
            >
              kontakt
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex md:w-[1140px] justify-between items-center  py-8">
        <div className="flex gap-4">
          <a
            href="tel: +48 577 723 000"
            target="blank"
            className="font-poppins text-[11px] flex items-center gap-2 text-wc_secondary_text hover:text-main_color transition-text duration-300"
          >
            <LuPhone />
            +48 577 723 000
          </a>
          <a
            href="mailto:sklep@e-mta.pl"
            target="blank"
            className="font-poppins uppercase text-[11px] flex items-center gap-2 text-wc_secondary_text hover:text-main_color transition-text duration-300"
          >
            <TfiEmail />
            sklep@e-mta.pl
          </a>
        </div>
        <a href="/" className="w-[200px] h-[70px]">
          <img
            className="w-[200px] h-[70px]"
            src="/src/assets/logo_mta.webp"
            alt="MTA logo"
          />
        </a>
        <div className="flex items-center gap-4">
          <label htmlFor="product-search" className="sr-only">
            Szukaj produktów
          </label>
          <input
            id="product-search"
            type="text"
            className="border p-2 bg-transparent w-[230px] h-[30px] rounded-md"
            placeholder="Wpisz nazwę produktu"
          />
          <MdOutlinePerson className="w-5 h-5" />
          <SlBasket className="w-5 h-5" />
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
