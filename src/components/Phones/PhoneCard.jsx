const PhoneCard = ({phone}) => {
    const {id, picture, title_color, title, category, card_bg_color, category_bg_color } = phone;
  return (
    <div className="px-10 py-5">
      <div className="card w-auto gap-5 container mx-auto " style={{backgroundColor:card_bg_color}}>
        <figure className="">
          <img
            src={picture}
            alt="img"
            className="rounded-xl"
          />
        </figure>
        <div className="car-body items-center text-start px-3 py-1">

            <div className="card-actions">
                <button style={{color:category_bg_color}}>{category}</button>
            </div>
            <p style={{color:title_color}}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
