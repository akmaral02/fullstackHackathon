import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CategoriesPage from "./pages/CategoriesPage";
import BeachesPage from "./pages/tourPages/BeachesPage";
import CampingPage from "./pages/tourPages/CampingPage";
import DesertPage from "./pages/tourPages/DesertPage";
import IconicCitiesPage from "./pages/tourPages/IconicCitiesPage";
import MountainsPage from "./pages/tourPages/MountainsPage";
import SkiingPage from "./pages/tourPages/SkiingPage";
import TropicPage from "./pages/tourPages/TropicPage";
import MyToursPage from "./pages/MyToursPage";
import NotFoundPage from "./pages/NotFoundPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/category", element: <CategoriesPage />, id: 1 },
    { link: "/category/beach", element: <BeachesPage />, id: 2 },
    {
      link: "/category/iconic_cities",
      element: <IconicCitiesPage />,
      id: 3,
    },
    {
      link: "/category/mountains",
      element: <MountainsPage />,
      id: 4,
    },
    { link: "/category/desert", element: <DesertPage />, id: 5 },
    { link: "/category/skiing", element: <SkiingPage />, id: 6 },
    { link: "/category/tropic", element: <TropicPage />, id: 7 },
    { link: "/category/camping", element: <CampingPage />, id: 8 },
    { link: "/", element: <HomePage />, id: 9 },
    { link: "/auth", element: <AuthPage />, id: 10 },
    { link: "/mytours", element: <MyToursPage />, id: 11 },
    { link: "*", element: <NotFoundPage />, id: 12 },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

//

//

//

// import AdminPage from "./pages/AdminPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import EditTourPage from "./pages/EditTourPage";
// import ToursPage from "./pages/ToursPage";
// import PaymentFormPage from "./pages/PaymentFormPage";
// import TourDetailPage from "./pages/TourDetailPage";

// const PublickRoutes = [
//   { link: "/tours", element: <ToursPage />, id: 3 },
//   { link: "/tours/:id", element: <TourDetailPage />, id: 4 },
//   { link: "/contactus", element: <ContactUsPage />, id: 6 },
//   { link: "/paymentform", element: <PaymentFormPage />, id: 7 },
// ];

// const PrivateRoutes = [
//   { link: "/admin", element: <AdminPage />, id: 9 },
//   { link: "/edit/:id", element: <EditTourPage />, id: 10 },
// ];
// return (
//   <Routes>
//     {PublickRoutes.map((pages) => (
//       <Route path={pages.link} element={pages.element} key={pages.id} />
//     ))}

//     {PrivateRoutes.map((pages) => (
//       <Route path={pages.link} element={pages.element} key={pages.id} />

//     ))}
//   </Routes>
// );
