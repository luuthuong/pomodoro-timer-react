const date=new Date()


const getDate=(d)=>{
    return d.getDay()+'/'+d.getMonth()+'/'+d.getFullYear()
}
const getTime=(d)=>{
    return d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
}

const datetime={
   getDate:getDate(date),
    getTime:getTime(date)
}
export default datetime