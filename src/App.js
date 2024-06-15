import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import About from './components/Pages/About';
import Articles from './components/Resources/Articles';
import Tutorials from './components/Resources/Tutorials';
import ContactTable from './components/Contacts/ContactTable';
import Protect from './components/Protect';
import NotFound from './components/Pages/NotFound';
import Success from './components/Pages/success';
import OutletComponent from './components/OutletComponent';
import AdminForm from './components/Admin';
import EditProfile from './components/ToolTip/EditProfile';
import SignIn from './components/ReusableComponent/SignIn';
import SignUp from './components/ReusableComponent/SignUp';
import ActiveUser from './components/Contacts/ActiveUser';

const App = () => {
  return (
    <div className="flex h-full bg-gray-900 max-h-fit">
      <Navbar />
      <div className="flex flex-col flex-grow ">
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<Protect />} >
            <Route element={<OutletComponent />}>
              <Route path='/home' element={<Home />} />
              <Route path='/company' element={<Company />} />
              <Route path='/resources/articles' element={<Articles />} />
              <Route path='/resources/tutorials' element={<Tutorials />} />
              <Route path='/about' element={<About />} />
              <Route path='contact/contacttable' element={<ContactTable />} />
              <Route path='contact/activeuser' element={<ActiveUser />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/adminform' element={<AdminForm />} />
              <Route path='/success' element={<Success />} />
              <Route path='/edit-profile' element={<EditProfile />} />



            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
