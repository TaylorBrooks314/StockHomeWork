import React,{useContext, useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import { StockContext } from './StockContext'
function Stock() {
  const {stocks,currentStock,setFollowList,followList,addFollow} = useContext(StockContext)
  const  [follow,setFollow] = useState('FOLLOW')
  const params = useParams()
  let stockPick = stocks.filter((stock)=> stock.symbol === params.symbol)[0]
  
  function btnCheck(){
    let listCheck = followList.indexOf(stockPick.symbol)
    console.log(listCheck)
    if(listCheck >=0){
      setFollow('UNFOLLOW')
    }
    else{
      setFollow('FOLLOW')
    }
  }
  useEffect(()=>{
    btnCheck()
  },)
  return (
    <div>
      <h1>Stock Page</h1>
      {Object.entries(stockPick).map((obj)=>

            <h3 key={Object.values(obj)[0]}>{Object.values(obj)[0]} : {Object.values(obj)[1]} </h3>
      )}
      <button onClick={()=>{
        
        addFollow(stockPick.symbol)
        btnCheck()
        console.log(follow)
        
      }}>{follow}</button>
    </div>
  )
}

export default Stock