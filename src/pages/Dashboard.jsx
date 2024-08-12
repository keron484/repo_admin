import {Icon} from '@iconify-icon/react'
import { useState, useEffect } from "react";
import axios from '../api/axios';
import { FormatDate, Reduce_array_size } from "../Utils/Functions";
import Linechart from "../components/Linechart";
import Spinnersmall from '../components/Spinners';
function Dashboard(){
  const [loading, setLoading] = useState({ applications: true, messages: true, admin: true, petcategories: true });
  const [error, setError] = useState({ applications: null, messages: null, admin: null, petcategories: null });
  const [data, setData] = useState({ petcategories: [], applications: [], messages: [], admin: [] });
  useEffect(() => {
    async function fetchData() {
      try {
        const responses = await Promise.all([
          axios.get('api/get-petcategory'),
          axios.get('api/getall-messages'),
          axios.get('api/admins'),
          axios.get('api/applications')
        ]);
  
        const { data: pakages } = responses[0];
        const { data: messages } = responses[1];
        const { data: adminData } = responses[2];
        const { data: applications } = responses[3];
        setData({ petcategories: pakages, messages: messages, admin: adminData, applications: applications });
      } catch (error) {
        setError({ ...error, message: error.message });
      } finally {
        setLoading({ ...loading, done: true });
      }
    }
    fetchData();
  }, []);
  return(
    <>
  {
    loading.done ? 
    <>
       <div className="d-flex flex-row align-items-center mt-3 w-100  pb-1 mb-1">
       <div className="icon-badge d-flex flex-row align-items-center justify-content-center">
          <Icon icon="ic:round-dashboard"  className="mx-2 fs-4 c-pet" />
          </div>
        <div className="d-block text-white">
        <h1 className="fw-bolder my-0 fs-5">Dashboard</h1>
        <p className="my-0">Welcome Back</p>
        </div>
       </div>
       <hr />
        <div className="row">
          <div className="col-lg-6 flex-column align-items-center">
            <div className="row">
              <div className="col-lg-6 my-1">
                <div className="card border-none shadow-sm px-2 py-2 theme-color">
                  <div className="d-flex flex-row align-items-center">
                    <div className="card logo d-flex flex-row align-items-center justify-content-center border-none">
                    <Icon icon="bxs:category" className="fs-4 c-pet"/>
                    </div>
                    <div className="d-block mx-2 text-white">
                      <h1 className="fs-5 fw-bolder my-0">{data.petcategories.petcategories.length > 0 ? data.petcategories.petcategories.length : 0}</h1>
                      <p className="my-0 fs-12">Pet Category</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-1">
                <div className="card border-none shadow-sm px-2 py-2 theme-color">
                <div className="d-flex flex-row align-items-center">
                    <div className="card logo d-flex flex-row align-items-center justify-content-center border-none">
                    <Icon icon="material-symbols:nest-doorbell-visitor-outline-rounded" className="fs-3 c-pet"/>
                    </div>
                    <div className="d-block mx-2 text-white">
                      <h1 className="fs-5 fw-bolder my-0">3.34K</h1>
                      <p className="my-0 fs-12">Page Visits</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-1">
                <div className="card border-none shadow-sm px-2 py-2 theme-color">
                <div className="d-flex flex-row align-items-center">
                    <div className="card logo d-flex flex-row align-items-center justify-content-center border-none">
                    <Icon icon="mdi:application-edit"  className="fs-3 c-pet"/>
                    </div>
                    <div className="d-block mx-2 text-white">
                      <h1 className="fs-5 fw-bolder my-0">{data.applications.applications.length > 0 ? data.applications.applications.length : 0}</h1>
                      <p className="my-0 fs-12">Application</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 my-1">
                <div className="card border-none shadow-sm px-2 py-2 theme-color">
                <div className="d-flex flex-row align-items-center">
                    <div className="card logo d-flex flex-row align-items-center justify-content-center border-none">
                    <Icon icon="wpf:message" className="fs-4 c-pet"/>
                    </div>
                    <div className="d-block mx-2 text-white">
                      <h1 className="fs-5 fw-bolder my-0">{data.messages.messages.length > 0 ? data.messages.messages.length : 0}</h1>
                      <p className="my-0 fs-12">messages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card w-100 border-none shadow-sm px-3 py-2 rounded-4 my-3 theme-color text-white table-responsive small">
             <div className="d-flex flex-row align-items-center my-3 c-green">
              <Icon icon="mdi:application-edit"   className="fs-4 c-pet"/>
               <h1 className="fs-6 fw-bold my-0 mx-2 c-pet">Application</h1>
              </div>
              <table className="table table-dark">
                <thead></thead>
                <tbody>
              {
                 data.applications.applications.length > 0 ? Reduce_array_size(data.applications.applications, 0, 5).map((items) => (
                  <tr key={items.id}>
                  <td>{items.user.name}</td>
                  <td>{Number(items.pet.price).toFixed(0)}$</td>
                  <td>{items.pet.breed}</td>
                  <td>{FormatDate(items.created_at)}</td>
                </tr>
                 )) : 
                 (
                  <div className="alert alert-warning">
                    Opps no pet category has been added
                  </div>
                 )
              }
              </tbody>
                 </table>
             </div>
            <div className="card w-100 rounded-4 border-none shadow-sm px-4 py-2 mt-4 theme-color text-white pb-4">
              <div className="d-flex flex-row align-items-center my-2 c-green">
              <Icon icon="mdi:worker" className="fs-4 c-pet"/>
               <h1 className="fs-6 fw-bold my-0 mx-2 c-pet">Admins</h1>
              </div>
              {
                data.admin.admin_user.length > 0 ? data.admin.admin_user.map((items) => (
                     <div className="d-flex flex-row justify-content-between align-items-center my-2">
                     <div className="d-flex flex-row align-items-center gap-1">
                        <div className="logo rounded-circle">
                          <img src="/image/image-one.jpg" alt="logo" className="profile-img"/>
                        </div>
                        <div className="mx-2 d-block">
                          <p className="fs-6 fw-bolder my-0">{items.username}</p>
                          <p className="fs-12 my-0">{items.email}</p>
                        </div>
                      </div> 
                      <div>
                      <Icon icon="clarity:disconnected-line"  className="fs-3 text-warning"/>
                      </div>   
                    </div>
                )) : (
                  <div className="alert alert-warning">
                    An admin has'nt been added yet
                  </div>
                )
              }
            </div>
          </div>
          <div className="col-lg-6">
          <div className="card w-100 border-none shadow-sm px-2 py-2 my-2 rounded-4 theme-color text-white">
                <p className="my-0 mx-3 fs-12 fw-normal c-pet">Page Visits</p>
               <h1 className="fs-4 mx-3 fw-bold c-pet">330.45k</h1>
                {
                  <Linechart />
                }
             </div>
             <div className="card w-100 border-none shadow-sm px-3 py-2 rounded-4 my-3 theme-color text-white table-responsive small">
             <div className="d-flex flex-row align-items-center my-3 c-green">
              <Icon icon="bxs:category" className="fs-4 c-pet"/>
               <h1 className="fs-6 fw-bold my-0 mx-2 c-pet">Pet Category</h1>
              </div>
              <table className="table table-dark">
                <thead></thead>
                <tbody>
              {
                 data.petcategories.petcategories.length > 0 ? Reduce_array_size(data.petcategories.petcategories, 0, 5).map((items) => (
                  <tr key={items.id}>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{FormatDate(items.created_at)}</td>
                </tr>
                 )) : 
                 (
                  <div className="alert alert-warning">
                    Opps no pet category has been added
                  </div>
                 )
              }
              </tbody>
                 </table>
             </div>
          </div>
        </div>
    </> 
     : 
     <Spinnersmall />
    
    }
      </>
  )
}
export default Dashboard;