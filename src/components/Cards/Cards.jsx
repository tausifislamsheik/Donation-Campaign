import CategoriesCard from "./CategoriesCard";


const Cards = ({cards}) => {
    console.log(cards)
    return (
        <div>
            {/* <h1 className="text-2xl">All categories</h1> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-4 py-20">
                {
                    cards?.map(card => <CategoriesCard key={card.id} card={card}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Cards;