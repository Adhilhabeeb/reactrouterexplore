import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
  const [idda, setidda] = useState([]);
   let {userid}=useParams()
   console.log(userid)

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


    <h1>
        details
    </h1>
    <div>
        {
        idda && idda.map(da=>{
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
    </div>
  </>
  )
}

export default Details