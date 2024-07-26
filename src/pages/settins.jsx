import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
function Settings(){
    return(
        <>
   <div className="d-flex flex-row align-items-center justify-content-between w-100 mb-2 text-white">
        <div className="d-block mt-3">
          <h1 className="fw-bolder fs-5">Account settings</h1>
         </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12 ">
                    <h1 className="fs-6 my-2 fw-bold text-white">Security and Account settings</h1>
                <div className="card border-none rounded-4 px-3 py-4 theme-color text-white ">
                <div className="d-block">
                    <Link className="link" to="/change-password">
                    <div className="mb-3 w-100 d-flex flex-row align-items-center justify-content-between">
                      <p className="my-0">Change Password</p>
                      <p className="my-0"><Icon icon="fa6-solid:chevron-right" className="fs-5 text-white"/></p>
                    </div>
                    </Link>
                    <Link className="link" to="/profile">
                    <div className="mb-3 w-100 d-flex flex-row align-items-center justify-content-between">
                     <p className="my-0"> Personal Details</p>
                     <p className="my-0"><Icon icon="fa6-solid:chevron-right" className="fs-5 text-white"/></p>
                    </div>
                    </Link>
                    <div className="mb-3">
                     Display
                    </div>
                    <div className="mb-3">
                     DarkMode
                    </div>
                </div>
                </div>
                <h1 className="fs-6 my-2 fw-bold text-white">Danger Zone</h1>
                <div className="card w-100 rounded-4 shadow-sm border-danger px-4 py-5 theme-color text-danger">
                     <div className="mb-3">
                        Delete Account and Personal Data
                        <p className="fs-12">
                            This action can't be undone
                        </p>
                     </div> 
                     <div className="mb-3">
                        Logout from account
                     </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Settings;