import numeral from "numeral";
import { useNavigate } from "react-router-dom";

const Coin = ({
  id,
  name,
  image,
  price,
  percentage,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="bg-white w-40 flex flex-col items-center rounded-md p-3 cursor-pointer transition-all duration-100 hover:scale-95 hover:bg-slate-700 hover:text-white" onClick={handleClick}>
      <img className="w-16 h-16 my-1" src={image} alt={id} />
      <p className="font-bold truncate">{name}</p>
      <p>{numeral(price).format('$0,0[.]00')}</p>
      <p>{numeral(percentage).format('0.000%')}</p>
    </div>
  );
};

export default Coin;
