import {useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {


      const [donation, setDonation] = useState([])

      const [noFound, setNoFound] = useState(false)

      const [dataLength, setDataLength] = useState(4)

      useEffect(() => {

        const donationItems = JSON.parse(localStorage.getItem('donation'))
        
        if(donationItems){
            setDonation(donationItems)
        }else{
            
            setNoFound('NO DATA FOUND')
        }

      },[])

   console.log(donation)

    return <div>
            {noFound ? <p className='h-[80vh] flex justify-center items-center'>{noFound}</p> : <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {donation.slice(0, dataLength).map(card => <DonationCard key={card.id} card={card}></DonationCard> )}
                </div>
                <div className={dataLength === donation.length && 'hidden'}>
                    <button onClick={() => setDataLength(donation.length)} className="btn btn-active btn-accent mt-8 text-white block mx-auto">See All</button>
                </div>
                </div>}
           </div>
    
};

export default Donation;