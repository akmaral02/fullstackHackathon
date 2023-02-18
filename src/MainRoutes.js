import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories/Categories";
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
import VerificationPage from "./pages/VerificationPage";

const MainRoutes = () => {
  const PublickRoutes = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "/verif", element: <VerificationPage />, id: 3 },
    { link: "/tours", element: <ToursPage />, id: 4 },
    { link: "/tours/:id", element: <TourDetailPage />, id: 5 },
    { link: "/mytours", element: <MyToursPage />, id: 6 },
    { link: "/contactus", element: <ContactUsPage />, id: 7 },
    { link: "/paymentform", element: <PaymentFormPage />, id: 8 },
    { link: "*", element: <NotFoundPage />, id: 9 },
  ];

  const PrivateRoutes = [
    { link: "/admin", element: <AdminPage />, id: 10 },
    { link: "/edit/:id", element: <EditTourPage />, id: 11 },
    { link: "/categories", element: <Categories />, id: 12 },
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
