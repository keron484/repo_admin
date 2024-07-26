import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Spinnnersingle } from "../components/Spinners";
function Updateprofilepic(){
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState([]);
    const { id } = useParams();
    const [ errorMsg, setErrormsg ] = useState(null);
    const { register, handleSubmit, reset } = useForm();
     const handle_update_pic = async(data) => {
        setLoading(true);
        try{
             const formData = new FormData();
             formData.append("profile_picture", data.profile_picture[0]);
             await axios.put(`api/update-admin-avatar/${id}`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            setLoading((prevalue) => prevalue = false );
            reset();
  
        }
        catch(e){
            if(e.response){
               const errorData = e.response.data;
               setError(errorData.errors);
               setErrormsg(errorData.message);
               setLoading((prevalue) => prevalue = false);
               reset();
            }
        }
          
     }
      return(
          <>
             <div className="d-flex flex-row align-items-center justify-content-between mt-3">
        <h6 className="fw-bold text-white">Change Profile Picture</h6>
        <div>
        <Link className="link" to="/profile">
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
            <div className="card border-none shadow-sm w-75 px-3 rounded-4 py-2 theme-color text-white">
              {
                errorMsg && <div className="alert alert-danger">
                  {
                    errorMsg
                  }
                </div>
              }
              <form onSubmit={handleSubmit(handle_update_pic)}>
              <h1 className="fs-5 text-center my-2 fw-bold">Upadate Profile Pic</h1>
              <div className="my-2">
                <p className="fs-6 my-0">Profile Picture</p>
                <input 
                type="file" 
                className={error.profile_picture ? "form-control border-danger" : "form-control"}
                name="profile_picture"
                {...register("profile_picture")}
                />
              </div>
              <button className="w-100 btn btn-success my-2">
                {
                  loading ? (
                    <Spinnnersingle />
                  ) : (
                     <>Change Profile Pic</>
                  )
                }
              </button>
              </form>
            </div>
          </div>
        </div>
       </div>
          </>
      )
}
export default Updateprofilepic