import clsx from "clsx";
import { ProductType } from "../../types/products";
// import {  useNavigate } from "react-router-dom";

const ProductItem: React.FC<ProductType> = ({
  className,
  img,
  label,
  price,
}) => {
  // const navigate = useNavigate();
  const handleClick = () => {
    // navigate(`/catalog/${id}`);
    console.log("navigate");
  };
  return (
    <div onClick={handleClick} className={clsx("", className)}>
      <div className="flex h-full flex-col gap-10 items-center justify-center">
        <img src={img} alt={label} />
        <div className="text-center flex flex-col gap-2">
          <h4 className="eclipse w-[180px] font-light text-sm  whitespace-nowrap text-ellipsis overflow-hidden h-[18px]">
            {label}
          </h4>
          <p className="text-main_color text-xs font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
