import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { ToastContainer } from 'react-toastify';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};







// import { Container, Header, Link } from './Layout.styled';
// import { Suspense } from "react";
// import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

// export const Layout = () => {
//     return (
//         <Container>
//             <Header>
//                 <nav>
//                     <Link to="/" end>Home</Link>
//                     <Link to="/register">Register</Link>
//                     <Link to="/login">Log in</Link>
//                 </nav>
//             </Header>
//             <main>
//                 <Suspense fallback={null}>
//                     <Outlet />
//                 </Suspense>
//             </main>
//             <ToastContainer/>
//         </Container>
//     )
// }