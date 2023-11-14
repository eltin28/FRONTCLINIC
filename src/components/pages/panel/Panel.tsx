import NavBarPanel from "./parts/NavBarPanel";
import Footer from "../../organs/Footer";
import Image1 from "../../../assets/HeroVector.png";
import Image2 from "../../../assets/imageLogo.png"
import { useState } from "react";
import { useAuth } from "../../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { Image } from "../../atoms/Image";
import httpClient from "../../../config/httpClient.js"; 
import CustomSidebar from "./parts/CustomSidebar.js";
import { Outlet } from 'react-router-dom';

import {  Route, Routes } from "react-router-dom";

export default function Panel() {

  const { isAuthenticated, setIsAuthenticated, userInfo,setUserInfo} = useAuth();
  return (
      <div className="panel-container">
        <NavBarPanel />
        <section className="w-full h-full relative overflow-x-hidden flex justify-between">
          <CustomSidebar/>
          <Outlet />
        </section>
      <Footer />
      </div>
  );
}
