import NavbarLogin from "../Components/NavbarLogin";
import SigninBanner from "../Components/SigninBanner";
import BottomRightImage from "../images/5098045.png"

function SignInPage() {
    return (
      <div>
        <div className="relative">
          <NavbarLogin />
        </div>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <SigninBanner/>
        </div>
        <img src={BottomRightImage} className="absolute bottom-0 right-0" style={{top: '400px', height:'232px'}} alt="" />
      </div>
    );
  }
  
  export default SignInPage;