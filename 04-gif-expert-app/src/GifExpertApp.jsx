import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  console.log(categories);

  return (
    <>
        <h1>GiftExpert</h1>

        <ol>
          { categories.map( category => {
              return <li key={ category }>{ category }</li>;
            })
          }
        </ol>
    </>
  );
};