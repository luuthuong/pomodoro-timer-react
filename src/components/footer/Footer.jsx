import React, { useEffect, useState } from 'react'

import './footer.scss'

const quotes=[
  {
    content:"Life is short, smile while you still have teeth.",
    author:'Anonymous'
  }
]

const Footer = () => {
	const [calendar,setCalendar]=useState()
	const getDateTime=()=>{
		const date=new Date()
		const dt=date.toString().split(' ')
        setCalendar({
            date:dt.slice(1,4).join(' '),
            time:dt[4]
        })
	}
	useEffect(() => {      
      const idInterval=  setInterval(getDateTime, 1000);

		return () => {
            idInterval&&	clearInterval(idInterval)
		}
    },[]);
    return (
        <footer className="footer neu-shadow ">
            <div className="footer--container text-white relative z-10">
                    <div className="footer-datetime">
                        <div className="time ">{calendar && calendar.time}</div>
                        <div className="date">{calendar && calendar.date}</div>
                    </div>
                <div className="footer-quote">
                    {quotes.map((quote, index) => {
                        return (
                            <div key={index}>
                                <div className="content">"{quote.content}"</div>
                                <div className="author">-{quote.author}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer