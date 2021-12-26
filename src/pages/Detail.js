import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/outline";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [coin, setCoin] = useState([]);

  const getData = async () => {
    try {
      let dataFromAPI = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
      let dataToJSON = await dataFromAPI.json();
      setCoin(dataToJSON);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  const backHandle = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg w-screen p-5">
        <div className="flex justify-end">
          <XCircleIcon className="w-10 h-10 cursor-pointer transition-all duration-100 hover:scale-105" onClick={backHandle} />
        </div>
        <p className="text-3xl sm:text-5xl text-center my-24">Sorry this page still underconstruction!</p>
      </div>
    </div>
  );
};

export default Detail;
