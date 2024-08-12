import {  } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { Outlet, NavLink } from "react-router-dom";
import Modal from "../components/Modal";
import useAuthContext from "../context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinnnersingle } from "../components/Spinners";
function Layout(){
    const { user, getadmin, toggle, istoggled  } = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        if(user == null || user === ''){
            getadmin(navigate);
        }
    })
    return(
        <>
        <Modal />
         <div className="d-flex" id="wrapper">
         <nav className={ istoggled ?  "sidebar-two flex-column d-flex pb-1" : "sidebar d-flex flex-column pb-1"}>
                    <div className="nav-title d-flex flex-row px-1 justify-content-between  text-white  py-2">
                        <p className="my-0 fw-bold">
                            <img src="./logo/logo.png" alt="" className="logo-app"/>
                        </p>
                    </div>
                   <div className="d-flex flex-row justify-content-between text-white align-items-center mt-5 mx-2">
                     <div className="d-flex flex-row justify-content-start text-white align-items-center gap-2">
                        <div className="profile">
                         <img src="image/image-one.jpg" alt="" className="profile-img"/>
                        </div>
                        <div className="d-block">
                            {
                                user == null ? <>
                                <Spinnnersingle />
                                </> : <>
                                <p className="my-0 fw-bold">{user.username}</p>
                                <p className="my-0 fs-12">Administrator</p>
                                </>
                            }     
                        </div>
                     </div>
                     <div>
                     <Icon icon="subway:mark-3" className="fs-5 text-warning"/>
                     </div>
                   </div>
                   <div className="mt-auto">
                    <div className="my-3">
                    <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/">
                        <p className="my-0 mx-1">Dashboard</p>
                        <Icon icon="ic:baseline-dashboard" className="fs-5 mx-1"/>
                    </NavLink>
                    </div>
                    <div className="my-3">
                    <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/admin">
                        <p className="my-0 mx-1">Admin</p>
                        <Icon icon="ri:admin-fill" className="fs-5 mx-1"/>
                    </NavLink>
                    </div>
                    <div className="my-3">
                    <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/worker">
                        <p className="my-0 mx-1">Users</p>
                        <Icon icon="mdi:users"  className="fs-5 mx-1"/>
                    </NavLink>
                    </div>
                    <div className="my-3">
                    <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/pet">
                        <p className="my-0 mx-1">Pets</p>
                        <Icon icon="streamline:pets-allowed-solid" className="fs-5 mx-1"/>
                    </NavLink>
                    </div>
                    <div className="my-3">
                    <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/pet-category">
                        <p className="my-0 mx-1">Pet Category</p>
                        <Icon icon="bxs:category" className="fs-5 mx-1"/>
                    </NavLink>
                    </div>
                    <div className="my-3">
                    <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/email">
                        <p className="my-0 mx-1">Emails</p>
                        <Icon icon="dashicons:email-alt" className="fs-5 mx-1"/>
                    </NavLink>
                    </div>
                    <div className="my-3">
                    <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/applications">
                        <p className="my-0 mx-1">Applications</p>
                        <Icon icon="dashicons:email-alt" className="fs-5 mx-1"/>
                    </NavLink>
                    </div>
                    <div className="my-3">
                    <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/messages">
                        <p className="my-0 mx-1">Messages</p>
                        <Icon icon="icon-park-solid:message" className="fs-5 mx-1"/>
                    </NavLink>
                    </div>
                   </div>
                   <div className="mt-auto pb-3">
                    <hr />
                   <div className="my-4">
                   <NavLink className={({isActive}) => isActive ? "link link-active" : "link"} to="/settings">
                        <p className="my-0 mx-1">Settings</p>
                        <Icon icon="material-symbols:settings" className="mx-1 fs-5"/>
                    </NavLink>
                   </div>
                    <NavLink className="link text-danger">
                        <p className="my-0 mx-1">Logout</p>
                        <Icon icon="solar:logout-2-bold" className="mx-1 fs-5"/>
                    </NavLink>
                   </div>
           </nav>
           <div className="main w-100 theme-color-light">
           <nav className="d-flex flex-row navbar bg-dark text-white navbar-expand-lg px-2 navtop align-items-center pe-3">
                        <Icon 
                        icon="ic:outline-menu" 
                        className="fs-4" 
                        onClick={toggle}
                        />
                        <div className="d-flex flex-row gap-3 ms-auto">
                            <div className="noti-badge">   
                            <Icon icon="icon-park-solid:message" />
                            </div>
                            <div className="noti-badge">
                            <Icon icon="mdi:bell" />
                            </div>
                        </div>
              </nav>
              <div className="container-fluid">
                 <Outlet />
              </div>
           </div>
         </div>
        </>
    )
}
export default Layout;