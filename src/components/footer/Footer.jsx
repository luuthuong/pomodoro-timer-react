import React, { useEffect, useState } from 'react'

import './footer.scss'

const quotes=[
  {
    content:"Life is short, smile while you still have teeth.",
    author:'Anonymous'
  }
]

const Footer = () => {
	const [time,setTime]=useState()
	const getDateTime=()=>{
		const date=new Date()
		const dt=date.toString().split(' ')
		setTime([
			{

			}
		])
		console.log(dt );
	}
	useEffect(() => {      
      const idInterval=  setInterval(getDateTime, 1000);
		return () => {
			clearInterval(idInterval)
		}
    },[]);
    return (
        <footer className="footer neu-shadow ">
            <div className="text-white relative z-10">
                <div className="footer-datetime">

				</div>
                <div className="footer-quote">
                    {quotes.map((quote, index) => {
                        return (
                            <div key={index} >
                                <div>"{quote.content}"</div>
                                <div>-{quote.author}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer