import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./lib/pages/HomePage";
import { ROUTES } from "./lib/routes/routePaths";
import Layout from "./lib/components/Layout";
import AboutPage from "./lib/pages/AboutPage";
import ContactPage from "./lib/pages/ContactPage";
import SessionsPage from "./lib/pages/SessionsPage";
import BookingPage from "./lib/pages/BookingPage";

function App() {
  return (
    <div className="min-h-screen h-auto">
      <Router>
        <Routes>
          {/* Home Page */}
          <Route
            path={ROUTES.HOME}
            element={
              <Layout showHeader={true} showFooter={true}>
                <HomePage />
              </Layout>
            }
          />

          {/* About Us Page */}
          <Route
            path={ROUTES.ABOUT_US}
            element={
              <Layout showHeader={true} showFooter={true}>
                <AboutPage />
              </Layout>
            }
          />

          {/* Sessions Page */}
          <Route
            path={ROUTES.SESSIONS}
            element={
              <Layout showHeader={true} showFooter={true}>
                <SessionsPage />
              </Layout>
            }
          />

          {/* Contact Page */}
          <Route
            path={ROUTES.CONTACT}
            element={
              <Layout showHeader={true} showFooter={true}>
                <ContactPage />
              </Layout>
            }
          />

          {/* Contact Page */}
          <Route
            path={ROUTES.BOOKING}
            element={
              <Layout showHeader={true} showFooter={true}>
                <BookingPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
