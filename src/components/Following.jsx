// import React from 'react'
import { useContext } from 'react'
import { StockContext } from './StockContext'
import '../styles/Following.css'
function Following() {
    const { followList } = useContext(StockContext)
    console.log(followList.length)
    return (

        followList.length < 1 ? <div className='listItem'>
            <h1>Following List</h1>
            <h1>____________________</h1>
            <h2>Go Follow Something</h2></div> : <div className='followingContainers'>
            <h1>Following List</h1>
            <h1>____________________</h1>
            {followList.map((follow) => {
                return (
                    <h1 key="">{follow}</h1>
                )


            })}
        </div>

    )
}

export default Following