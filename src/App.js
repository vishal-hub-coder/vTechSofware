import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Serverices from "./pages/Serverices";
import Crm from "./features/Crm";
import BookDemo from "./pages/BookDemo";
import Erp from "./features/Erp";
import SaleManagement from "./features/SaleManagement";
import PayrollManagement from "./features/PayrollManagement";
import ServiceManagement from "./features/ServiceManagement";
import AMCManagement from "./features/AMCManagement";
import InventoryManagement from "./features/InventoryManagement";
import AccountingManagement from "./features/AccountingManagement";
import PricingPage from "./features/PricingPage";
// import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import SupportPage from "./pages/SupportPage";
import CustomerPage from "./pages/CustomerPage";
import Manufecturing from "./features/Manufecturing";
import ProductionPage from "./features/ProductionPage";
import ProcessManagementPage from "./features/ProcessManagementPage";
import ProjectManageMent from "./features/ProjectManageMent";
import AboutCompany from "./pages/AboutCompany";
import WhatsAppButton from "./layout/WhatsAppButton";
import AddBlog from "./pages/AddBlog";
import ScreenProtect from "./components/screenProtect/ScreenProtect";




const App = () => {
  return (
    <Router>
      {/* <ScreenProtect /> */}
      
       <ToastContainer 
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          
          <Route index element={<HomePage />} />
          <Route path="/register-page"   element={<RegisterPage/>}/>
          {/* <Route path="/login" element={<LoginPage/>}/> */}
          <Route path="/industories" element={<About />} />
          <Route path="/explore-our-services" element={<Serverices />} />
          <Route path="/crm-feature-section" element={<Crm />} />
          <Route path="/erp-feature-section" element={<Erp/>}/>
          <Route path="/sales-management" element={<SaleManagement/>}/>
          <Route path="/add-blog" element={<AddBlog />} />

          <Route path="/payroll-management" element={<PayrollManagement/>}/>
          <Route path="/services-mnagement" element={<ServiceManagement/>}/>
          <Route path="/cloud-solutions" element={<AMCManagement/>}/>
          <Route path="/inventory-management" element={<InventoryManagement/>}/>
          <Route path="/account-management" element={<AccountingManagement/>}/>
          <Route path="/menufecturing-management" element={<Manufecturing/>}/>
          <Route path="/production" element={<ProductionPage/>}/>
          <Route path="/process-management" element={<ProcessManagementPage/>}/>
          <Route path="/project-management" element={<ProjectManageMent/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/book-demo-section" element={<BookDemo/>}/>
          <Route path="/support" element={<SupportPage/>}/>
          <Route path="/customers" element={<CustomerPage/>}/>
          <Route path="/about-company" element={<AboutCompany/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
      <WhatsAppButton/>
    </Router>
  );
};

export default App;
