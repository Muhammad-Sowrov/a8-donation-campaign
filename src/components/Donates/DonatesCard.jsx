import { Link } from "react-router-dom";

const DonatesCard = ({ donate }) => {
  const {
    id,
    picture,
    title_color,
    title,
    category,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = donate || {};
  return (
    <div className="px-10 py-5">
      <div
        className="card w-auto gap-5 container mx-auto "
        style={{ backgroundColor: card_bg_color }}
      >
        <figure className="">
          <img src={picture} alt="img" className="rounded-xl" />
        </figure>
        <div className="car-body items-center text-start px-3 py-1">
          <div className="card-actions">
            <Link to={`/donation/${id}`}>
              <button
                className="border border-gray-700 rounded p-1 {category_bg_color}"
                style={{
                  color: category_bg_color,
                  backgroundColor: text_button_bg_color,
                }}
              >
                {category}
              </button>
            </Link>
          </div>
          <p style={{ color: title_color }}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default DonatesCard;
