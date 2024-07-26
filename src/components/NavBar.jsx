import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
          <header className="navbar sticky-top flex-md-nowrap py-1 theme-color text-white">
          <a className="navbar-brand col-md-3 col-lg-2 me-0  px-3 fs-6 fw-bolder text-white" href="/">Gethigh Admin</a>
  <div className="navbar-nav flex-row d-flex col-md-9 col-lg-10 justify-content-between d-flex align-items-center d-none-sm">
    <input type="text" name="" id="" placeholder="Search here" className="ms-2 search w-25"/>
    <div className="d-flex text-white flex-row align-items-center me-3">
      <div className="icon-badge-nav d-flex flex-row align-items-center justify-content-center text-primary mx-1">
       <Icon icon="mdi:bell" className="fs-5"/>
      </div>
      <Link className="link" to="">
      <div className="icon-badge-nav d-flex flex-row align-items-center justify-content-center text-primary mx-1">
      <Icon icon="ant-design:message-filled" className="fs-5"/>
      </div>
      </Link>
    </div>
  </div>
  <div className=" d-flex flex-row align-items-center justify-content-end d-md-none me-4">
  <Icon icon="mingcute:menu-fill" className="fs-4"/>
  </div>
</header>

        </>
    )
}
export default Navbar;