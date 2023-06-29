import Navbar from "../Components/Navbar";
import SearchOptions from "../Components/SearchOptions";
import OfferList from "../Components/OfferList";
import NavbarGuest from "../Components/NavbarGuest";
import { accountService } from "../Services/accountServices";

function HomePage() {
    const isLoggedIn = accountService.isLogged(); // vérifiez l'état de connexion

    return (
      <div>
        {isLoggedIn ? <Navbar/> : <NavbarGuest/>} {/* affichez Navbar si connecté, sinon NavbarGuest */}
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