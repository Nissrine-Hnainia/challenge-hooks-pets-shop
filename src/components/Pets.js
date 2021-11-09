import React, {useState} from 'react'
import { Data } from './Data'
import CatsList from "./Cats/CatsList"
import Search from './Search/Search'

const Pets = () => {
    const [cats, setCats] = useState(Data)
    const [searchName, setSearchName] = useState("")
    const [rate, setRate] = useState(0)
    const handleSearchName = (e) => {
        setSearchName(e.target.value) 
    } 
    
    const handleRate = (x) => {
        setRate(x)
    }

    return (
        <div>
            <Search handleSearchName={handleSearchName} handleRate={handleRate} />
            <CatsList cats={cats} searchName={searchName} rate={rate} />
        </div>
    )
}

export default Pets
