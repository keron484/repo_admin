import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../api/axios";
import toast from "react-hot-toast";
function Replymessage(){
    const [errors, setErrors] = useState([]);
    const { reset, handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const { email } = useParams();
    const onSubmit = async (data) => {
      try {
        const response = await axios.post("api/send-email", data);
        toast.success(response.data.message);
        reset();
        navigate("/email");
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
          <h1 className="fs-5 fw-bold text-white">Reply Message</h1>
          <div>
            <Link className="link" to="/messages">
              <button className="fs-12 btn btn-success">Back</button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-3">
              <div className="card border-none shadow-sm w-75 px-3 rounded-4 py-2 theme-color">
                <form
                  action=""
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-100"
                >
                  <h1 className="fs-5 text-center my-3 fw-bold text-white">
                    Send Email
                  </h1>
                    <div className="my-2">
                      <p className="fs-6 my-0">Email</p>
                      <input
                        type="email"
                        className={
                          errors.email
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        name="email"
                        value={email}
                        placeholder="Enter Email"
                        {...register("email")}
                      />
                    </div>
                    {errors.email && (
                      <div className="text-danger">{errors.email[0]}</div>
                    )}
                  <div className="my-2">
                    <p className="fs-6 my-0">Name</p>
                    <input
                      type="text"
                      placeholder="Enter Reciepient Name"
                      name="name"
                      {...register("name")}
                      className={
                        errors.name
                          ? "form-control border-danger"
                          : "form-control"
                      }
                    />
                  </div>
                  {errors.name && (
                    <div className="text-danger">{errors.name[0]}</div>
                  )}
                  <div className="my-2">
                    <p className="fs-6 my-0">Title</p>
                    <input
                      type="text"
                      className={
                        errors.title
                          ? "form-control border-danger"
                          : "form-control"
                      }
                      name="title"
                      placeholder="Enter Message Title"
                      {...register("title")}
                    />
                  </div>
                  {errors.title && (
                    <div className="text-danger">{errors.title[0]}</div>
                  )}
                  <div className="my-2">
                    <p className="fs-6 my-0">Message</p>
                    <textarea
                      name="text"
                      id=""
                      placeholder="Enter The Message"
                      {...register("text")}
                      className={
                        errors.text
                          ? "form-control border-danger"
                          : "form-control"
                      }
                    ></textarea>
                  </div>
                  {errors.text && (
                    <div className="text-danger">{errors.text}</div>
                  )}
                  <button
                    className="w-100 btn btn-success mt-4 mb-2"
                    type="submit"
                  >
                    Send Mail
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Replymessage;