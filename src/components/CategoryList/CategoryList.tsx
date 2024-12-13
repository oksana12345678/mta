import CategoryItem from "../CategoryItem/CategoryItem";
import bramy from "../../assets/images/Bramy.webp";
import paneli from "../../assets/images/wziry.webp";
import tabliczki from "../../assets/images/tabliczki.webp";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const navigate = useNavigate();

  const CATEGORY_LIST = [
    {
      label: "Bramy wjazdowe",
      desc: "Idealne dla każdego ogrodzenia!",
      img: bramy,
      btnText: "Poznaj ofertę",
      link: "/bramy",
    },
    {
      label: "Wszystkie wzory paneli",
      desc: "90 wzorów do wyboru!",
      img: paneli,
      btnText: "Poznaj ofertę",
      link: "/wzory-paneli",
    },
    {
      label: "Tabliczki adresowe",
      desc: "Zobacz naszą ofertę!",
      img: tabliczki,
      btnText: "Poznaj ofertę",
      link: "/tabliczki",
    },
  ];

  // Function to handle navigation
  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="m-[26px]">
      <div>
        <ul className="flex flex-col gap-6 md:flex-row md:w-[960px] mx-auto ">
          <li
            className="  flex-1 h-[500px] w-1/2 rounded-xl cursor-pointer "
            onClick={() => handleCategoryClick(CATEGORY_LIST[0].link)}
          >
            <CategoryItem
              label={CATEGORY_LIST[0].label}
              desc={CATEGORY_LIST[0].desc}
              img={CATEGORY_LIST[0].img}
              btnText={CATEGORY_LIST[0].btnText}
            />
          </li>

          <div className="flex flex-col gap-6 w-1/2">
            {CATEGORY_LIST.slice(1).map((category, index) => (
              <li
                key={index}
                className=" h-[236px]  rounded-xl cursor-pointer"
                onClick={() => handleCategoryClick(category.link)}
              >
                <CategoryItem
                  label={category.label}
                  desc={category.desc}
                  img={category.img}
                  btnText={category.btnText}
                />
              </li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default CategoryList;
