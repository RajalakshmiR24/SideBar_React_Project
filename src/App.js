import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Resources from './components/Pages/Resources';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Articles from './components/Resources/Articles';
import Tutorials from './components/Resources/Tutorials';
import CaseStudies from './components/Resources/CaseStudies';
import Contact1 from './components/Contacts/Contact1';
import Contact2 from './components/Contacts/Contact2';
import Login from './components/Pages/Login';
import Protect from './components/Protect';
import NotFound from './components/Pages/NotFound';
import OutletComponent from './components/OutletComponent';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Navbar />
      <div className="flex flex-col flex-grow">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<Protect />} >
            <Route element={<OutletComponent />}>
              <Route path='/home' element={<Home />} />
              <Route path='/company' element={<Company />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/resources/articles' element={<Articles />} />
              <Route path='/resources/tutorials' element={<Tutorials />} />
              <Route path='/resources/case-studies' element={<CaseStudies />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path="/contacts/contact1/:name" element={<Contact1 />} />
              <Route path='/contacts/contact2/:name' element={<Contact2 />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
