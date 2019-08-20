import React from 'react';

export default ({data,favourite }) => {
    const favouriteNames = favourite.map(id =>{
    const {name, sex} = data[id]
        return (
            <li key={id} className={sex}>
                {name}
            </li>
        )
})
    return (
        <div className="favourite">
            <h4>Click on a name to add it to favourite...</h4>

            <ul>
                {favouriteNames}
            </ul>
        </div>
    )
}