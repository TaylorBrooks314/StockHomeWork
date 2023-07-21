import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { StockContext } from './StockContext'
import '../styles/Stock.css'
function Stock() {
  const { stocks, currentStock, setFollowList, followList, addFollow } = useContext(StockContext)
  const [follow, setFollow] = useState('FOLLOW')
  const params = useParams()
  let stockPick = stocks.filter((stock) => stock.symbol === params.symbol)[0]
  let listCheck = followList.indexOf(stockPick.symbol)
  function btnCheck() {


    if (listCheck >= 0) {
      setFollow('UNFOLLOW')
    }
    else {
      setFollow('FOLLOW')
    }
  }
  useEffect(() => {
    btnCheck()
  },)
  return (
    <div className='stockContainer'>
      <h1>{stockPick.name}</h1>
      <button className='followBtn' onClick={() => {

        addFollow(stockPick.symbol)
        btnCheck()
        console.log(follow)

      }}>{follow}</button>
      <div className='stockTraitsContaier'>
      {Object.entries(stockPick).map((obj) => {
        if (obj[0] === 'change') {
          let change = (stockPick.lastPrice + Object.values(obj)[1] * stockPick.lastPrice).toFixed(2);
          let color = 'green'
          change > stockPick.lastPrice ? color = 'green' : color = 'red'
          return(
            <div className='stockTrait' > <h3 className='stockTraitH' key={Object.values(obj)[0]}>{Object.values(obj)[0]}</h3>
              <h4 className='stockTraitH' style={{color:color}}>{change} ({Object.values(obj)[1].toFixed(2)}%)</h4>
            </div>
          )
        }
        if (obj[0] !== 'name') {
          return (
            <div className='stockTrait' > <h3 className='stockTraitH' key={Object.values(obj)[0]}>{Object.values(obj)[0]}</h3>
              <h4 className='stockTraitH'>{Object.values(obj)[1]}</h4>
            </div>)

        }
        
      
      }

      )}
</div>
    </div>
  )
}

export default Stock