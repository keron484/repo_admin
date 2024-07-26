import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import AccountSettings from '../pages/AccountSettings';
import Login from '../auth/Login';
import UpdateAdmin from '../forms/UpdateAdmin';
import Settings from '../pages/settins';
import AddAdmin from '../forms/Addadmin';
import Changepassword from '../forms/Changepassword';
import Profile from '../pages/Profile';
import Email from '../pages/Email';
import Worker from '../pages/Workers';
import Workerdetails from '../pages/Workerdetails';
import Sendmail from '../forms/Sendmail';
import EmailDetails from '../pages/Emaildetails';
import Messages from '../pages/Messages';
import MessageDetails from '../pages/Messagedetails';
import Layout from '../Layout/layout';
import Pet from '../pages/Pet';
import Petdetails from '../pages/Petdetails';
import Petcategory from '../pages/Petcategory';
import Updatepet from '../forms/Updatepet';
import Updatecategory from '../forms/Updatecategory';
import Addcategory from '../forms/Addcategory';
import Addpet from '../forms/Addpet';
import Replymessage from '../forms/Replymessage';
import Updateprofilepic from '../forms/Updateprofilepic';
function Links(){
  return(
     <BrowserRouter>
        <Routes>
           <Route path='/login' element={<Login />}></Route>
           <Route element={<Layout />}>
           <Route path='/' element={<Dashboard />}></Route>
           <Route path='/email' element={ <Email /> } />
           <Route path='/email-details/:id' element={<EmailDetails />} />
           <Route path='/send-mail' element={<Sendmail />} />
           <Route path='/worker' element={<Worker />} />
           <Route path='/add-pet' element={<Addpet />}></Route>
           <Route path='/update-pet/:id' element={<Updatepet />}></Route>
           <Route path='/add-category' element={<Addcategory />}></Route>
           <Route path='/update-category/:id' element={<Updatecategory />}></Route>
           <Route path='/worker-details/:id' element={<Workerdetails />} />
           <Route path='/admin' element={  <Admin />} />
           <Route path='/update-admin/:id' element={<UpdateAdmin />} />
           <Route path='/add-admin' element={<AddAdmin />}/>
           <Route path='/messages' element={<Messages />} />
           <Route path='/reply-message/:email' element={<Replymessage />}></Route>
           <Route path='/message-details/:id'element={<MessageDetails />} />
           <Route path='/settings' element={<Settings />}></Route>
           <Route path='/change-password' element={<Changepassword />}></Route>
           <Route path='/account-settings' element={<AccountSettings />}></Route>
           <Route path='/profile' element={ <Profile />}></Route>
           <Route path='/pet' element={<Pet />}></Route>
           <Route path='/pet-details/:id' element={<Petdetails />}></Route>
           <Route path='/pet-category' element={<Petcategory />}></Route>
           <Route path='/change-profile-pic/:id' element={<Updateprofilepic />}></Route>
           </Route>
        </Routes>
     </BrowserRouter>
  )
}
export default Links;
