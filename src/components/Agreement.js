import React from 'react'

function Agreement() {
    const arr = ["PRODUCT", "FAQ" ,  "TERMS OF SERVICE", "PRIVACY" ,   "TESTIMONIALS" ]
  return (
    <div className='agreement'>
        {
            arr.map((item,index)=>{
                return(
                     <p>{item}</p>
                )
            })
        }
    </div>
  )
}

export default Agreement;