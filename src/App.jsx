import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Detail from './pages/Detail'

import ProductList from './pages/ProductList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:productId" element={<Detail/>} />
      </Routes>
    </Router>
  )
};

export default App;