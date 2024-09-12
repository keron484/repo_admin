import { Icon } from "@iconify-icon/react";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import { FormatDate } from "../Utils/Functions";
function Worker(){
  const [ workers, setWorkers ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);
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
           <p className="fs-12 my-0">Total Registered Users</p>
           <h1 className="fs-2 fw-bolder">{workers.length}</h1>
        </div>
      </div>
         <div className="row">
          <div className="col-lg-12">
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
                            </tr>
                            </>
                           )
                        })
                      }
                    </tbody>
                  </table>   
             ) : (
               <div className="alert alert-warning">
                <p className="fs-12">No user Has created account on the website</p>
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