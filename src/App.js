import "./App.css";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import Navbar from "./components/Navbar";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Features from "./components/Features";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition";
import Imprint from "./pages/Imprint";
import CookiePolicy from "./pages/CookiePolicy";
import DPA from './pages/dpa';
import Logo from './pages/Logo';
import AboutUs from "./pages/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FAQ from "./pages/FAQ";
//import CookieConsentLib from "./components/CookieConsentLib";
import NewArithmoWorks from "./components/NewArithmoWorks";
import NewBlogs from "./pages/NewBlogs";
import BlogPostView1 from "./pages/BlogPostsView/BlogPostView1";
import BlogPostView2 from "./pages/BlogPostsView/BlogPostView2";
import BlogPostView3 from "./pages/BlogPostsView/BlogPostView3";
import BlogPostView4 from "./pages/BlogPostsView/BlogPostView4";
import BlogPostView5 from "./pages/BlogPostsView/BlogPostView5";
import BlogPostView6 from "./pages/BlogPostsView/BlogPostView6";
import SignUp from "./pages/SignUp";

ReactGA.initialize(process.env.REACT_APP_GA_KEY);

function App() {
  const location = useLocation();

  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (location.pathname.split("/")[1] === "sign-up") setIsSignUp(true);
    else setIsSignUp(false);
    ReactGA.pageview(location.pathname + location.search);
  }, [location.pathname]);

  return (
    <div>
      <header className="bg-white sticky top-0 z-50 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="relative">{!isSignUp && <Navbar />}</div>
      </header>
      <Routes>
      <Route exact path="App.js}" component={Home} />
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/howitworks" element={<ArithmoWorks />} /> 
        <Route path="/howitworks" element={<NewArithmoWorks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<GetInTouch />} />*/}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/dpa" element={<DPA />} />
        <Route path="/logo" element={<Logo />} />
        {/*<Route path="/imprint" element={<Imprint />} />*/}
        {/*<Route path="/faq" element={<FAQ />} />
        <Route path="/blogs" element={<NewBlogs />} />
        <Route path="/blog-post-view1" element={<BlogPostView1 />} />
        <Route path="/blog-post-view2" element={<BlogPostView2 />} />
        <Route path="/blog-post-view3" element={<BlogPostView3 />} />
        <Route path="/blog-post-view4" element={<BlogPostView4 />} />
        <Route path="/blog-post-view5" element={<BlogPostView5 />} />
        <Route path="/blog-post-view6" element={<BlogPostView6 />} />
        <Route path="/sign-up" element={<SignUp />} />*/}
      </Routes>
      {/*!isSignUp && <CookieConsentLib />*/}
      {!isSignUp && <Footer />}
    </div>
  );
}

export default App;
