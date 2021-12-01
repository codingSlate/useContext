import React from 'react';
import {useState} from "react";
import UserContext from '../store/store.context';
import Comp2 from './Comp2'


function Comp1(){
    const [user, setUser] = useState({name:"Kiran"})

    const onChangeHandler = (data) =>{
        // console.log("Data ", data.name);
        setUser(()=>{
            return {name: data.name}
        })
    }
    return(
        <div>
            <h1>I am comp 1</h1>
            <UserContext.Provider value={{user, changeNameFn: onChangeHandler}} > 
                <Comp2/>
            </UserContext.Provider>
        </div>
    )
}
export default Comp1