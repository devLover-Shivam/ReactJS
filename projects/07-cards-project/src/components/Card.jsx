import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div className='card'>
          <div className='top'>
            <img src={props.logo} alt="" />
            <button>Save <Bookmark size={20}/></button>
          </div>
          <div className='center'>
              <h3>{props.comp} <span>{props.post}</span></h3>
              <h2>{props.designation}</h2>
              <div className='tag'>
                <h4>{props.time}</h4>
                <h4>{props.lev}</h4>
              </div>
          </div>
          <div className="bottom">
              <div>
                <h3>{props.pay}</h3>
                <p>{props.loc}</p>
              </div>
              <button>Apply Now</button>
          </div>
      </div>
  )
}

export default Card
