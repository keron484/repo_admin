import axios from "../api/axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormatDate, filter_by_id } from "../Utils/Functions";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
import { toast  } from 'react-hot-toast';
function MessageDetails(){
  const [ deleteError, setDeleteerror ] = useState(null);
  const [ fetcherror, setFetcherror ] = useState(null);
  const [ Data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
         const fetch_data = async () => {
            try{
              const response = await axios.get('api/getall-messages');
              setData(filter_by_id(response.data.messages, id));
              setLoading(false)
            }
            catch(e){
                if(e.response){
                    const errorData = e.response.data;
                    setFetcherror(errorData.message);
                    setLoading(false);
                }
            }
         }
         fetch_data();
    })
   const handle_delete = async (id) => {
       try{
          await axios.delete(`api/delete-message/${id}`);
          navigate('/messages');
          toast.success("Message deleted succesfully");
       }
       catch(e){
          if(e.response){
              const errorData = e.response.data;
              setDeleteerror(errorData.message);
              toast.error("Something went wrong !!");
          }
       }
   }
    return(
        <>
   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  mb-3 ">
    <div className="d-flex flex-row align-items-center">
      <span className="icon-badge"> <Icon icon="streamline:send-email" className=" fs-4 mt-2 c-message"/></span>
      <h1 className="fs-6 fw-bold text-white">Message Details</h1>
    </div>
    <div className="d-flex mb-1">
    <Link className="link" to='/messages'>
      <button className="btn btn-success fs-12">
        Back
      </button>
    </Link>
     </div>
    </div>
     <hr />
     <div className="row">
        {
            deleteError && <div className="alert alert danger">
                {
                    deleteError
                }
            </div>
        }
      <div className="col-lg-12">
        <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-2">
          {
             loading ? (
             <div className="spinner-border text-primary" role="status">
             <span className="visually-hidden">Loading...</span>
           </div>
            ) : fetcherror ? (
            <div className="alert alert-danger">
             {fetcherror}
           </div>
          ) : Data.length > 0 ?   (
               <>
                {
                    Data.map((items) => {
                        return(
                            <>
                    <div className="card border-none shadow w-50 px-3 rounded-4 py-2 theme-color text-white">
                    <h1 className="fs-5 text-center my-2 fw-bold">Message Details</h1> 
                      <div className="my-2">
                    <p className="my-0">Email Of Reciepient</p>     
                      <p>{items.email}</p>     
                     </div>
                     <div className="my-2">
                        <p className="my-0">Date Sent</p>     
                      <p>{FormatDate(items.created_at)}</p>     
                    </div>
                      <div className="my-2">
                      <p>Message</p>     
                      <p>{items.message}</p>     
                      </div>  
                      <div className="d-flex px-2 gap-1">
                      <button className="fs-12 btn btn-danger w-50" 
                      onClick={() => {
                         handle_delete(items.id)  
                      }} >
                        Delete Message
                        </button> 
                          <Link to={`/reply-message/${items.email}`} className="w-50 link">
                          <button className="fs-12 btn btn-success w-100" >
                           Reply
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
                 <p className="fs-6 fw-bold"> No message was found sorry </p>
                </div>
              )
          }
        </div>
      </div>
     </div>
        </>
    )
}
export default MessageDetails;