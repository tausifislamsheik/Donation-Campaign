import { Link } from 'react-router-dom'

const CategoriesCard = ({card}) => {

       const {id, picture, title, category, category_bg_color, card_bg_color, text_color, description, price} = card || {}


    return (
        <div>
            <Link to={`/cards/${id}`}>
            <div style={{color:card_bg_color}} className="card w-65  shadow-xl">
  <figure className="">
    <img src={picture} alt="" className="rounded-t" />
  </figure>
  <button style={{color:text_color}}  className="mt-6 mr-20 ">{category}</button>
  <div className="card-body  ">
    <h2 style={{color:text_color}} className="card-title">{title}</h2>
  </div>
            </div>
            </Link>
        </div>
    );
};

export default CategoriesCard;