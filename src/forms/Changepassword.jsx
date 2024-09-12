import { Link } from "react-router-dom";
import axios from "../api/axios";
import { toast } from 'react-hot-toast';
import { useState } from "react";
import { useForm } from "react-hook-form";
function Changepassword(){
  const [ errors, setErrors ] = useState([]);
  const { reset, handleSubmit, register } = useForm();
  const handle_password_change = async (data) => {
     try{
      const token = localStorage.getItem('token');
       await axios.post('api/change-password', data, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
         toast.success("Password changed succefully");
         reset();
     }
     catch(e){
      if (e.response) {
        const errorData = e.response.data;
        setErrors(errorData.errors);
        toast.error("Something went wrong");
      }
     }
  }
    return(
        <>
   <div className="d-flex flex-row align-items-center justify-content-between mt-3">
      <h5 className="fs-5 fw-bold text-white">Change Password Admin</h5>
      <div>
      <Link className="link" to="/settings">
      <button className="fs-12 btn btn-success">
        Back
      </button>
      </Link>
      </div>
     </div>
     <hr />
     <div className="row">
      <div className="col-lg-12">
        <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-3">
         <form action="" onSubmit={handleSubmit(handle_password_change)} className="w-75">
         <div className="card border-none shadow-sm w-100 px-3 rounded-4 py-2 theme-color text-white">
            <h1 className="fs-5 text-center my-2 fw-bold">Change Password</h1>
            <div className="my-2">
              <p className="fs-6 my-0">Current Password</p>
              <input 
              type="password" 
              className={errors.current_password ? "form-control border-danger" : "form-control"}
              placeholder="Enter Current Password"
              name="current_password"
              {...register("current_password")}
              />
              {
                errors.current_password && (
                  <div className="text-danger">
                    {
                      errors.current_password[0]
                    }
                  </div>
                )
              }
            </div>
            <div className="my-2">
              <p className="fs-6 my-0">New Password</p>
              <input 
              type="password" 
              className={ errors.new_password ? "form-control border-danger" : "form-control" } 
              placeholder="Enter New Password"
              name="new_password"
              {...register('new_password')}
              />
              {
                errors.new_password && (
                  <div className="text-danger">
                    {
                      errors.new_password[0]
                    }
                  </div>
                )
              }
            </div>
            <div className="my-2">
              <p className="fs-6 my-0">Confirm Password</p>
              <input 
              type="password" 
              className={errors.new_password_confirmation ? "form-control border-danger" : "form-control"}
              placeholder="Enter Password Confrimation"
              name="new_password_confirmation"
              {...register('new_password_confirmation')}
              />
              {
                errors.new_password_confirmation && (
                  <div className="text-danger">
                    {
                      errors.new_password_confirmation[0]
                    }
                  </div>
                )
              }
            </div>
            <button 
            className="w-100 btn btn-success fw-bold my-2"
            type="submit"
            >Change Password</button>
          </div>
         </form>
        </div>
      </div>

     </div>
        </>
    )
}
export default Changepassword;