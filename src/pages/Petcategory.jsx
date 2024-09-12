import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import { filter_element_by_id } from "../Utils/Functions";
import { toast }  from "react-hot-toast";
function Petcategory(){
    const [ Data, setData ] = useState([]);
    const [ deleteError, setDeleteerror ] = useState(null); 
    const [ fetcherror, setFetcherror ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
         const handle_fetch = async() => {
             try{
                const response = await axios.get('api/get-petcategory');
                setData(response.data.petcategories);
                setLoading(false);
             }
             catch(e){
                 setFetcherror("An error occured while fetching data check internet conection");
                 setLoading(false);
             }
         }
         handle_fetch();
    }, [])

    const handle_delete = async (id) => {
         try{
            await axios.delete(`api/delete-petcategory/${id}`);
            setData(filter_element_by_id(Data, id));
            toast.success("Pet category deleted succesully");

         }
         catch(e){
             if(e.response){
                const errorData = e.response.data;
                setDeleteerror(errorData.delete);
             }
             toast.error("Opps something went wrong!!")
         }
    }
    return(
        <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  mb-3 ">
    <div className="d-flex flex-row align-items-center">
      <span className="icon-badge"> <Icon icon="bxs:category"  className=" fs-4 mt-2 c-pet"/></span>
      <h1 className="fs-6 fw-bold text-white">Manage Pet Category</h1>
    </div>
    <div className="d-flex mb-1">
    <Link className="link" to='/add-category'>
      <button className="btn btn-success fs-12">
        Add Category
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
               <div className="table-scrollable">
               <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row align-items-center my-2">
                    <Icon icon="bxs:category"  className="fs-4 c-pet" />
                    <h1 className="fs-6 fw-bold my-0 mx-2 c-pet">Pet Categories</h1>
                  </div>
                </div>
                {loading ? (
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : fetcherror ? (
              <div className="alert alert-danger">
                {fetcherror}
              </div>
             ) : Data.length > 0 ? (
                    <table className="table table-dark">
                      <thead></thead>
                      <tbody>
                      {
                        Data.map((items) => {
                           return(
                            <>
                             <tr key={items.id}>
                             <td>{items.id}</td>
                             <td>{items.name}</td>
                             
                             <td>
                             <div className="d-flex flex-row gap-3">
                               <div>
                               <Link className="link">
                            <Icon icon="mdi:trash" className="fs-4 text-danger" 
                              onClick={ () => {
                                 handle_delete(items.id);
                              }}
                             />
                             </Link>
                               </div>
                               <div>
                             <Link className="link" to={`/update-category/${items.id}`}>
                             <Icon icon="material-symbols:update" className="fs-4 text-warning"/>
                             </Link>
                               </div>
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
                <p className="fs-6 fw-bold">Opps Looks like you haven't added any pets</p>
               </div>
             )
            } 
                </div> 
              </div>
            </div>
          </div>     
        </>
    )
}
export default Petcategory;