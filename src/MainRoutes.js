import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import ContactUsPage from "./pages/ContactUsPage";
import EditTourPage from "./pages/EditTourPage";
import HomePage from "./pages/HomePage";
import MyToursPage from "./pages/MyToursPage";
import NotFoundPage from "./pages/NotFoundPage";
import PaymentFormPage from "./pages/PaymentFormPage";
import TourDetailPage from "./pages/TourDetailPage";
import ToursPage from "./pages/ToursPage";

const MainRoutes = () => {
  const PublickRoutes = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "/tours", element: <ToursPage />, id: 3 },
    { link: "/tours/:id", element: <TourDetailPage />, id: 4 },
    { link: "/mytours", element: <MyToursPage />, id: 5 },
    { link: "/contactus", element: <ContactUsPage />, id: 6 },
    { link: "/paymentform", element: <PaymentFormPage />, id: 7 },
    { link: "*", element: <NotFoundPage />, id: 8 },
  ];

  const PrivateRoutes = [
    { link: "/admin", element: <AdminPage />, id: 9 },
    { link: "/edit/:id", element: <EditTourPage />, id: 10 },
  ];
  return (
    <Routes>
      {PublickRoutes.map((pages) => (
        <Route path={pages.link} element={pages.element} key={pages.id} />
      ))}

      {PrivateRoutes.map((pages) => (
        <Route path={pages.link} element={pages.element} key={pages.id} />

      ))}
    </Routes>
  );
};

export default MainRoutes;
