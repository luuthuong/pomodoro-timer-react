import React, { useEffect } from 'react'
import './bubble.scss'


const Bubble = (props) => {
    return (
        <div className="bubble-wrap">
            {new Array(15).fill(0).map((item,index) => { 
				return(
					<div key={index} className={`bubble x${index}`}></div>
				)
			})}
        </div>
    );
};

export default Bubble