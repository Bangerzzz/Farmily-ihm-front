import Navbar from "../Components/Navbar";
import SearchOptions from "../Components/SearchOptions";
import OfferList from "../Components/OfferList";

function HomePage() {
    return (
      <div>
        <Navbar/>
        <div className="container mx-auto mt-10">
          <h1 className="text-center text-2xl">
            Consommez local, soutenez les agriculteurs de votre région avec notre application de vente directe !
          </h1>
        </div>
        <SearchOptions/>
        <OfferList/>
      </div>
    );
  }
  
  export default HomePage;