import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['CR7', 'Messi']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // categories.push(category);
    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
        {/* titulo */}
        <h1>GiftExpert</h1>

        {/* Input */}
        <AddCategory
          // setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value) }
        />

        {/* Listado de Gif */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}

        <ol>
          { 
            categories.map( ( category ) => (
              <GifGrid
                key={ category }
                category={ category } />
            ))
          }
        </ol>
    </>
  );
};