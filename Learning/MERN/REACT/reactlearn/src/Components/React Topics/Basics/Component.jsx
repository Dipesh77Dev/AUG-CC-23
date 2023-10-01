import React from 'react'
import name1 from './ImpExp1'
import anotherFile, { name2, myName1, myName2, myName3 } from './ImpExp1'
import * as impExp2 from './impExp2'
import { name5, name6, myName4, myName5, myName6 } from './impExp2'

const Component = () => {
    return (
        <div>
            <h1>My Name is Dipesh</h1>
            <p>My friends are - </p>
            <ol>
                <li>Mandar</li>
                <li>Tarun</li>
                <li>Vedant</li>
                <li>Priya</li>
                <li>Sayali</li>
                <li> {name1} - {myName3()}</li>
                <li> {anotherFile} </li>
                <li> {name2} </li>
                <li> {myName1} </li>
                {/* <li> {myName4} - {myName4()} </li> */}
                <li> {myName1()} </li>
                <li> {myName2()} </li>
            </ol>
            <hr />
            <ul>
                <li>{impExp2.name5}</li>
                <li>{impExp2.name6}</li>
                <li>{impExp2.myName4()}</li>
                <li>{impExp2.myName5()}</li>
                <li>{impExp2.myName6()}</li>
            </ul>
            <hr />
            <ul>
                <li>{name5}</li>
                <li>{name6}</li>
                <li>{myName4()}</li>
                <li>{myName5()}</li>
                <li>{myName6()}</li>
            </ul>
        </div>
    )
}

export default Component