const Card = ({ card }) => {
  const {
    id,
    picture,
    title_color,
    title,
    category_bg_color,
    text_button_bg_color,
    description,
    price,
  } = card || {};
  return (
    <div className="">
      <div className="relative flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div>
            <div className="">
              <img className="container px-10 " src={picture} alt="ui/ux" />
            </div>
            <div className="relative pl-14 -mb-30">
              <button
                className="border border-gray-700 rounded p-1"
                style={{
                  color: category_bg_color,
                  backgroundColor: text_button_bg_color,
                }}
              >
                Donate${price}
              </button>
            </div>
          </div>
        </div>
        <div className="px-10 py-5">
          <h4
            className="text-xl md:text-2xl lg:text-3xl font-normal md:font-medium lg:font-bold"
            style={{ color: title_color }}
          >
            {title}
          </h4>
          <p className="text-base font-normal" style={{ color: title_color }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
