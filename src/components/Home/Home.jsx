import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useLoaderData } from 'react-router-dom'

const Home = () => {

     const cards = useLoaderData()
    

    return (
        <div>
            <Banner></Banner>
            <Cards cards={cards}></Cards>
            
            

        </div>
    );
};

export default Home;