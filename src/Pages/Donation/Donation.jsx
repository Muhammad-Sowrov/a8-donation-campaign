import { useEffect, useState } from "react";
import Donate from "./Donate";

const Donation = () => {
  const [add, setAdd] = useState([]);
  const [noData, setNoData] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem("donate"));
    setAdd(donateItem);

    if (donateItem) {
      setAdd(donateItem);
    } else {
      setNoData("You Did Not Donated Yet!");
    }
  }, []);
  // console.log(add);
  // console.log(isShow);
  return (
    <div>
      {noData ? (
        <p className="text-center text-base md:text-xl lg:text-3xl  flex justify-center h-[70vh] items-center ">
          {noData}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-10">
          {isShow
            ? add.map((card) => <Donate key={card.id} card={card}></Donate>)
            : add
                .slice(0, 4)
                .map((card, index) => (
                  <Donate key={index} card={card}></Donate>
                ))}
          <button
            onClick={() => setIsShow(!isShow)}
            className="text-center items-center bg-white w-20 rounded-lg h-10 px-2 py-2 mx-auto"
          >
            {isShow ? "" : "See All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
