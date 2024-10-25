import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./components/layout/Layout"
import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"
import AboutAdmin from "./pages/AboutAdmin/AboutAdmin"
import AboutAdminAdd from "./pages/AbouAdminAdd/AboutAdminAdd"
import AboutAdminEdit from "./pages/AboutAdminEdit/AboutAdminEdit"
import ExperienceAdmin from "./pages/ExperienceAdmin/ExperienceAdmin"
import ExperienceAdminAdd from "./pages/ExperienceAdminAdd/ExperienceAdminAdd"
import ExperienceAdminEdit from "./pages/ExperienceAdminEdit/ExperienceAdminEdit"
import ProjectsAdmin from "./pages/ProjectsAdmin/ProjectsAdmin"
import ProjectsAdminAdd from "./pages/ProjectsAdminAdd/ProjectsAdminAdd"
import ProjectsAdminEdit from "./pages/ProjectsAdminEdit/ProjectsAdminEdit"
import SkillsAdmin from "./pages/SkillsAdmin/SkillsAdmin"
import SkillsAdminAdd from "./pages/SkillsAdminAdd/SkillsAdminAdd"
import SkillsAdminEdit from "./pages/SkillsAdminUpdate/SkillsAdminEdit"
import FeedbacksAdmin from "./pages/FeedbacksAdmin/FeedbacksAdmin"
import FeedbacksAdminAdd from "./pages/FeedbacksAdminAdd/FeedbacksAdminAdd"
import FeedbacksAdminEdit from "./pages/FeedbacksAdminEdit/FeedbacksAdminEdit"
import MessagesAdmin from "./pages/MessagesAdmin/MessagesAdmin"
import CvAdmin from "./pages/CVAdmin/CvAdmin"
import StatisticsAdmin from "./pages/StatisticsAdmin/StatisticsAdmin"
import { useEffect, useState } from "react"
// import Blogs from "./pages/Blogs/Blogs"
// import Blog from "./pages/Blog/Blog"
import ErrorPage from "./pages/Error/Error"

function App() {
  const [admin, setAdmin] = useState(localStorage.getItem("admin-moones"));

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/blogs" element={<Blogs/>}/> */}
        {/* <Route path="/blogs/:slug" element={<Blog/>}/> */}
        <Route path="/login" element={!admin?<Login/>: <Navigate to={"/mm-admin"}/>}/>
        <Route path="/mm-admin" element={admin?<Dashboard/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/about-settings" element={admin?<AboutAdmin/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/about-settings/add" element={admin?<AboutAdminAdd/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/about-settings/edit/:id" element={admin?<AboutAdminEdit/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/experience-settings" element={admin?<ExperienceAdmin/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/experience-settings/add" element={admin?<ExperienceAdminAdd/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/experience-settings/edit/:id" element={admin?<ExperienceAdminEdit/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/projects-settings" element={admin?<ProjectsAdmin/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/projects-settings/add" element={admin?<ProjectsAdminAdd/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/projects-settings/edit/:id" element={admin?<ProjectsAdminEdit/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/skills-settings" element={admin?<SkillsAdmin/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/skills-settings/add" element={admin?<SkillsAdminAdd/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/skills-settings/edit/:id" element={admin?<SkillsAdminEdit/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/feedbacks-settings" element={admin?<FeedbacksAdmin/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/feedbacks-settings/add" element={admin?<FeedbacksAdminAdd/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/feedbacks-settings/edit/:id" element={admin?<FeedbacksAdminEdit/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/messages-settings" element={admin?<MessagesAdmin/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/cv-settings" element={admin?<CvAdmin/>: <Navigate to={"/login"}/>}/>
        <Route path="/mm-admin/statistics-settings" element={admin?<StatisticsAdmin/>: <Navigate to={"/login"}/>}/>
        <Route path="*" element={<Navigate to={'/error'}/>}/>
        <Route path="/error" element={<ErrorPage/>}/>
      </Routes>
    </Layout>
  )
}

export default App
