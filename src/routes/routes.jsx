import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Spinnersmall from '../components/Spinners';
import Layout from '../Layout/layout';
import Login from '../auth/Login';
const AccountSettings = React.lazy('../pages/AccountSettings');
const UpdateAdmin = React.lazy(() => import('../forms/UpdateAdmin'))
const Settings = React.lazy(() => import('../pages/settins'));
const AddAdmin = React.lazy(() => import('../forms/Addadmin'));
const Changepassword = React.lazy(() => import('../forms/Changepassword'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Email = React.lazy(() => import('../pages/Email'));
const Worker = React.lazy(() => import('../pages/Workers'));
const Workerdetails = React.lazy(() => import('../pages/Workerdetails'));
const Sendmail = React.lazy(() => import('../forms/Sendmail'));
const EmailDetails = React.lazy(() => import('../pages/Emaildetails'));
const Messages = React.lazy(() => import('../pages/Messages'))
const MessageDetails = React.lazy(() => import('../pages/Messagedetails'));
const Pet = React.lazy(() => import('../pages/Pet'));
const Petdetails = React.lazy(() => import('../pages/Petdetails'));
const Petcategory = React.lazy(() => import('../pages/Petcategory'));
const Updatepet = React.lazy(() => import('../forms/Updatepet'));
const Updatecategory = React.lazy(() => import('../forms/Updatecategory'));
const Addcategory = React.lazy(() => import('../forms/Addcategory'));
const Addpet = React.lazy(() => import('../forms/Addpet'));
const Replymessage = React.lazy(() => import('../forms/Replymessage'));
const Updateprofilepic = React.lazy(() => import('../forms/Updateprofilepic'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Applications = React.lazy(() => import('../pages/Applications'));
const Applicationsdetails = React.lazy(() => import('../pages/Applicationdetails'));
const UpdateApplication = React.lazy(() => import('../forms/Updateapplication'));
const Admin = React.lazy(() => import('../pages/Admin'));
function Links(){
  return(
     <BrowserRouter>
        <Routes>
           <Route path='/login' element={<Login />}></Route>
           <Route element={<Layout />}>
           <Route path='/' 
           element={
             <Suspense fallback={<Spinnersmall />}>
               <Dashboard />
             </Suspense>
           }> 
           </Route>
           <Route path='/email' element={ 
             <Suspense fallback={<Spinnersmall />}>
               <Email />
             </Suspense>
            } />
           <Route path='/email-details/:id' element={
            <Suspense fallback={<Spinnersmall />}>
               <EmailDetails />
            </Suspense>
           } />
           <Route path='/send-mail' element={
             <Suspense fallback={<Spinnersmall />}>
               <Sendmail />
             </Suspense>
           } />
           <Route path='/worker' element={
              <Suspense fallback={<Spinnersmall />}>
               <Worker />
              </Suspense>
           } />
           <Route path='/add-pet' element={
            <Suspense fallback={<Spinnersmall />}>
               <Addpet />
            </Suspense>
           }></Route>
           <Route path='/update-pet/:id' element={
             <Suspense fallback={<Spinnersmall />}>
               <Updatepet />
             </Suspense>
           }></Route>
           <Route path='/add-category' element={
             <Suspense fallback={<Spinnersmall />}>
               <Addcategory />
             </Suspense>
           }></Route>
           <Route path='/applications' element={
             <Suspense fallback={<Spinnersmall />}>
               <Applications />
             </Suspense>
           }></Route>
           <Route path='/update-category/:id' element={
            <Suspense fallback={<Spinnersmall />}>
               <Updatecategory />
            </Suspense>
           }></Route>
           <Route path='/worker-details/:id' element={
             <Suspense fallback={<Spinnersmall/>}>
               <Workerdetails />
             </Suspense>
           } />
           <Route path='/update-application/:id' element={
             <Suspense fallback={<Spinnersmall/>}>
               <UpdateApplication />
             </Suspense>
           } />
           <Route path='/application-details/:id' element={
             <Suspense fallback={<Spinnersmall/>}>
               <Applicationsdetails />
             </Suspense>
           } />
           <Route path='/admin' element={
             <Suspense fallback={<Spinnersmall />}>
               <Admin />
             </Suspense>
           } />
           <Route path='/update-admin/:id' element={
            <Suspense fallback={<Spinnersmall />}>
               <UpdateAdmin />
            </Suspense>
           } />
           <Route path='/add-admin' element={
              <Suspense fallback={<Spinnersmall />}>
               <AddAdmin />
              </Suspense>
           }/>
           <Route path='/messages' element={
             <Suspense fallback={<Spinnersmall />}>
               <Messages />
             </Suspense>
           } />
           <Route path='/reply-message/:email' element={
            <Suspense fallback={<Spinnersmall />}>
               <Replymessage />
            </Suspense>
           }></Route>
           <Route path='/message-details/:id'element={
            <Suspense fallback={<Spinnersmall />}>
               <MessageDetails />
            </Suspense>
           } />
           <Route path='/settings' element={
             <Suspense fallback={<Spinnersmall />}>
               <Settings />
             </Suspense>
           }></Route>
           <Route path='/change-password' element={
             <Suspense fallback={<Spinnersmall />}>
               <Changepassword />
             </Suspense>
           }></Route>
           <Route path='/account-settings' element={
            <Suspense fallback={<Spinnersmall />}>
               <AccountSettings />
            </Suspense>
           }></Route>
           <Route path='/profile' element={
            <Suspense fallback={<Spinnersmall />}>
               <Profile />
            </Suspense>
           }></Route>
           <Route path='/pet' element={
            <Suspense fallback={<Suspense />}>
               <Pet />
            </Suspense>
           }></Route>
           <Route path='/pet-details/:id' element={
            <Suspense fallback={<Spinnersmall />}>
               <Petdetails />
            </Suspense>
           }></Route>
           <Route path='/pet-category' element={
             <Suspense fallback={<Spinnersmall />}>
               <Petcategory />
             </Suspense>
           }></Route>
           <Route path='/change-profile-pic/:id' element={
             <Suspense fallback={<Spinnersmall />}>
               <Updateprofilepic />
             </Suspense>
           }></Route>
           </Route>
        </Routes>
     </BrowserRouter>
  )
}
export default Links;
