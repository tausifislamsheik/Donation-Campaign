/* eslint-disable react/prop-types */


const DonationCard = ({card}) => {

    const { donation_list_img, title, category, category_bg_color, card_bg_color, text_color, price} = card || {}

    return (
        <div style={{background:card_bg_color}} className="card card-side h-48">
        <figure>
            <img src={donation_list_img} alt=""/>
        </figure>
        <div className="card-body">
           <button style={{color:text_color, background:category_bg_color}} className="btn btn-xs">{category}</button>
          <h2 className="card-title">{title}</h2>
          <p style={{color:text_color}} className="font-bold">{price}</p>
          <div className="card-actions">
            <button style={{background:text_color}} className="btn  text-white">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default DonationCard;