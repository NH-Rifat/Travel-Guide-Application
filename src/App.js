import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MoreInfo from "./pages/Home/MoreInfo/MoreInfo";
import Header from "./pages/shared/Header/Header";
import About from "./pages/About/About"
import Blog from "./pages/Blogs/Blog"
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Checkout from "./pages/Checkout/Checkout";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
