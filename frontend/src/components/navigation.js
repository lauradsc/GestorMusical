
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
        <Navbar bg="dark" variant="dark" expand="lgs">
          <Navbar.Brand href="/" className="app-logo">
            Gestor de catálogo musical
          </Navbar.Brand>
      </Navbar>
      <div className='sidebar'>
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Gerenciamento
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact to="/home" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/artistas" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="list">Lista de Artistas</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/gerenciar" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Gerenciar Artistas</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
    );
}

export default Navigation;