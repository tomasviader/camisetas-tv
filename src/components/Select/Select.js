import React from 'react'

const Select = ( {talles, onSelect} ) => {

    const handleSelect= (e) => {
        onSelect(e.target.value)
    }


    return (
        <select onChange={handleSelect}>
            {
            talles.map((tal) => <option key={tal.value} value={tal.value} > {tal.text} </option>)
            }
        </select>
    )
}

export default Select