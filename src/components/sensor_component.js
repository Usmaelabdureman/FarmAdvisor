import React from 'react'
import logo from "../image/Vector (1).png"
import dots from "../image/dots.png"

const SensorComponent=({GDD})=> {
    const data = [
        {
            sNumber: '998766555',
            GDD: '677 Recent added gdd',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
        {
            sNumber: '998766555',
            GDD: '677',
        },
    ]
    return (
        <>
        <div className='sensor_parent_div displaySensor'>
            <div className='inside' >
                <img src={logo} height="26" width="26" style={{marginRight:"7.5rem"}} />
            <img src={dots} style={{marginLeft:"8rem", marginTop:"-3.5rem"}} />

            </div>
            <p className='first-txt'>766663</p>
            
            <p className=''>{GDD}</p>
        </div>

<div className='sensor_parent_div displaySensor'>
<div className='inside' >
    <img src={logo} height="26" width="26" style={{marginRight:"7.5rem"}} />
<img src={dots} style={{marginLeft:"8rem", marginTop:"-3.5rem"}} />

</div>
<p className='first-txt'>766663</p>

<p className=''>{GDD}</p>
</div>
<div className='sensor_parent_div displaySensor'>
            <div className='inside' >
                <img src={logo} height="26" width="26" style={{marginRight:"7.5rem"}} />
            <img src={dots} style={{marginLeft:"8rem", marginTop:"-3.5rem"}} />

            </div>
            <p className='first-txt'>766663</p>
            
            <p className=''>{GDD}</p>
        </div>
        </>
    )
}

export default SensorComponent