import React from 'react'
import './ListCard.css'

const ListCard = ({object}) => {
  return (
    <>
    <div key={object.id} className="content">
                <p>{object.name}</p>
                <p>{object.email}</p>
                <p>{object.role}</p>
                <p>{object.date}</p>
                <p>{object.number}</p>
                <p><span>view</span> <span>delete</span></p>
            </div>
    </>
  )
}

export default ListCard