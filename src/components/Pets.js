import React, {useRef, useState} from 'react'
import { Data } from './Data'
import CatsList from "./Cats/CatsList"
import Search from './Search/Search'

const Pets = () => {
    const [cats, setCats] = useState(Data)
    const [searchName, setSearchName] = useState("")
    const [rate, setRate] = useState(0)
    const handleSearchName = () => {
        setSearchName(document.getElementById('input').value) 
    } 
    // since the e.target returns the element that triggered the event, the handleSearchName
    //could only be passed to the element itself 
    //So instead I selected the input from the dom and passed the handleSearchName to the button
    const handleRate = (x) => {
        setRate(x)
    }
    return (
        <div>
            <Search handleSearchName={handleSearchName} searchName={searchName} handleRate={handleRate} />
            <CatsList cats={cats} searchName={searchName} rate={rate} />
        </div>
    )
}

export default Pets
