import { FireIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { apiUrl } from "../utils"
import Coin from "../components/Coin";

function Home() {
  const [coins, setCoins] = useState([]);

  const getCoin = async () => {
    try {
      let dataFromAPI = await fetch(apiUrl);
      let dataToJSON = await dataFromAPI.json();
      setCoins(dataToJSON);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCoin();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg">
        <div className="flex flex-col justify-center items-center m-5">
          <FireIcon className="w-28 h-28 sm:w-52 sm:h-52" color="orange" />
          <p className="text-3xl sm:text-6xl text-slate-900 font-extrabold">Crypton!</p>
          <p className="text-xl mt-2 text-slate-900">Know Cryptocurrency easily now.</p>
        </div>
        <div className="m-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {coins.map(coin => (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              cap={coin.market_cap}
              percentage={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
