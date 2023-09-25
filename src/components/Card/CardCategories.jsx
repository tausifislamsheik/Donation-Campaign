

const CardCategories = ({card}) => {

    const {id, picture, title, description, price} = card || {}


    return (
        <div className="flex justify-center items-center ">
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
     <figure className="w-70">
       <img src={picture} alt="" />
     </figure>
  <div className="card-body">
    <div className="card-actions">
      <button className="btn btn-primary">Donate {price}</button>
    </div>
    <h2 className="card-title font-bold">{title}</h2>
    <p>{description}</p>
    
  </div>
            </div>
        </div>
    );
};

export default CardCategories;