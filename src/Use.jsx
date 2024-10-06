import React, { useEffect, useState } from 'react'
 import axios from "axios"
import { Link } from 'react-router-dom';

function Use() {
  const [state, setstate] = useState([]);

useEffect(() => {
  
  axios('data.json').then(resp=>{
setstate(resp.data)
console.log(resp)

  })
}, []);
  return (
    <div>{
   state.map(e=>{
return(
  <Link style={{textDecoration:"none"}}         to={`/details/${e.id}`}      >



  <div className='users'>

<h1>

{e.title}
</h1><br/>

</div>
  </Link>)
    console.log(e)
   })
    }</div>
  )
}

export default Use