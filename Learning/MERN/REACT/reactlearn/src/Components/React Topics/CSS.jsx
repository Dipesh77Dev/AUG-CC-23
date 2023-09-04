import React from 'react'
import './CSS.css'

const CSS = () => {
    const name = "Goku", name1 = "Vegeta";
    const img1 = "https://picsum.photos/200/300.webp";
    const img2 = "https://picsum.photos/id/237/200/300";
    const img3 = "https://picsum.photos/200/300?grayscale";
    const img4 = "https://picsum.photos/200/300/?blur=2";
    const link = "https://www.youtube.com";

    // const heading = {
    //     key: 'value',
    //     display: 'flex',
    // }

    const internalCSS = { display: 'flex', flexDirection: 'row', width: '100%', height: '250px', justifyContent: 'space-around', marginTop: '40px' }

    return (
        <>
            {/* <h3 class="heading1">My name is {name}</h3> */}

            {/* External CSS */}
            <h3 className="heading1">My name is {name}</h3>

            {/* Inline CSS - We should understand style as an object property. */}

            {/* <div style='text-align: center'>Hello</div> */}
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '250px', justifyContent: 'space-around', marginTop: '40px' }}>
                <img src={img1} alt='Not found' />
                <img src={img2} alt='Not found' />
                <img src={img3} alt='Not found' />
                <img src={img4} alt='Not found' />
            </div>
            <hr />

            {/* Google Font in CSS */}
            <h3 className="heading1 heading2">My name is {name1}</h3>

            {/* Internal CSS */}
            <div style={internalCSS}>
                <img src={img1} alt='Not found' />
                <img src={img2} alt='Not found' />
                <img src={img3} alt='Not found' />
                <img src={img4} alt='Not found' />
            </div>
        </>
    )
}

export default CSS