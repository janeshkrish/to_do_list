import React, { use } from 'react';
import ListItems from './ListItems';

const Content = ({items,handleCheck,handleDelete}) => { 
    return (
        <main>
            {(items.length) ? (
               <ListItems 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
               />
            ) : (
                <p style={{marginTop: '2rem'}}>Your List is empty</p>  
            )}
        </main>
    )
}

export default Content;