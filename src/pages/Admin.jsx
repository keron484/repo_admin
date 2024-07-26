import { Link } from "react-router-dom";
import {Icon} from '@iconify-icon/react';
import { useEffect, useState } from "react";
import axios from '../api/axios';
import { FormatDate } from "../Utils/Functions";
function Admin() {
 const  [ admin, setAdmin ] = useState([]);
 const [ loading, setLoading ] = useState(true);
 const [ error, setError ] = useState(null);
 const [ deleteError, setDeleteerror ] = useState(null);
 useEffect(() => {
   const fetch_admins = async () => {
      try{
        const response = await axios.get('api/admins');
        setAdmin(response.data.admin_user);
        setLoading(false);
      }
      catch{
         setError("An error occured while fetching products");
         setLoading(false);
      }
   }

   fetch_admins();
 }, [])
 const handle_delete = async (id) => {
      try{
          await axios.delete(`api/delete-admin/${id}`);
          setAdmin(admin.filter((items) => items.id !== id));
      }
      catch{
          setDeleteerror("An error occured while deleting admin");
      }
 }
return (
  <>
          <div className="d-flex flex-row align-items-center justify-content-between w-100">
            <div className="d-flex flex-row align-items-center mt-3 pb-1">
            <div className="icon-badge d-flex flex-row align-items-center justify-content-center">
            <Icon icon="ri:admin-fill" className="mx-2 fs-4 c-pet"/>
              </div>
              <h1 className="fw-bolder fs-5 text-white">Manage Admin</h1>
            </div>
            <div>
              <Link className="link" to="/add-admin">
                <button className="btn btn-success fs-12">Add Admin</button>
              </Link>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-row align-items-center justify-content-between mt-3">
            {/* Display total admins count */}
            <div className="d-block text-white">
              <p className="fs-12 my-0">Total Admins</p>
              <h1 className="fs-3 fw-bolder">{admin.length}</h1>
            </div>
          </div>
          <div className="row">
            {
              deleteError && <div className="alert alert-danger">
                {
                  deleteError
                }
              </div>
            }
            <div className="col-lg-12">
              <div className="card border-none shadow rounded-4 px-4 py-3 mt-3 theme-color text-white table-responsive small">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row align-items-center my-1">
                    <Icon icon="ri:admin-fill" className="fs-4 c-pet" />
                    <h1 className="fs-6 fw-bold my-0 mx-2 c-pet">Admin List</h1>
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
             ) : admin.length > 0 ? (
                    <table>
                      <thead></thead>
                      <tbody>
                      {
                        admin.map((items) => {
                           return(
                            <>
                             <tr key={items.id}>
                             <td>{items.id}</td>
                             <td>{items.username}</td>
                             <td>{items.email}</td>
                             <td>{FormatDate(items.created_at)}</td>
                             <td>
                             <div className="d-flex flex-row">
                             <Link className="link">
                             <span><Icon icon="mdi:trash" className="fs-4 text-danger"
                              onClick={() => {
                                  handle_delete(items.id)
                              }}
                             /></span>
                             </Link>
                             <Link className="link" to={`/update-admin/${items.id}`}>
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
                <p className="fs-6">Could'nt Find Any Admins try click on the Add Admin button to add admin</p>
               </div>
             )
            }
      
              </div>
            </div>
          </div>
  </>
);
}
export default Admin;