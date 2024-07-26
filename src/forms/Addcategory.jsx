import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
function Addcategory() {
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrormessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/create-category", data);
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
        <h1 className="fs-5 fw-bold text-white">Add Category</h1>
        <div>
          <Link className="link" to="/pet-category">
            <button className="fs-12 btn btn-success">Back</button>
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
                  Create Category
                </h1>
                <div className="my-3">
                  <p className="fs-6 my-0">Category Name</p>
                  <input
                    type="text"
                    className={
                      errors.name
                        ? "form-control border-danger"
                        : "form-control"
                    }
                    name="name"
                    placeholder="Enter category Name"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <div className="text-danger">{errors.name[0]}</div>
                )}
                <button className="w-100 btn btn-success mt-5 mb-2">
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Addcategory;
