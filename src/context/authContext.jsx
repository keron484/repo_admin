import { useContext, useState, createContext } from "react";
import axios from "../api/axios";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ istoggled, setIstoggled ] = useState(false);
  const csrf = () => axios.get('/sanctum/csrf-cookie');  
  const getadmin = async (navigate) => {
       const token = localStorage.getItem('token');
        try{
          const response = await axios.get('api/admin', {
            headers:{
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data.admin_user);
        }
        catch(e){
           navigate("/login")
        }
  }
  const loginAdmin = async (data, navigate) => {
    await csrf();
    try {
      const response =  await axios.post('api/login-admin', data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        getadmin();
        navigate("/");
    }
    catch(error){
        if (error.response) {
            const errorData = error.response.data;
             setErrors(error.response.data.errors);
             setErrorMessage(errorData.message);
          } 
    }
  }

 function toggle(){
    setIstoggled((prevalue) => !prevalue);
 }
  return (
    <AuthContext.Provider value={{ loginAdmin, errors, user, getadmin, errorMessage, toggle, istoggled }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}