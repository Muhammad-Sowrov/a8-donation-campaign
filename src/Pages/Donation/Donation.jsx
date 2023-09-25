import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Donation = () => {

    const [card, setCard] = useState()
    const {id} = useParams()

    const cards = useLoaderData()
    // console.log(cards);
    // console.log(params);

    useEffect(()=> {
        const findCard = cards?.find(card => card.id === id)
        console.log(findCard);

    },[id, cards])
    return (
        <div>
            donation
        </div>
    );
};

export default Donation;