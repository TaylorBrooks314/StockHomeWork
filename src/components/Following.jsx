import React from 'react'
import { useContext } from 'react'
import { StockContext } from './StockContext'

function Following() {
    const { followList } = useContext(StockContext)
  return (
    <div>{followList}</div>
  )
}

export default Following