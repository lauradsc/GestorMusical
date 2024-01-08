//Menu de navegação entre as páginas
import React from 'react';
import {Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import "../App.css";

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';

const Navigation = () => {
    return (
    <div>
        <Navbar bg="warning" variant="dark"  expand="lgs">
          <Navbar.Brand href="/" className="app-logo">
            Gestor de catálogo musical
          </Navbar.Brand>
      </Navbar>
      <div className='sidebar'>
    <CDBSidebar className="text-white" backgroundColor="#fce48c">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Gerenciamento
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/home" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home" className="text-white">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/artistas" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list" className="text-white">Lista de Artistas</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/gerenciar" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user" className="text-white">Gerenciar Artistas</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
    );
}

export default Navigation;