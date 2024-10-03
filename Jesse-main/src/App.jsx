
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Career from './Pages/Career';
// import Home from './Pages/Home';
// import Login from './Pages/Login';
// import Membership from './Pages/Signup';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Signup" element={<Membership/>} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

// // // App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navbar from './Pages/Navbar';
// // import Home from './Pages/Home';
// // import Login from './Pages/Login';
// // import Signup from './Pages/Signup';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import Signup from './Pages/Signup'; // Import your other pages
// import Career from './Pages/Career';
// import Login from './Pages/Login';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Career from './Pages/Career';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Navbar appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
};

export default App;

