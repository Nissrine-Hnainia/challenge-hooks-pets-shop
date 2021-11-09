import React from 'react'
import CatCard from './CatCard';

const CatsList = ({cats, searchName, rate}) => {
    return (
        <div className="cats">
            {cats.filter(cat => cat.rate >= rate && cat.name.toLowerCase().includes(searchName.toLowerCase())).map((cat, key) => <CatCard cat={cat} key={cat.id}/>)}
        </div>
    )
}


export default CatsList
