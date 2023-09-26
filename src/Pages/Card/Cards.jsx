import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards?.find((card) => card.id === id);
    setCard(findCard);
  }, [cards, id]);
  // console.log(card);
  return <div>
    <Card card={card}></Card>

  </div>;
};

export default Cards;
