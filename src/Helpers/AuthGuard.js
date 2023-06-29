import { Navigate } from "react-router-dom";
import { accountService } from "../Services/accountServices";

/**
 * Fonction de vérification de token
 * Et fermetur partie admin
 * 
 * @param {Object} props{children} 
 * @returns {ReactNode}
 */
const AuthGuard = ({children}) => {

    if(!accountService.isLogged()){
        return <Navigate to="/"/>
    }
   
    return children
};

export default AuthGuard;