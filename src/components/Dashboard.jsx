import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StockContext } from './StockContext'
function Dashboard() {
  const {stocks,setCurrentStock }= useContext(StockContext)

  
  return (
    <div>
      <p>name</p>
      <p>price</p>
      <p>change</p>
      {stocks.map((stock)=>{
      
      return(
        <div key={stock.name}>

          <Link to={`/stock/${stock.symbol}`}onClick={()=>{setCurrentStock(stock)}}>{stock.name}</Link>
          
          <p>{stock.lastPrice}</p>
          <p>{stock.change}</p>

          </div>
      )
    })}</div>
    
  )
}

export default Dashboard