//React
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Article from "./pages/Article/Article";
import GetUser from "./pages/GetUser/GetUser";
//components
import NavBar from "./compenents/NavBar/NavBar";
import LoadingBlog from "./compenents/LoadingBlog/LoadingBlog";
//authUser
import { useAuth } from "./hooks/useAuth";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <LoadingBlog />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={auth ? <Home /> : <Navigate to="/auth" />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/auth"
            element={!auth ? <Auth /> : <Navigate to="/" />}
          />
          <Route
            path="/article/:id"
            element={auth ? <Article /> : <Navigate to="/auth" />}
          />
          <Route
            path="/profile"
            element={auth ? <Profile /> : <Navigate to="/auth" />}
          />
          <Route
            path="/getUser/:id"
            element={auth ? <GetUser /> : <Navigate to="/auth" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
