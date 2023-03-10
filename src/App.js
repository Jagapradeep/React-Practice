import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/common/navBar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MoviesForm from "./components/moviesForm";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import "./App.css";
import RegisterForm from "./components/registerForm";

function App() {
  const items = [
    { title: "Movies", path: "/movies" },
    { title: "Customers", path: "/customers" },
    { title: "Rentals", path: "/rentals" },
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
  ];
  return (
    <>
      <NavBar items={items} />
      <main>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movies/:id" element={<MoviesForm />} />
          <Route exact path="/customers" element={<Customers />} />
          <Route exact path="/rentals" element={<Rentals />} />
          <Route exact path="/notFound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notFound" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
