import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import { FormatDate } from "../Utils/Functions";
function Worker(){
  const [ workers, setWorkers ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ deleteError, setDeleteerror ] = useState(null);
  useEffect(() => {
     const fetch_workers = async () => {
        try{
           const response = await axios.get('api/users');
           setWorkers(response.data.users);
           setLoading(false);
        }
        catch{
           setError("An Error occured while fetching workers check internet connection");
           setLoading(false)
        }
     }
     fetch_workers();
  }, [])

  const handle_delete = async (id) => {
      try{
        await axios.delete(`api/delete-user/${id}`);
        setWorkers(workers.filter((items) => items.id !== id));
      }
      catch{
         setDeleteerror("An error occured while deleting user");
      }
  }
    return(
        <>
   <div className="d-flex flex-row align-items-center justify-content-between pb-1 mb-2">
        <div className="d-flex flex-row align-items-center mt-3">
        <div className="icon-badge d-flex flex-row align-items-center justify-content-center">
        <Icon icon="mdi:worker-outline" className="mx-2 fs-4 c-pet"/>
            </div>
          <h1 className="fw-bolder fs-5 text-white">Users</h1>
         </div>
        </div>
        <hr />
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div className="d-block text-white">
           <p className="fs-12 my-0">Total Users</p>
           <h1 className="fs-2 fw-bolder">{workers.length}</h1>
        </div>
        <div className="d-flex flex-row w-50">
        <div className="d-flex flex-row card mx-2 border-none shadow-sm w-75 px-3 align-items-center my-1 py-2 rounded-3 theme-color">
              <div className="logo rounded-5 theme-color-lighter flex-row d-flex align-items-center justify-content-center">
              <Icon icon="hugeicons:wifi-connected-01" className="fs-4 text-success"/>
              </div>
              <div className="d-block mx-2 text-white">
                <p className="fs-12 my-0">Active</p>
                <h1 className="fs-5 fw-bold">0</h1>
              </div>
           </div>
           <div className="d-flex flex-row card mx-2 border-none shadow-sm w-75 px-3 align-items-center my-1 py-2 rounded-3 theme-color">
              <div className="logo rounded-5 theme-color-lighter flex-row d-flex align-items-center justify-content-center">
              <Icon icon="clarity:disconnected-line"  className="fs-4 text-warning"/>
              </div>
              <div className="d-block mx-2 text-white">
                <p className="fs-12 my-0">In Active</p>
                <h1 className="fs-5 fw-bold">0</h1>
              </div>
           </div>
        </div>
      </div>
         <div className="row">
          <div className="col-lg-12">
            {
              deleteError && <div className="alert alert-danger">
                {
                  deleteError
                }
              </div>
            }
            <div className="card border-none shadow rounded-4 px-3 py-3 mt-3 theme-color text-white table-responsive small">
              <div className="table-scrollable">
              <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row align-items-center my-1">
                <Icon icon="mdi:worker-outline"  className="fs-4 c-pet"/>
                 <h1 className="fs-6 fw-bold my-0 mx-2 text-white">User List</h1>
                </div>
              </div>
              <div>
              {loading ? (
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : error ? (
              <div className="alert alert-danger">
                {error}
              </div>
             ) : workers.length > 0 ? (
                    <table className="table  table-dark">
                      <thead></thead>
                      <tbody>
                      {
                        workers.map((items) => {
                           return(
                            <>
                             <tr key={items.id}>
                             <td>{items.id}</td>
                             <td>{items.name}</td>
                             <td>{items.email}</td>
                             <td>{FormatDate(items.created_at)}</td>
                             <td>
                             <div className="d-flex">
                             <span><Icon icon="mdi:trash" className="fs-4 text-danger"
                              onClick={() => {
                                 handle_delete(items.id)
                              }}
                             /></span>
                             <Link className="link" to={`/worker-details/${items.id}`} >
                             <span><Icon icon="solar:pen-2-bold" className="fs-4 text-primary"/></span>
                             </Link>
                             <Link className="link" to={`/update-worker/${items.id}`}>
                             <span><Icon icon="material-symbols:update" className="fs-4 text-warning"/></span>
                             </Link>
                             </div>
                             </td>
                            </tr>
                            </>
                           )
                        })
                      }
                    </tbody>
                  </table>   
             ) : (
               <div className="alert alert-warning">
                <p className="fs-12">Could'nt Find Any User try click on the Add User button to create a worker</p>
               </div>
             )
            }
    
             </div>
              </div>
            </div>
          </div>
         </div>
        </>
    )
}
export default Worker;