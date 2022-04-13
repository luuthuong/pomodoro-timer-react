import React, { useState } from 'react'

import './drop.scss'

const Drop = (props) => {
    const [active,setActive]=useState(false);
    const [content,setContent] = useState();
  return (
    <div >
        <div onClick={()=>{setActive(!active);}} className="drop-input capitalize">{content||props.placeholder}</div>
        <div className={`drop-expand ${active?'active':''}`}>
            <h1 className="text-center text-gray-400 font-semibold">{props.content||props.placeholder}</h1>
            <div className={"drop-content min-h-[50px]"}>
                {
                    props.data?props.data.map((item,index)=>{
                        return(
                            <div key={index} onClick={()=>{
                                setContent(item.title);
                                setActive(!active)
                            }} className="content-item capitalize ">
                                {item.title}
                            </div>
                        )
                    }):'No task'
                }
            </div>
        </div>
    </div>
  )
}

export default Drop