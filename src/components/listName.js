import React from 'react'

export default ({data, filterText, addFavourite}) => {
    
            const listName = data
            .filter(name =>{
                // sortera ut name som inte innehåller de användaren skriver
                return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
            })
            .map(name => {
              return (
                <li 
                key={name.id} 
                className={name.sex}
                onClick={()=> addFavourite(name.id)}
                >
                  {name.name}
                </li>
              )
            })
            return (
                <div>
                    <ul>
                        {listName}
                    </ul>
              </div>
            );
}

