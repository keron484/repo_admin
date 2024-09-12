import axios from "../api/axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { filter_by_id } from "../Utils/Functions";
import { Icon } from "@iconify-icon/react";
function Petdetails(){
    const [ loading, setLoading ] = useState(true);
    const [ pakage, setPakage ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ deleteError, setDeleteerror ] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetch_pets = async () => {
            try{
              const response = await axios.get('api/pets');
              setPakage(filter_by_id(response.data.pets, id));
              setLoading(false);
            }
            catch{
               setError("An error occured while fetching Pakages");
               setLoading(false);
            }
        }
        fetch_pets();
    }, [])
    const handle_delete = async (id) => {
         try{
           await axios.delete(`api/delete-pet/${id}`);
           navigate('/pet');
         }
         catch{
           setDeleteerror("An error occured while deleting pet");
         }
    }
    return(
        <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  mb-3 ">
    <div className="d-flex flex-row align-items-center">
      <span className="icon-badge"> <Icon icon="fluent-mdl2:product-variant" className=" fs-4 mt-2 c-pet"/></span>
      <h1 className="fs-6 fw-bold text-white">Pet Details</h1>
    </div>
    <div className="d-flex mb-1">
    <Link className="link" to='/pet'>
      <button className="btn btn-success fs-12">
        Back
      </button>
    </Link>
     </div>
    </div>
     <hr />
     <div className="row">
      <div className="col-lg-12">
        {
            deleteError && <div className="alert alert danger">
                {
                    deleteError 
                }
                <p>hello</p>
            </div>
        }
        <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-2">
          {
             loading ? (
             <div className="spinner-border text-primary" role="status">
             <span className="visually-hidden">Loading...</span>
           </div>
            ) : error ? (
            <div className="alert alert-danger">
             {error}
           </div>
          ) : pakage.length > 0 ?   (
               <>
                {
                    pakage.map((items) => {
                        return(
                            <>
                    <div className="card border-none shadow w-75 px-3 rounded-4 py-2 theme-color text-white" key={items.id}>
                    <h1 className="fs-5 text-center my-2 fw-bold">Pet Details</h1> 
                    <p className="text-end fs-12 my-3">#{items.id}</p>
                    <div className="my-2 d-flex justify-content-between">
                    <p className="my-0">Pet Name</p>     
                      <p>{items.name}</p>     
                      </div>
                      <div className="my-2 d-flex justify-content-between">
                    <p className="my-0">Species</p>     
                      <p>{items.species}</p>     
                      </div>
                      <div className="my-2 d-flex justify-content-between">
                    <p className="my-0">Breed</p>     
                      <p>{items.breed}</p>     
                      </div>
                      <div className="my-2 d-flex justify-content-between">
                    <p className="my-0">Adoption Status</p>     
                      <p>{items.adoption_status}</p>     
                      </div>
                      <div className="my-2 d-flex justify-content-between">
                    <p className="my-0">Weight</p>     
                      <p>{items.weight}</p>     
                      </div>
                      <div className="my-2 d-flex justify-content-between">
                    <p className="my-0">sex</p>     
                      <p>{items.sex}</p>     
                      </div>
                      <div className="my-2 d-block justify-content-between">
                    <p className="my-0">Description</p>     
                      <p>{items.description}</p>     
                      </div>
                      <hr />
                     <div className="my-3 d-flex flex-row gap-1 align-items-center">
                     <button className="fs-12 btn btn-danger w-50" 
                      onClick={() => {
                         handle_delete(items.id)  
                      }} >
                        Delete Pet
                        </button>   
                        <Link className="link w-50" to={`/update-pet/${items.id}`}>
                        <button className="btn btn-primary w-100 fs-12">
                          Update Pet
                        </button>
                        </Link>
                     </div>
                       </div>
                            </>
                        )
                    })
                }
               </>
             ) :  (
                <div className="alert alert-warning">
                 <p className="fs-6 fw-bold"> No pet was found sorry </p>
                </div>
              )
          }
        </div>
      </div>
     </div>
        </>
    )
}
export default Petdetails;