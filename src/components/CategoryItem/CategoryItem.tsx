import grid from "../../assets/images/grid.png";
import { ProductType } from "../../types/products";



const CategoryItem: React.FC<ProductType> = ({ label, desc, img, btnText }) => {
  return (
    <div className="group relative overflow-hidden h-full md:w-full rounded-xl bg-custom-gradient">
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div
        className="absolute top-0 left-0 w-full h-full flex items-end transition-all duration-300 rounded-xl"
        style={{
          backgroundImage: `url(${grid})`,
        }}
      >
        <div className="h-[174px] md:w-[312px] p-[28px] flex flex-col justify-end gap-4">
          <div>
            <h2 className="text-white font-light text-[24px]">{label}</h2>
            <p className="text-white font-light text-[12px]">{desc}</p>
          </div>
          <button className="group-hover:bg-white bg-main_color group-hover:text-main_color text-white py-[18px] px-[30px] w-[154px] h-[54px] rounded-lg text-[12px] font-semibold transition-all duration-300">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
