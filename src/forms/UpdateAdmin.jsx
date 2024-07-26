import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinnnersingle } from "../components/Spinners";
function UpdateAdmin() {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [ errorMsg, setErrormsg ] = useState(null);
  const [ errors, setErrors ] = useState([]);
  const [ loading, setLoading ] = useState(null);
  const navigate = useNavigate();
  const handle_update = async (data) => {
    setLoading(true);
     try{
          await axios.put(`api/update-admin-profile/${id}`, data);
          setLoading((prevalue) => prevalue = false);
          navigate('/admin');
     }
     catch(e){
        if(e.response){
           const errorData = e.response.data;
           setErrormsg("An error occured while updating Admin");
           setErrors(errorData.errors);
           setLoading((prevalue) => prevalue = false);
        }
     }
  }
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-between mt-3">
        <h5 className="fw-bold text-white">Upadate Admin</h5>
        <div>
          <Link className="link" to="/admin">
            <button className="fs-12 btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-3">
              <div className="card border-none theme-color text-white shadow-sm w-75 px-3 rounded-4 py-2">
            <form action="" className="w-100" onSubmit={handleSubmit(handle_update)}>
                <h1 className="fs-5 text-center my-2 fw-bold">Add Products</h1>
                {errorMsg && (
                  <div className="alert alert-danger">{errorMsg}</div>
                )}
                <div className="my-2">
                  <p className="fs-6 my-0">Username</p>
                  <input
                    type="text"
                    className={errors.name ? "form-control border-danger" : "form-control"}
                    name="name"
                    placeholder="Enter Your Username "
                    {...register("name")}
                  />
                </div>
                {errors.username && (
                  <div className="text-danger">{errors.username[0]}</div>
                )}
                <div className="my-2">
                  <p className="fs-6 my-0">Email</p>
                  <input
                    type="email"
                    className={errors.email ? "form-control border-danger" : "form-control"}
                    name="email"
                    placeholder="Enter Your Email"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <div className="text-danger">{errors.email[0]}</div>
                )}
                <button className="w-100 btn btn-success my-2" type="submit">
                  {
                    loading ? <Spinnnersingle color="text-white" /> : <>Update Admin</>
                  }
                </button>
            </form>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpdateAdmin;
