import React from 'react';

const ClassView = ({classObj, classAbilities}) => {
  return(
    <div>
      <p>{classObj.description}</p>
      <p>{classAbilities[0].name}</p>
    </div>
  );
}

export default ClassView;