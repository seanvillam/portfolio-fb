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
import PrivateRoute from "./src/admin/auth/PrivateRoute";

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

import SignIn from "./src/admin/auth/SignIn";
import SignUp from "./src/admin/auth/SignUp";

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
            <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin/users" element={<PrivateRoute><UsersList /></PrivateRoute>} />
            <Route path="/admin/users/add" element={<AddUser />} />
            <Route path="/admin/users/edit/:id" element={<PrivateRoute><EditUser /></PrivateRoute>} />

            {/* Projects */}
            <Route path="/admin/projects" element={<PrivateRoute><ProjectsList /></PrivateRoute>} />
            <Route path="/admin/projects/add" element={<PrivateRoute><AddProject /></PrivateRoute>} />
            <Route path="/admin/projects/edit/:id" element={<PrivateRoute><EditProject /></PrivateRoute>} />

            {/* Services */}
            <Route path="/admin/services" element={<PrivateRoute><ServiceList /></PrivateRoute>} />
            <Route path="/admin/services/add" element={<PrivateRoute><AddService /></PrivateRoute>} />
            <Route path="/admin/services/edit/:id" element={<PrivateRoute><EditService /></PrivateRoute>} />

            {/* References */}
            <Route path="/admin/references" element={<PrivateRoute><ReferenceList /></PrivateRoute>} />
            <Route path="/admin/references/add" element={<PrivateRoute><AddReference /></PrivateRoute>} />
            <Route path="/admin/references/edit/:id" element={<PrivateRoute><EditReference /></PrivateRoute>} />
        </Routes>
    </div>)
}
export default MainRouter