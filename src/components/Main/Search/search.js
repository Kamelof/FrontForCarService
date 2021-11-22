import React, {useState} from "react";
import style from "./search.module.css"
import {NavLink} from "react-router-dom";

const Search = (props) => {
    const [inputValue,setInputValue] = useState('')
    let a = inputValue
    console.log('inputValue',a)
    return (
        <div>
                <div className={style.allBorder}>
                    <div>
                        <input placeholder={"Search"} name={"search"} value={inputValue}
                               onChange={(e)=>{setInputValue(e.target.value)}}/>
                    </div>
                    <div>{a = '' ? <NavLink to="/cars">CarsShow</NavLink>:<></> }

                    </div>
                    <div></div>
                </div>
        </div>
    )
}

export default Search;