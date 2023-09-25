import { Link } from 'react-router-dom'

const CategoriesCard = ({card}) => {

       const {id, picture, title, category, category_bg_color, card_bg_color, text_color} = card || {}


    return (
        <div>
            <Link to={`/cards/${id}`}>
            <div style={{background:card_bg_color}} className="card w-65">
  <figure className="">
    <img src={picture} alt="" className="rounded-t" />
  </figure>
  <button style={{color:text_color, background:category_bg_color}} className="btn btn-xs">{category}</button>
  <div className="card-body  ">
    <h2 style={{color:text_color}} className="card-title">{title}</h2>
  </div>
            </div>
            </Link>
        </div>
    );
};

export default CategoriesCard;