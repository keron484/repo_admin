import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
function Adduser() {
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrormessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/create-user", data);
      setSuccessMessage(response.data.message);
      reset();
    } catch (e) {
      if (e.response) {
        const errorData = e.response.data;
        setErrors(errorData.errors);
        setErrormessage(errorData.message);
      }
    }
  };
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-between mt-3">
        <h1 className="fs-5 fw-bold text-white">Add Worker</h1>
        <div>
          <Link className="link" to="/worker">
            <button className="fs-12 btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-12">
          <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-3">
            <div className="card border-none shadow-sm w-75 px-3 rounded-4 py-2 theme-color text-white">
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="fs-5 text-center my-2 fw-bold text-white">
                  Create Worker
                </h1>
                <div className="my-3">
                  <p className="fs-6 my-0">Username</p>
                  <input
                    type="text"
                    className={
                      errors.name
                        ? "form-control border-danger"
                        : "form-control"
                    }
                    name="name"
                    placeholder="Enter username"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <div className="text-danger">{errors.name[0]}</div>
                )}
                <div className="my-3">
                  <p className="fs-6 my-0">email</p>
                  <input
                    type="email"
                    className={
                      errors.email
                        ? "form-control border-danger"
                        : "form-control"
                    }
                    placeholder="Enter email"
                    name="email"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <div className="text-danger">{errors.email[0]}</div>
                )}
                <div className="my-3">
                  <p className="fs-6 my-0">Password</p>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <div className="text-danger">{errors.password[0]}</div>
                )}
                <div className="my-3">
                  <p className="my-0 fs-6">Password Confirmation</p>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password Confirmation"
                    name="password_confirmation"
                    {...register("password_confirmation")}
                  />
                </div>
                {errors.password_confrimation && (
                  <div className="text-danger">
                    {errors.password_confrimation[0]}
                  </div>
                )}
                <button className="w-100 btn btn-primary mt-5 mb-2">
                  Add Worker
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Adduser;
