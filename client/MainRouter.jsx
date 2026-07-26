import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Project from './src/project'
import Layout from './components/Layout'
import References from './src/references'
import Services from './src/services'
import Counter from './src/counter'
import AdminDashboard from "./src/admindashboard";

import AddProject from "./src/admin/projects/AddProjects";
import EditProject from "./src/admin/projects/EditProjects";
import ProjectsList from "./src/admin/projects/ProjectsList";

import UsersList from "./src/admin/users/UsersList";
import AddUser from "./src/admin/users/AddUser";
import EditUser from "./src/admin/users/EditUser";

import ServiceList from "./src/admin/services/ServiceList";
import AddService from "./src/admin/services/AddService";
import EditService from "./src/admin/services/EditService";

import ReferenceList from "./src/admin/references/ReferenceList";
import AddReference from "./src/admin/references/AddReference";
import EditReference from "./src/admin/references/EditReference";

const MainRouter = () => {
            // The Layout component is included here so that it is displayed on all pages
            // The Routes component defines the different routes for the application and which component to render for each route
    return (<div>
        <Layout />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/references" element={<References />} />
            <Route path="/services" element={<Services />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/admin" element={<AdminDashboard />} />

            <Route path="/admin" element={<AdminDashboard />} />

            {/* Users */}
            <Route path="/admin/users" element={<UsersList />} />
            <Route path="/admin/users/add" element={<AddUser />} />
            <Route path="/admin/users/edit/:id" element={<EditUser />} />

            {/* Projects */}
            <Route path="/admin/projects" element={<ProjectsList />} />
            <Route path="/admin/projects/add" element={<AddProject />} />
            <Route path="/admin/projects/edit/:id" element={<EditProject />} />

            {/* Services */}
            <Route path="/admin/services" element={<ServiceList />} />
            <Route path="/admin/services/add" element={<AddService />} />
            <Route path="/admin/services/edit/:id" element={<EditService />} />

            {/* References */}
            <Route path="/admin/references" element={<ReferenceList />} />
            <Route path="/admin/references/add" element={<AddReference />} />
            <Route path="/admin/references/edit/:id" element={<EditReference />} />
        </Routes>
    </div>)
}
export default MainRouter