import { Icon } from "@iconify-icon/react";
function AccountSettings(){
    return(
        <>
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3  mb-3 border-bottom">
    <div className="d-flex flex-row align-items-center">
      <span className="icon-badge"> <Icon icon="fa6-solid:users" className=" fs-4 mt-2"/></span>
      <h1 className="fs-6 fw-bold">Manage Account Settings</h1>
    </div>
    <div className="d-flex mb-1">
      <button className="btn btn-success fs-12">
        Back
      </button>
    </div>
  </div>
   <div className="col-lg-12">
     <div className="card w-100 rounded-2 border-none shadow-sm px-3 py-4">
         <h1 className="my-2 fw-bolder fs-3">User Details</h1>
         <div className="d-flex flex-row align-items-center justify-content-between">
            <p>User Name</p>
            <p>Account Username</p>
         </div>
         <div className="d-flex flex-row align-items-center justify-content-between">
            <p>Email</p>
            <p>Account Email</p>
         </div>
         <div className="d-flex flex-row align-items-center justify-content-between">
            <p>Full Names</p>
            <p>Account Username</p>
         </div>
         <div className="d-flex flex-row align-items-center justify-content-between">
            <p>Telephone</p>
            <p>Account Username</p>
         </div>
         <h1 className="my-2 fw-bolder fs-3">Security</h1>
         <div className="d-flex flex-row align-items-center justify-content-between">
            change Password
         </div>
         <h1 className="my-2 fw-bolder fs-3">Danger Zone</h1>
         <div className="outline-danger w-100 text-danger">
             <div className="d-flex flex-row align-items-center justify-content-between">
                <p>Logout</p>
             </div>
             <div className="d-flex flex-row align-items-center justify-content-between">
                <p>Delete Account</p>
             </div>
         </div>
     </div>
   </div>
        </>
    )
}
export default AccountSettings;