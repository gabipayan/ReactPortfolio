   // src/App.jsx
   import React from 'react';
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   import Header from './components/Header';
   import Footer from './components/Footer';
   import AboutMe from './pages/AboutMe';
   import Portfolio from './pages/Portfolio';
   import Contact from './pages/Contact';
   import Resume from './pages/Resume';
   import './style.css';

   const App = () => {
     return (
       <Router>
         <Header />
         <Switch>
           <Route exact path="/" component={AboutMe} />
           <Route path="/portfolio" component={Portfolio} />
           <Route path="/contact" component={Contact} />
           <Route path="/resume" component={Resume} />
         </Switch>
         <Footer />
       </Router>
     );
   };

   export default App;