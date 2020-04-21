import React from 'react';
import { useState } from 'react';
import useModal from '../modals/useModal'
import Modal from '../modals/Modal'
import AbilityModal from '../modals/AbilityModal'

const ClassView = ({classData, classAbilities}) => {

  const {isOpen, displayModal} = useModal();
  const [curModalIdx, setCurModalIdx] = useState(0);

  // const abilitiesDict = createAbilityDict();
  const buttons = createAbilityButtons();

  // function createAbilityDict(){
  //   let dict = {};

  //   for (const idx in classAbilities){
  //     dict[idx] = classAbilities[idx]
  //   }
    
  //   return (dict)
  // };

  function createAbilityButtons(){
    let buttons = []

    for (const idx in classAbilities){
      buttons.push(<button id={idx} onClick={handleOnClick}>{classAbilities[idx].name}</button>)
    }

    return (buttons)
  }

  function handleOnClick(event){
    const id = event.target.id;
    // console.log(id);
    setCurModalIdx(id);
    displayModal();
  }

  return(
    <div>
      <p>{classData.description}</p>

      {buttons}
      {/* <button onClick={displayModal}>{classAbilities[0].name}</button> */}
      <Modal isOpen={isOpen} toggle={displayModal} ability={classAbilities[curModalIdx]}>
        <AbilityModal abilityData={classAbilities[curModalIdx]}></AbilityModal>
      </Modal>

    </div>
  );
}

export default ClassView;