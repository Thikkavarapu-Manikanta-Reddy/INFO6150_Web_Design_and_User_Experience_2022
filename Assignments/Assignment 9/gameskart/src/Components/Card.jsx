import React from 'react'

function Card(props) {
  return (
    <div >
        <img src={props.src} alt="pic" width="250" height="250" className='mt-5 ms-5' />
        <span className="ms-5 mt-5">{props.title}</span>
    </div>
  )
}

export default Card