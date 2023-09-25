import { setItem } from "localforage";
import Swal from "sweetalert2";


const CardCategories = ({card}) => {

    const {id, picture, title, description, price} = card || {}

    const handleAddToDonation = () => {

       const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

      if(!donationItems){
        addedDonationArray.push(card)
        localStorage.setItem('donation', JSON.stringify(addedDonationArray))
        Swal.fire(
            'Donation Successfull!',
            'You clicked the button!',
            'success'
          )
      }else{

        const isExist = donationItems.find(card => card.id === id)

        if(!isExist){
            addedDonationArray.push(...donationItems, card)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            Swal.fire(
                'Donation Successfull!',
                'You clicked the button!',
                'success'
              )
        }else{
            Swal.fire(
                'No Dublicate!',
                'You clicked the button!',
                'error'
            )
        }
        
      }

        // localStorage = setItem('test', )
    }


    return (
        <div className="flex justify-center items-center ">
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
     <figure className="w-70">
       <img src={picture} alt="" />
     </figure>
  <div className="card-body">
    <div className="card-actions">
      <button onClick={handleAddToDonation} className="btn btn-primary">Donate {price}</button>
    </div>
    <h2 className="card-title font-bold">{title}</h2>
    <p>{description}</p>
    
  </div>
            </div>
        </div>
    );
};

export default CardCategories;