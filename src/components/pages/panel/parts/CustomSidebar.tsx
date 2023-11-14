import {Gear, List, User,UserCircleGear,Desktop,UserList,
        UserPlus, House, ArchiveBox,PlusCircle,Mountains,
        FloppyDiskBack,MapPin,ArrowLeft,ArrowRight } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { useAuth } from "../../../../Auth/AuthProvider";
import  Colors from "../../../../constants/Colors.js";
import { useNavigate } from 'react-router-dom';

import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar} from 'react-pro-sidebar';


const CustomSidebar = () => {
  const navigate = useNavigate();

  const { isAuthenticated, userInfo} = useAuth();
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
  useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      collapseSidebar();
    }
  };

  return (

    <Sidebar
      backgroundColor={Colors.primarySoft}
      rtl={false}
      style={{ height: "100vh" }}
    >
    <Menu>
      <MenuItem  icon={<House/>} onClick={() => navigate("/panel/dashboard")} > Inicio </MenuItem>
      <SubMenu icon={<Gear/>} label="Ajustes">
        <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<User/>} onClick={() => navigate("/panel/profile")}> Perfil </MenuItem>
      </SubMenu>

      <SubMenu icon={<UserCircleGear/>} label="Administrador">

        <SubMenu rootStyles={{backgroundColor:Colors.primarySoft}} icon={<User/>} label="Usuarios">
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<UserList/>} onClick={() => navigate("/panel/admin/users")}> Lista </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<Gear/>} onClick={() => navigate("/panel/admin/userSettings")} > Ajustes </MenuItem>
        </SubMenu>
        <SubMenu rootStyles={{backgroundColor:Colors.primarySoft}} icon={<Desktop/>}label="Micrositios">
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<List/>}>  Lista </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<ArchiveBox/>}> Solicitudes </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<Gear/>}> Ajustes </MenuItem>
        </SubMenu>
        <SubMenu rootStyles={{backgroundColor:Colors.primarySoft}} icon={<MapPin/>} label="Rutas turísticas">
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<List/>}> Lista </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<PlusCircle/>}> Crear </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<Gear/>}> Ajustes </MenuItem>
        </SubMenu>

      </SubMenu>
      <SubMenu icon={<Desktop/>} label="Micrositio">

        <SubMenu rootStyles={{backgroundColor:Colors.primarySoft}} label="Contenido">
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<List/>}> Lista </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<Gear/>}> Ajustes </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<FloppyDiskBack/>}> Backup </MenuItem>
        </SubMenu>

        <SubMenu rootStyles={{backgroundColor:Colors.primarySoft}} icon={<Mountains/>} label="Sitios de interés">
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<List/>}> Lista </MenuItem>
            <MenuItem  rootStyles={{backgroundColor:Colors.primarySoft}}icon={<Gear/>}> Ajustes </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<FloppyDiskBack/>}> Backup </MenuItem>
        </SubMenu>

        <SubMenu icon={<MapPin/>} label="Rutas turísticas">
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<List/>}> Lista </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<Gear/>}> Ajustes </MenuItem>
            <MenuItem rootStyles={{backgroundColor:Colors.primarySoft}} icon={<FloppyDiskBack/>}> Backup </MenuItem>
        </SubMenu>

      </SubMenu>

      {toggled?

      <MenuItem onClick={toggle} > <ArrowRight/> </MenuItem>
      :
      
      <MenuItem onClick={toggle} > <ArrowLeft/> </MenuItem>
      }
    </Menu>
  </Sidebar>
  
  );
};

export default CustomSidebar;
