import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { filter_by_id } from '../Utils/Functions';
import { FormatDate } from '../Utils/Functions';
function Messages(){
    const [ Data, setData ] = useState([]);
    const [ deleteError, setDeleteerror ] = useState(null); 
    const [ fetcherror, setFetcherror ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
         const fetch_message = async() => {
             try{
                const response = await axios.get('api/getall-messages');
                setData(response.data.messages);
                setLoading(false);
             }
             catch(e){
                 setFetcherror("An error occured while fetching data check internet conection");
                 setLoading(false);
             }
         }
         fetch_message();
    }, [])

    const handle_delete = async (id) => {
         try{
            await axios.delete();
            setData(filter_by_id(Data, id));
         }
         catch(e){
             if(e.response){
                const errorData = e.response.data;
                setDeleteerror(errorData.delete);
             }
         }
    }
     return(
        <>
   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  mb-3 ">
    <div className="d-flex flex-row align-items-center">
      <span className="icon-badge"> <Icon icon="icon-park-solid:message" className=" fs-4 mt-2 c-pet"/></span>
      <h1 className="fs-6 fw-bold text-white">Manage Message</h1>
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
              <div className="card border-none shadow rounded-4 px-4 py-3 mt-3  theme-color text-white">
                <div className="table-scrollable">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row align-items-center my-2">
                    <Icon icon="icon-park-solid:message" className="fs-4 c-pet" />
                    <h1 className="fs-6 fw-bold my-0 mx-2 c-pet">Messages Recieved</h1>
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
                             <td>{items.tracking_number}</td>
                             <td>{items.email}</td>
                             <td>{FormatDate(items.updated_at)}</td>
                             <td>{FormatDate(items.created_at)}</td>
                             <td>
                             <div className="d-flex flex-row">
                             <div>
                             <Link className="link">
                             <span><Icon icon="mdi:trash" className="fs-4 text-danger" 
                              onClick={ () => {
                                 handle_delete(items.id);
                              }}
                             /></span>
                             </Link>
                             </div>
                              <div>
                              <Link className="link" to={`/message-details/${items.id}`}>
                             <span><Icon icon="material-symbols:update" className="fs-4 text-warning"/></span>
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
                <p className="fs-12 fw-bold">Your message box is empty cant find anything</p>
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
export default Messages;