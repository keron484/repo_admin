import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
function Addcategory() {
  const [errors, setErrors] = useState([]);
  const { register, reset, handleSubmit } = useForm();
 const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/create-category", data);
      toast.success(response.data.message);
      navigate('/pet-category');
      reset();
    } catch (e) {
      if (e.response) {
        const errorData = e.response.data;
        setErrors(errorData.errors);
        toast.error(errorData.message);
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
                <button className="w-100 btn btn-success mt-3 mb-2">
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
