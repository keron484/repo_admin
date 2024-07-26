import { useForm } from "react-hook-form";
import useAuthContext from "../context/authContext";
import { useNavigate } from "react-router-dom";
function Login(){
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { errors,  errorMessage, loginAdmin } = useAuthContext();
  const onSubmit = async (data) => {
      loginAdmin(data, navigate);
  };
  
     return(
         <>
         <div className="login-container theme-color-light">
              <div className="d-flex flex-row align-items-center justify-content-center px-3">
               <form action="" onSubmit={handleSubmit(onSubmit)} className="text-white rounded-4 w-75 px-4 py-3 my-2 card shadow rounded-3 theme-color">
                   <div className="text-center my-4">
                     <h1 className="fs-4 fw-bolder my-2">Login</h1>
                     <p className="text-start fs-6">Welcome Back Admin</p>    
                  </div>
                  {
                    errorMessage && <div className="alert alert-danger">
                      {
                        errorMessage
                      }
                    </div>
                  }  
                  <div className="my-3">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    className={errors.email ? "form-control border-danger" : "form-control"} 
                    placeholder="Enter Email"
                    name="email"
                    {...register('email')}
                    />
                  </div>
                  {
                    errors.email && <div className="text-danger">
                      {
                        errors.email[0]
                      }
                    </div>
                  }
                  <div className="my-3">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    className={errors.password ? "form-control border-danger" : "form-control"} 
                    placeholder="Enter Password"
                    name="password"
                    {...register('password')}
                    />
                  </div>
                  {
                    errors.password && <div className="text-danger">
                      {
                        errors.password[0]
                      }
                    </div>
                  }
                  <button className="btn btn-success rounded-2 w-100  mt-4 mb-3" type="submit" name="submit">
                    Login
                  </button>
              </form>      
             </div>            
         </div>
         </>
    )
}
export default Login;