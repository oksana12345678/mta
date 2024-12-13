import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="flex flex-col  items-center justify-center after:bg-border_gray after:content-[''] after:w-[100vw] after:block after:h-[1px] before:content-[''] before:w-[100vw] before:block before:h-[1px] before:bg-border_gray">
      <ul className="flex gap-8 font-poppins font-light py-[10px]">
        {[
          { to: "/", label: "Strona głowna" },
          { to: "about", label: "O nas" },
          { to: "product", label: "Produkty" },
          { to: "ploter", label: "Ploter" },
          { to: "contact", label: "Kontakt" },
          { to: "mta", label: "MTA" },
        ].map((link) => (
          <NavLink key={link.to} to={link.to} className="relative group">
            <li className=" hover:text-main_color transition-all duration-500 normal-case">
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-main_color transition-all duration-500 group-hover:w-full"></span>
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
