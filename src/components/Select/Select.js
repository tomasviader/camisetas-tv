import './Select.scss'

const Select = ( {talles, onSelect} ) => {

    const handleSelect= (e) => {
        onSelect(e.target.value)
    }

    return (
        <div className="select-talles">
            <select onChange={handleSelect}>
                {
                talles.map((tal) => <option key={tal.value} value={tal.value} > {tal.text} </option>)
                }
            </select>
            
        </div>
    )
}

export default Select