import React from 'react';
import Grandchild from './Grandchild'


const Child = (props) => {

  return (
    <div>
     
     <section className="child">
     <Grandchild/>
     </section>
      
    </div>
  );
}

export default Child;
