import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import AuthPage from "./pages/AuthPage";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import BeachesPage from "./pages/tourPages/BeachesPage";
import CampingPage from "./pages/tourPages/CampingPage";
import DesertPage from "./pages/tourPages/DesertPage";
import IconicCitiesPage from "./pages/tourPages/IconicCitiesPage";
import MountainsPage from "./pages/tourPages/MountainsPage";
import SkiingPage from "./pages/tourPages/SkiingPage";
import TropicPage from "./pages/tourPages/TropicPage";

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
