/* eslint-disable react/prop-types */
// import { setItem } from "localforage";
import Swal from "sweetalert2";


const CardCategories = ({card}) => {

    const {id, picture, title, text_color, description, price} = card || {}

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

        
    }


    return (
        
       <div className="relative w-full lg:w-[1120px] mx-auto">
           {/* Image */}
       <img src={picture}
       className="w-[100%] object-contain rounded-lg"
       alt={title}/>
         {/* Donate button */}
       <div className="bg-[#0b0b0b80] h-28 md:h-32 lg:h-36 w-[100%] absolute bottom-0 p-10 bg-opacity-25">
       <button
       onClick={handleAddToDonation}
       className="p-1 md:p-3 rounded text-xl font-semibold text-white"
       style={{ backgroundColor:text_color }}>
       Donate ${price}
       </button>
        <div className="py-20">
          <h2 className="card-title text-3xl mb-5 font-bold">{title}</h2>
          <p>{description}</p>
        </div>
         </div>
       </div>


    );
};

export default CardCategories;