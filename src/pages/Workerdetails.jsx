import {  Link, useNavigate, useParams } from "react-router-dom";
import axios from '../api/axios';
import { useState, useEffect } from "react";
import { FormatDate, filter_by_id } from "../Utils/Functions";
function Workerdetails(){
  const [ loading, setLoading ] = useState(true);
  const [ workers, setWorker ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ deleteError, setDeleteerror ] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
      const fetch_worker = async () => {
            try{
               const response = await axios.get('api/users');
               setWorker(filter_by_id(response.data.users, id));
               setLoading(false)
            }
            catch{
               setError("An error occured while fetching worker");
               setLoading(false);
            }
      }
      fetch_worker();
  });

const handle_delete = async (id) => {
     try{
          await axios.delete(`api/delete-user/${id}`);
          navigate('/users');
     }
     catch{
         setDeleteerror("An Error occured while deleting user");
     }
}
    return(
        <>
      <div className="d-flex flex-row align-items-center justify-content-between mt-3">
        <h1 className="fs-5 fw-bold my-2 text-white">Worker Details</h1>
        <div>
            <Link className="link" to="/worker">
            <button className="btn btn-primary fs-12">Back</button>
            </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        {
          deleteError && <div className="alert alert-danger">
            {
              deleteError
            }
          </div>
        }
    <div className="col-lg-5">
      {loading ? (
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : error ? (
              <div className="alert alert-danger">
                {error}
              </div>
             ) : workers.length > 0 ? (
                <div className="border-none card rounded-4 theme-color text-white p-2">
    
                      {
                        workers.map((items) => {
                          return(
                            <>
                             <div className="d-flex flex-row align-items-center justify-content-center" key={items.id}>

                               </div>
                              <div className="d-flex flex-row align-items-center justify-content-between my-2">
                               <p className="my-0">Usename</p>
                               <p className="my-0">{items.name}</p>
                              </div>
                              <div className="d-flex flex-row align-items-center justify-content-between my-2">
                              <p className="my-0">Email</p>
                              <p className="my-0">{items.email}</p>
                              </div>
                              <div className="d-flex flex-row align-items-center justify-content-between my-2">
                              <p className="my-0">Created At</p>
                              <p className="my-0">{FormatDate(items.created_at)}</p>
                              </div>
                              <div className="d-flex flex-row align-items-center justify-content-between my-2">
                              <p className="my-0">Updated At</p>
                              <p className="my-0">{FormatDate(items.updated_at)}</p>
                              </div>

                              <div className="my-2"> 
                              <div className="d-flex flex-row align-items-center gap-1 w-100">
                              <Link className="w-50" to={`/update-worker/${items.id}`}>
                              <button className="btn btn-warning fs-12 w-100">Update</button>
                              </Link>
                              <button className="btn btn-danger fs-12 w-50"
                               onClick={() => {
                                 handle_delete(items.id);
                               }}
                              >Delete</button>
                              </div>
                             </div>
                            </>
                           )
                        })
                      }
                 </div>  
             ) : (
               <div className="alert alert-warning">
                <p className="fs-6s">Could'nt Find User</p>
               </div>
             )
            }
            </div>

            <div className="col-lg-7">
              <div className="card theme-color text-white p-2">
                <h1 className="text-white text-center fs-5">My emails</h1>
              </div>
            </div>
        </div>
        </>
    )
}
export default Workerdetails;
