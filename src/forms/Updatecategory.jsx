import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Spinnnersingle } from "../components/Spinners";
import axios from "../api/axios";
function Updatecategory() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(null);
  const { id } = useParams();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.put(`api/update-petcategory/${id}`, data);
      reset();
      navigate("/pet-category");
      setLoading((prevalue) => prevalue = false);
    } catch (error) {
      if (error.response) {
        const errorData = error.response.data;
        setLoading((prevalue) => prevalue = false);
        setErrorMessage("An error occured while updating product");
        setError(errorData.error);
      }
    }
  };
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-between mt-3 w-100 ">
        <h5 className="fw-bold text-white">Update Pet Category</h5>
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
            <form action="" className="w-75" onSubmit={handleSubmit(onSubmit)}>
              <div className="card border-none shadow-sm w-100 px-3 rounded-4 py-2 theme-color text-white">
                <h1 className="fs-5 text-center my-2 fw-bold">
                  Update Pet Category
                </h1>
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                <div className="my-2">
                  <p className="fs-6 my-0">Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter category Name"
                    name="name"
                    {...register("name")}
                  />
                </div>
                {error.name && (
                  <div className="alert alert-danger">{error.name[0]}</div>
                )}
                <button
                  className={
                    loading
                      ? "w-100 btn btn-success disabled"
                      : "w-100 btn btn-success"
                  }
                  type="submit"
                >
                  {loading ? (
                    <>
                      <Spinnnersingle  color="text-white" />
                    </>
                  ) : (
                    <>Update Pet Category</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Updatecategory;
