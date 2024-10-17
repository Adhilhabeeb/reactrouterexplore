import React, { useEffect, useState } from 'react'
 import axios from "axios"
import { Link,Navigate,useNavigate,useSearchParams } from 'react-router-dom';

function Use() {

let  navigate=  useNavigate()
  const [state, setstate] = useState([]);

  let [spara,setspara]=useSearchParams()
  function selectchange(e) {

    setspara({
      class:e.target.value,myname:"adhil"
    })
   }
  let  cclas=spara.get("class")
  console.log(cclas,"ppppuutt")
useEffect(() => {
  
  axios('data.json').then(resp=>{
setstate(resp.data)
console.log(resp)

  })
}, []);
  return (

    <>
      <select name="cars" id="cars" onChange={selectchange}>
  <option value="1">Volvo</option>
  <option value="2">Saab</option>
  <option value="3">Mercedes</option>

</select>
 <div>     
  <button   onClick={()=>   {
navigate("/",

  {state:{
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }}
)
  }} >navigateto 1</button>
  
  <button   onClick={()=>   {
navigate(-1)
  }} >  back -1</button>
    <button   onClick={()=>   {
navigate(-1,{
  replace:true
})
  }} >  back -1 without replacin history</button>
  
  {
   state.
  filter((da)=>{

    if(!cclas){
      return true;
    }
    return  da.id==cclas
  }).map(e=>{
return(
  



  <Link style={{textDecoration:"none"}}         to={`/details/${e.id}`}      >



  <div className='users' >



<h1>

{e.title}
</h1><br/>

</div>
  </Link>)

   })
    }


    </div>
    </>
   
  )
}

export default Use