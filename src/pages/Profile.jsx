import { Icon } from  '@iconify-icon/react';
import { useEffect } from "react";
import useAuthContext from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Spinnersmall from "../components/Spinners";
import { FormatDate } from '../Utils/Functions';
function Profile(){
   const { user, getadmin } = useAuthContext();
  const navigate = useNavigate();
   useEffect(() => {
      if(user == null){
         getadmin(navigate());
      }
   }, [])
    return(
        <>
   <div className="d-flex flex-row align-items-center justify-content-between mb-1 mt-3">
      <h1 className="fs-5 fw-bold text-white">My Account</h1>
      <div>
      </div>
     </div>
     <hr />
     <div className="row">
      <div className="col-lg-12">
        <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-2">
          {
            user == null ? (
               <>
               <Spinnersmall />
               </>
            ) :  (
               <>
               <div className="card border-none shadow w-50 px-3 rounded-4 py-2 theme-color text-white">
            <h1 className="fs-5 text-center my-2 fw-bold">My Account</h1>
             <div className="d-flex flex-row justify-content-center mb-3">
                <div className="profile-box">
                  <img src={null} alt="avatar" className="object-fit-cover" />
                </div>
             </div>
                   <div className="d-block mb-2">
                <h1 className="fs-6 my-0 fw-bold">{user.id}</h1>
                <p className="fs-12 my-0 text-secondary">Account ID/ User ID</p>
             </div>
             <div className="d-block mb-2">
                <h1 className="fs-6 my-0 fw-bold">{user.email}</h1>
                <p className="fs-12 my-0 text-secondary">User email/ Account email</p>
             </div>
             <div className="d-block mb-2">
                <h1 className="fs-6 my-0 fw-bold">{user.username}</h1>
                <p className="fs-12 my-0 text-secondary">Account User Name</p>
             </div>
             <div className="d-block mb-2">
                <h1 className="fs-6 my-0 fw-bold">Role</h1>
                <p className="fs-12 my-0 text-secondary">Username goes here</p>
             </div>
             <div className="d-block mb-2">
                <h1 className="fs-6 my-0 fw-bold">{FormatDate(user.created_at)}</h1>
                <p className="fs-12 my-0 text-secondary">Your account was created on</p>
             </div>
             <hr />
            <Link className='link w-100' to="/change-password">
            <div className="d-flex flex-row w-100 align-items-center justify-content-between w-100">
             <div className="d-block mb-2">
                <h1 className="fs-6 my-0 fw-bold text-white">Change Password</h1>
                <p className="fs-12 my-0 text-secondary">Has your security been compromised</p>
             </div>
             <p>
             <Icon icon="gravity-ui:chevron-right" />
             </p>
             </div>
            </Link>
             <Link className='link w-100' to={`/change-profile-pic/${user.id}`}>
             <div className="d-flex flex-row w-100 align-items-center justify-content-between">
             <div className="d-block mb-2">
                <h1 className="fs-6 my-0 fw-bold text-white">Change Profile Pic</h1>
                <p className="fs-12 my-0 text-secondary">Update or change your profile pic</p>
             </div>
             <p>
             <Icon icon="gravity-ui:chevron-right" />
             </p>
             </div>
             </Link>
               
          </div>
               </>
            )
          }
        </div>
      </div>
     </div>
        </>
    )
}
export default Profile;