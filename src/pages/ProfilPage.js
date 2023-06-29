import Navbar from "../Components/Navbar";
import ProfilBanner from "../Components/ProfilBanner";
import pour_page_profil from "../images/pour_page_profil.png"

function ProfilPage() {
    return (
      <div>
        <div className="relative">
          <Navbar/>
        </div>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <ProfilBanner/>
        </div>
        <img src={pour_page_profil} className="fixed bottom-0 right-0" style={{height:'500px',top:'35%',left:'65%'}} alt="" />
      </div>
    );
  }
  
  export default ProfilPage;