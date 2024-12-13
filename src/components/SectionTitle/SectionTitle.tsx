import { TitleType } from "../../types/products";

const SectionTitle: React.FC<TitleType> = ({ subtitle, title }) => (
  <div className="flex flex-col after:mt-[20px] justify-center items-center after:content-[''] after:block after:bg-main_color after:w-[80px] after:h-[2px]">
    <h4 className="font-poppins text-main_color font-light text-base text-center">
      {subtitle}
    </h4>
    <h3 className="font-poppins text-black font-light text-[24px] text-center">
      {title}
    </h3>
  </div>
);

export default SectionTitle;
