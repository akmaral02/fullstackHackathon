import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import ContactUsPage from "./pages/ContactUsPage";
import EditTourPage from "./pages/EditTourPage";
import HomePage from "./pages/HomePage";
// import CategoriesPage from "./pages/CategoriesPage";
import BeachesPage from "./pages/tourPages/BeachesPage";
// import CampingPage from "./pages/tourPages/CampingPage";
// import DesertPage from "./pages/tourPages/DesertPage";
// import IconicCitiesPage from "./pages/tourPages/IconicCitiesPage";
// import MountainsPage from "./pages/tourPages/MountainsPage";
// import SkiingPage from "./pages/tourPages/SkiingPage";
// import TropicPage from "./pages/tourPages/TropicPage";
import MyToursPage from "./pages/MyToursPage";
import NotFoundPage from "./pages/NotFoundPage";
import PaymentFormPage from "./pages/PaymentFormPage";
import TourDetailPage from "./pages/TourDetailPage";
import ToursPage from "./pages/ToursPage";
import VerificationPage from "./pages/VerificationPage";
import CategoriesPage from "./pages/CategoriesPage";
import CartPage from "./pages/CartPage";
import GalleryPage from "./pages/GalleryPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuth } from "./contexts/AuthContextProvider";

const MainRoutes = () => {
  const { user } = useAuth();

  const PublickRoutes = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "/verif", element: <VerificationPage />, id: 3 },
    { link: "/tours", element: <CategoriesPage />, id: 4 },
    { link: "/detail/:id", element: <TourDetailPage />, id: 5 },
    { link: "/mytours", element: <CartPage />, id: 6 },
    { link: "/contactus", element: <ContactUsPage />, id: 7 },
    { link: "/paymentform", element: <PaymentFormPage />, id: 8 },
    { link: "*", element: <NotFoundPage />, id: 9 },
    { link: "/gallery", element: <GalleryPage />, id: 13 },
    { link: "/categories", element: <Categories />, id: 14 },
    { link: "/categories/beaches", element: <BeachesPage />, id: 15 },
    { link: "/profile", element: <ProfilePage />, id: 16 },
    { link: "/payment", element: <PaymentFormPage />, id: 17 },
  ];

  const PrivateRoutes = [
    { link: "/admin", element: <AdminPage />, id: 18 },
    { link: "/edit/:id", element: <EditTourPage />, id: 19 },
  ];
  return (
    <Routes>
      {PublickRoutes.map((pages) => (
        <Route path={pages.link} element={pages.element} key={pages.id} />
      ))}

      {user
        ? PrivateRoutes.map((pages) => (
            <Route
              path={pages.link}
              element={
                user === "admin@admin.com" ? (
                  pages.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
              key={pages.id}
            />
          ))
        : null}
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
