const Donate = ({ card }) => {
  const {
    id,
    picture,
    title_color,
    title,
    category,
    category_bg_color,
    text_button_bg_color,
    description,
    price,
  } = card || {};
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 h-full rounded-md "
            src={picture}
            alt="Album"
          />
        </figure>
        <div className="card-body flex-1">
            <h2 className="text-base font-normal" style={{color:title_color}}>{category}</h2>
          <h2 className=" text-black text-2xl font-semibold">{title}</h2>
          <p className="text-base font-semibold" style={{color:title_color}}>${price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
