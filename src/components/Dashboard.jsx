import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StockContext } from './StockContext'
import '../styles/Dashboard.css'
function Dashboard() {
  const {stocks,setCurrentStock }= useContext(StockContext)

  
  return (
    <div className='DashBoard'>
      <h1>Stocks</h1>
      <header className='stockHeader'>
      <p>Company Name</p>
      <p>Price</p>
      <p>Change</p>
      
      </header>
      <h1>_____________________________________________________________________________</h1>
      {stocks.map((stock)=>{
      let change = (stock.lastPrice+stock.change*stock.lastPrice).toFixed(2);
      let color = 'green'
      change>stock.lastPrice ? color = 'green': color = 'red'
      
      return(
        <div className='stockData' key={stock.name}>

          <Link className='stockLink' to={`/stock/${stock.symbol}`}onClick={()=>{setCurrentStock(stock)}}>{stock.name}</Link>
          
          <p className='stockP price' >{stock.lastPrice}</p>
          <p className='stockP' style={{color:color}}>{change} ({stock.change.toFixed(2)}%)</p>
          
          
          </div>
      )
    })}</div>
    
  )
}

export default Dashboard