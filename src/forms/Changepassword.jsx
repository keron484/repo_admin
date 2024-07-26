import { Link } from "react-router-dom";
function Changepassword(){
    return(
        <>
   <div className="d-flex flex-row align-items-center justify-content-between mt-3">
      <h5 className="fs-5 fw-bold text-white">Change Password Admin</h5>
      <div>
      <Link className="link" to="/settings">
      <button className="fs-12 btn btn-success">
        Back
      </button>
      </Link>
      </div>
     </div>
     <hr />
     <div className="row">
      <div className="col-lg-12">
        <div className="w-100 d-flex flex-row align-items-center justify-content-center mt-3">
          <div className="card border-none shadow-sm w-75 px-3 rounded-4 py-2 theme-color text-white">
            <h1 className="fs-5 text-center my-2 fw-bold">Change Password</h1>
            <div className="my-2">
              <p className="fs-6 my-0">Current Password</p>
              <input type="password" className="form-control" placeholder="Enter Current Password"/>
            </div>
            <div className="my-2">
              <p className="fs-6 my-0">New Password</p>
              <input type="password" className="form-control" placeholder="Enter New Password"/>
            </div>
            <div className="my-2">
              <p className="fs-6 my-0">Confirm Password</p>
              <input type="password" className="form-control" placeholder="Enter Password Confrimation"/>
            </div>
            <button 
            className="w-100 btn btn-success fw-bold my-2"
            data-bs-toggle="modal" 
            data-bs-target="#staticBackdropLive"
            >Change Password</button>
          </div>
        </div>
      </div>

     </div>
        </>
    )
}
export default Changepassword;