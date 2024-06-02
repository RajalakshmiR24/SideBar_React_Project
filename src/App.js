import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Company from './Pages/Company';
import Resources from './Pages/Resources';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Articles from './components/Resources/Articles';
import Tutorials from './components/Resources/Tutorials';
import CaseStudies from './components/Resources/CaseStudies';
import Contact1 from './components/Contacts/Contact1';
import Contact2 from './components/Contacts/Contact2';
import Login from './Pages/Login';
import Protect from './components/Protect';
import NotFound from './Pages/NotFound';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Protect />} >
          <Route path='/home' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/resources/articles' element={<Articles />} />
          <Route path='/resources/tutorials' element={<Tutorials />} />
          <Route path='/resources/case-studies' element={<CaseStudies />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/contacts/contact1/:id/:name" element={<Contact1 />} />
          <Route path='/contacts/contact2/:id/:name' element={<Contact2 />} />
          <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
