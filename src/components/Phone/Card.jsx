import { useEffect, useState } from 'react';
import {useParams, useLoaderData} from 'react-router-dom';
import CardCategories from './CardCategories';


const Card = () => {

    const [card, setCard] = useState()

    const {id} = useParams()
    

  const cards = useLoaderData()


  useEffect(() => {
      
    const findCategories = cards?.find(card => card.id === id)
    

    setCard(findCategories)

  },[id, cards]);

  console.log(card)


    return (
        <div>
            <CardCategories card={card}></CardCategories>
        </div>
    );
};

export default Card;