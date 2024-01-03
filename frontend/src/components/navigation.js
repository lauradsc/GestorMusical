import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
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
            <a href="/">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </a>
            <a href="/">
                <CDBSidebarMenuItem icon="list">Lista de Artistas</CDBSidebarMenuItem>
            </a>
            <a href="/">
                <CDBSidebarMenuItem icon="user">Gerenciar Artistas</CDBSidebarMenuItem>
            </a>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
    );
}

export default Navigation;