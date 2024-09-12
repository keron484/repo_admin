import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Addadmin() {
  const [errors, setErrors] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/create-admin", data);
      toast.success(response.data.message);
      reset();
      navigate("/admin");
    } catch (e) {
      if (e.response) {
        const errorData = e.response.data;
        setErrors(errorData.errors);
        toast.error("Opps an error occured trying to create admin");
      }
    }
  };
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-between mt-3">
        <h1 className="fs-5 fw-bold text-white">Add Admin</h1>
        <div>
          <Link className="link" to="/admin">
            <button className="fs-12 btn btn-success">Back</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-12">
          <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-3">
            <div className="card border-none shadow-sm w-75 px-3 rounded-4 py-2 theme-color text-white">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="fs-5 text-center my-2 fw-bold text-white">
                  Add Admin
                </h1>
                <div className="my-2">
                  <p className="fs-6 my-0">Username</p>
                  <input
                    type="text"
                    className={
                      errors.username
                        ? "form-control border-danger"
                        : "form-control "
                    }
                    placeholder="Enter username"
                    name="username"
                    {...register("username")}
                  />
                </div>
                {errors.username && (
                  <div className="text-danger">{errors.username[0]}</div>
                )}
                <div className="my-2">
                  <p className="fs-6 my-0">Email</p>
                  <input
                    type="email"
                    className={
                      errors.email
                        ? "form-control border-danger"
                        : "form-control "
                    }
                    placeholder="Enter Email"
                    name="email"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <div className="text-danger">{errors.email[0]}</div>
                )}
                <div className="my-2">
                  <p className="fs-6 my-0">Password</p>
                  <input
                    type="password"
                    className={
                      errors.password
                        ? "form-control border-danger"
                        : "form-control "
                    }
                    placeholder="Enter Password"
                    name="password"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <div className="text-danger">{errors.password[0]}</div>
                )}
                <div className="my-2">
                  <p className="fs-6 my-0">Confirm Password</p>
                  <input
                    type="password"
                    className={
                      errors.password
                        ? "form-control border-danger"
                        : "form-control "
                    }
                    placeholder="Enter Password"
                    name="password_confirmation"
                    {...register("password_confirmation")}
                  />
                </div>
                {errors.password && (
                  <div className="text-danger">{errors.password[0]}</div>
                )}
                <button
                  className="w-100 btn btn-success mt-3 mb-4"
                  type="submit"
                >
                  Add Admin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Addadmin;
