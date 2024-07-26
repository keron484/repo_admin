import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import { FormatDate } from "../Utils/Functions";
function Email(){
  const [ email, setEmail ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ deleteError, setDeleteerror ] = useState(null);
  useEffect(() => {
     const fetch_emails = async () => {
         try{
            const response = await axios.get('api/getallmails');
            setEmail(response.data.emails);
            setLoading(false);
         }
         catch{
           setError("An error occured while fetching mails check internet connection");
           setLoading(false)
         }
     }
     fetch_emails();
  }, [])

  const handle_delete = async (id) => {
      try{
         await axios.delete(`api/delete-email/${id}`);
         setEmail(email.filter((items) => items.id !== id));
      }
      catch{
         setDeleteerror("An error occured while deleting the email");
      }
  }
    return(
        <>
   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  mb-3 ">
    <div className="d-flex flex-row align-items-center">
      <span className="icon-badge"> <Icon icon="dashicons:email-alt" className=" fs-4 mt-2 c-pet"/></span>
      <h1 className="fs-6 fw-bold text-white">Manage Mails</h1>
    </div>
    <div className="d-flex mb-1">
    <Link className="link" to='/send-mail'>
      <button className="btn btn-success fs-12">
        Send Mail
      </button>
    </Link>
     </div>
    </div>
   <hr /> 
   <div className="row">
            <div className="col-lg-12">
              {
                deleteError && <div className="alert alert-danger">
                  {
                    deleteError
                  }
                </div>
              }
              <div className="card border-none shadow rounded-4 px-3 py-3 mt-3  theme-color text-white table-responsive small">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row align-items-center my-2">
                    <Icon icon="dashicons:email-alt" className="fs-4 c-pet" />
                    <h1 className="fs-6 fw-bold my-0 mx-2 c-pet">Mails Sent</h1>
                  </div>
                </div>
                {loading ? (
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : error ? (
              <div className="alert alert-danger">
                {error}
              </div>
             ) : email.length > 0 ? (
                    <table className="table table-dark">
                      <thead></thead>
                      <tbody>
                      {
                        email.map((items) => {
                           return(
                            <>
                             <tr key={items.id}>
                             <td>{items.id}</td>
                             <td>{items.title}</td>
                             <td>{items.email}</td>
                             <td>{items.name}</td>
                             <td>{FormatDate(items.created_at)}</td>
                             <td>
                             <div className="d-flex">
                             <Link className="link">
                             <span><Icon icon="mdi:trash" className="fs-4 text-danger" 
                              onClick={ () => {
                                 handle_delete(items.id);
                              }}
                             /></span>
                             </Link>
                             <Link className="link" to={`/email-details/${items.id}`}>
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
               <div className="alert alert-warning py-1">
                <p className="fs-12 mt-1">Could'nt Find Any User try click on the Add User button to create a pakage</p>
               </div>
             )
            }  
              </div>
            </div>
          </div>     
        </>
    )
}
export default Email;