import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import UmrahPackage from "../Pages/Home/UmrahPackage/UmrahPackage";
import NavUmrah from "../Pages/NavUmrah/NavUmrah";
import NavHaj from "../Pages/NavHaj/NavHaj";
import NavVisa from "../Pages/NavVisa/NavVisa";
import NavTour from "../Pages/NavTour/StudeVisa";
import Login from "../Pages/Account/Login";
import UmrahDetails from "../Pages/DetailsPage/UmrahDetails/UmrahDetails";
import HajDetails from "../Pages/DetailsPage/HajDetails/HajDetails";
import VisaDetails from "../Pages/DetailsPage/VisaDetails/VisaDetails";
import TourDetails from "../Pages/DetailsPage/TourDetails/TourDetails";
import BlogDetails from "../Pages/Blog/BlogDetails/BlogDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";
import NavTour_WiseCategory from "../Pages/NavTour_WiseCategory/NavTour_WiseCategory";
import Search_Tour from "../Pages/NavTour/Search_Tour";
import Search_visa from "../Pages/NavTour/Search_visa";
import TopNavbar from "../Shared/TopNavbar";
import NavAbout from "../Pages/NavAbout/NavAbout";
import ErrorSearch_visa from "../Pages/NavTour/ErrorSearchVisa/ErrorSearch_visa";
import Flight from "../Pages/Flight_Hotel/Flight";
import OurRecentSuccess from "../Success/OurRecentSuccess";
import Hotel from "../Pages/Flight_Hotel/Hotel";
import USAVisaRequirements from "../Study_VisaRequirements/USAVisaRequirements";
import StudeVisa from "../Pages/NavTour/StudeVisa";
import StudyDetails from "../Pages/DetailsPage/StudyDetails/StudyDetails";
import BannerB from "../Pages/Home/Banner/BannerB";
import Package_Tour from "../Pages/Package_Tour/Package_Tour";
import AllVisa_Details from "../Pages/AllVisa_Details/AllVisa_Details";
import VisitVisa from "../Pages/NavTour/VisitVisa";
import WorkVisa from "../Pages/NavTour/WorkVisa";
import Visit_Visa_Details from "../Pages/AllVisa_Details/Visit_Visa_Details";
import Work_Visa_Details from "../Pages/AllVisa_Details/Work_Visa_Details";




const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/umrah",
        element: <NavUmrah />,
      },
      {
        path: "/umrah-details/:id",
        element: <UmrahDetails />,
      },
      {
        path: "/USAVisaRequirements",
        element: <USAVisaRequirements />,
      },
      {
        path: "/haj",
        element: <NavHaj />,
      },
      {
        path: "/haj-details/:id",
        element: <HajDetails />,
      },
      {
        path: "/visa",
        element: <NavVisa />,
      },
      {
        path: "/tour",
        element: <Package_Tour />,
      },
      {
        path: "/visa-details/:id",
        element: <VisaDetails />,
      },
      // {
      //   path: "/study-visa-details/:id",
      //   element: <StudyDetails />,
      // },

      {
        path: "/tour-search",
        element: <Search_Tour />,
      },
      {
        path: "/visa-search",
        element: <Search_visa />,
      },
      {
        path: "/search-visa",
        element: <ErrorSearch_visa />,
      },
      {
        path: "/tour-category/:id",
        element: <NavTour_WiseCategory />,
      },

      {
        path: "/tour-details/:id",
        element: <TourDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/top-navbar",
        element: <TopNavbar />,
      },
      {
        path: "/success",
        element: <OurRecentSuccess />,
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },

      {
        path: "/about-us",
        element: <NavAbout />,
      },
      {
        path: "/visit-visa",
        element: <VisitVisa />,
      },
      {
        path: "/work-visa",
        element: <WorkVisa />,
      },
      {
        path: "/study-visa",
        element: <StudeVisa />,
      },
      {
        path: "/visit-visa-details/:id",
        element: <Visit_Visa_Details />,
      },
      {
        path: "/study-visa-details/:id",
        element: <AllVisa_Details />,
      },
      {
        path: "/work-visa-details/:id",
        element: <Work_Visa_Details />,
      },
      //study-visa-details

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
