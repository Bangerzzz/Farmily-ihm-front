import NavbarLogin from "../Components/NavbarLogin";
import AnnonceBanner from "../Components/AnnonceBanner";
import pour_page_annonce from "../images/pour_page_annonce.png"

function AnnonceCreationPage() {
    return (
      <div>
        <div className="relative">
          <NavbarLogin />
        </div>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <AnnonceBanner/>
        </div>
        <img src={pour_page_annonce} className="fixed bottom-0 right-0" style={{height:'500px',top:'35%',left:'65%'}} alt="" />
      </div>
    );
  }
  
  export default AnnonceCreationPage;