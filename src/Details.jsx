import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useSearchParams ,Route,Routes,NavLink } from 'react-router-dom'
import Adhil from './Adhil';
import Alfin from './Alfin';
import Esha from './Esha';

function Details() {
  const [idda, setidda] = useState([]);
   let {userid}=useParams()



   let [spara,setspara]=useSearchParams()
   let  cclas=spara.get("class")
   console.log(cclas,"ppppuuttdetail")

   useEffect(()=>{
axios("/data.json").then(res=>{
   let respdata=res.data.filter(da=>{
   return  da.id==userid;
   })
   

  setidda(respdata)

   console.log("ppppp",respdata,"oo")
})
   },[userid])

  return (
  <>
     <div className='adhil'>
     <NavLink to={""} end  >
    adhil
</NavLink>  <br>
</br>
<NavLink to={"alfin"}>
    alfin
</NavLink><br></br>

<NavLink to={"esha"}>
    esha
</NavLink>
     </div>


<button   onClick={()=>   {
navigate(-1,{
  replace:true
})
  }} >  back -1 without replacin history</button>
    <h1>
        details
    </h1>
    <div>
        {
        idda.filter(da=>{
            console.log(da,"ooo")
if(!cclas){
    return true
}else{
    if(cclas==da.id){
       

       return da
    }
}


        }).map(da=>{
return (
<>
<h1>

{da.id}
</h1>
<h5>

    {da.title}
</h5>
</>
   
)
        })
        }




<Routes>
<Route path='' element={<Adhil/>}/>
<Route path='alfin' element={<Alfin/>}/>
<Route path='esha' element={<Esha/>}/>

</Routes>

    </div>
  </>
  )
}

export default Details