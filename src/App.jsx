import { useState } from 'react'
import HomePage from './components/Home/Home'
import ShopPage from './components/Shop/Shop'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [page, setPage] = useState("HOME")
  return (
    <div className="App">
      {page === "HOME" && <HomePage />}
      {page === "SHOP" && <ShopPage />}
      <Navbar navigate={setPage} />
    </div>
  );
}

export default App;
