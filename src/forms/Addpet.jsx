import { useState, useEffect } from "react";
import { Icon } from "@iconify-icon/react";
import { useForm } from "react-hook-form";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Addpet() {
  const { register, handleSubmit, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();
  const handle_create = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("species", data.species);
      formData.append("breed", data.breed);
      formData.append("age", data.age);
      formData.append("weight", data.weight);
      formData.append("sex", data.sex);
      formData.append("description", data.description);
      formData.append("adoption_status", data.adoption_status);
      formData.append("petcategory_id", data.petcategory_id);
      formData.append("price", data.price);
      formData.append("pet_image", data.pet_image[0]);
      const response = await axios.post("api/create-pet", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setErrorMessage(response.data.message);
      setLoading(false);
      navigate("/pet");
      reset();
    } catch (e) {
      if (e.response) {
        const errorData = e.response.data;
        setErrors(errorData.errors);
        console.table(errors);
        setErrorMessage(errorData.message);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    const fetchProductCategory = async () => {
      try {
        const response = await axios.get("api/get-petcategory");
        setCategory(response.data.petcategories);
      } catch (error) {
        setError("An error occurred while fetching Products.");
      }
    };
    fetchProductCategory();
  }, []);
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-between mt-3">
        <div className="d-flex flex-row align-items-center">
          <div className="icon-badge d-flex flex-row align-items-center justify-content-center">
            <Icon icon="fluent-mdl2:product-variant" className="fs-4 c-pet" />
          </div>
          <h1 className="fs-5 fw-bold text-white">Add Pet</h1>
        </div>
        <div>
          <Link className="link" to="/pet">
            <button className="fs-12 btn btn-success">Back</button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-12">
          <form className="w-100" onSubmit={handleSubmit(handle_create)}>
            <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-3">
              <div className="card border-none shadow-sm w-75 px-3 rounded-4 py-2 theme-color text-white">
                {errorMessage && (
                  <div className="alert alert-danger">
                    <p>{errorMessage}</p>
                  </div>
                )}
                <h1 className="fs-5 text-center my-2 fw-bold">Add Pet</h1>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="my-2">
                      <p className="fs-6 my-0">Pet Name</p>
                      <input
                        type="text"
                        className={
                          errors.name
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Pet Name"
                        name="name"
                        {...register("name")}
                      />
                    </div>
                    {errors.name && (
                      <div className="text-danger">{errors.name[0]}</div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">Adoption Price</p>
                      <input
                        type="number"
                        accept="decimal"
                        className={
                          errors.price
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Price"
                        name="price"
                        {...register("price")}
                      />
                    </div>
                    {errors.price && (
                      <div className="text-danger">{errors.price[0]}</div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">Pet Image</p>
                      <input
                        type="file"
                        className={
                          errors.pet_image
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        name="pet_image"
                        {...register("pet_image")}
                      />
                    </div>
                    {errors.pet_image && (
                      <div className="text-danger">{errors.pet_image[0]}</div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">Product Category</p>
                      <select
                        className={
                          errors.petcategory_id
                            ? "form-select border-danger"
                            : "form-select"
                        }
                        aria-label="Default select example"
                        name="petcategory_id"
                        {...register("petcategory_id")}
                      >
                        <option defaultValue={null}>
                          {error ? (
                            <>Something went wrong</>
                          ) : (
                            <>Open to select category</>
                          )}
                        </option>
                        {category.length > 0 ? (
                          category.map((items) => {
                            return (
                              <>
                                <option value={items.id} key={items.id}>
                                  {items.name}
                                </option>
                              </>
                            );
                          })
                        ) : (
                          <option>No option added</option>
                        )}
                      </select>
                    </div>
                    {errors.petcategory_id && (
                      <div className="text-danger">{errors.petcategory_id[0]}</div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">Species</p>
                      <input
                        type="text"
                        className={
                          errors.species
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Pet Species"
                        name="species"
                        {...register("species")}
                      />
                    </div>
                    {errors.species && (
                      <div className="text-danger">{errors.species[0]}</div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">Weight</p>
                      <input
                        type="number"
                        className={
                          errors.weight
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Pet Weight"
                        name="weight"
                        {...register("weight")}
                      />
                    </div>
                    {errors.weight && (
                      <div className="text-danger">{errors.weight[0]}</div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <div className="my-2">
                      <p className="fs-6 my-0">Breed</p>
                      <input
                        type="text"
                        className={
                          errors.breed
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Pet Breed"
                        name="breed"
                        {...register("breed")}
                      />
                    </div>
                    {errors.breed && (
                      <div className="text-danger">{errors.breed[0]}</div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">Age</p>
                      <input
                        type="text"
                        className={
                          errors.age
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Pet Age example 2 weeks"
                        name="age"
                        {...register("age")}
                      />
                    </div>
                    {errors.age && (
                      <div className="text-danger">{errors.age[0]}</div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">sex</p>
                      <input
                        type="text"
                        className={
                          errors.sex
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Pet Age"
                        name="sex"
                        {...register("sex")}
                      />
                    </div>
                    {errors.sex && (
                      <div className="text-danger">{errors.sex[0]}</div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">Adoption status</p>
                      <input
                        type="text"
                        className={
                          errors.adoption_status
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Adoption Status"
                        name="adoption_status"
                        {...register("adoption_status")}
                      />
                    </div>
                    {errors.adoption_status && (
                      <div className="text-danger">
                        {errors.adoption_status[0]}
                      </div>
                    )}
                    <div className="my-2">
                      <p className="fs-6 my-0">Description</p>
                      <textarea
                        type="text"
                        className={
                          errors.description
                            ? "form-control border-danger"
                            : "form-control"
                        }
                        placeholder="Enter Description"
                        name="description"
                        {...register("description")}
                      ></textarea>
                    </div>
                    {errors.description && (
                      <div className="text-danger">{errors.description[0]}</div>
                    )}
                  </div>
                </div>
                <button
                  className={
                    loading
                      ? "w-100 btn btn-success my-2 disabled"
                      : "w-100 btn btn-success my-2"
                  }
                  type="submit"
                >
                  {loading ? (
                    <>
                      <div className="spinner-border text-white" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </>
                  ) : (
                    <>Add Product</>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Addpet;
