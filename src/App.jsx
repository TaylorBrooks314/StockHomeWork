import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Stock from './components/Stock'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import { StockContextProvider } from './components/StockContext'
import Following from './components/Following'
const stocks = [
  { name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5 },
  { name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12 },
  { name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842 },
  { name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08 },
  { name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91 },
  { name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58 }
]


function App() {



  // const [count, setCount] = useState(0)
  async function getData() {
    const response = await fetch("https://financialmodelingprep.com/api/v3/historical-price-full/BTCUSD?apikey=YOUR_API_KEY");
    const stocks = await response.json();
    console.log(response);
  }

  // useEffect(()=>{
  //   getData()
  // },[])
  return (


    <StockContextProvider>
      <NavBar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />

        <Route element={<Stock />} path='/stock/:symbol' />
        <Route element={<Dashboard />} path='/stock' />
        <Route element={<Following />} path='/follow' />

      </Routes>
    </StockContextProvider>

  )
}

export default App
