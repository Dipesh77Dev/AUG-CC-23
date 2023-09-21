import React from 'react'
import SData from './data.json'

const ConditionalRendering = () => {
    const netData = SData;
    console.log(netData)
  return (
    <>
        {
            netData.map( (cv) => {
                console.log(cv);
                return(
                    {/* img = {cv.img} */}
                )
            })
        }
    </>
  )
}

export default ConditionalRendering