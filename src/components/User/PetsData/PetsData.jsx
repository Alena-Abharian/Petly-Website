import PetsList from '../PetsList';
import ModalAddsPet from '../ModalAddsPet';
import { useState } from 'react';

import {
  Button,
  DivWrap,
  DivWrapperMain,
  ImgAdd,
  DivBtn,
  Title,
} from './PatsData.styled';
import addIcon from 'assets/icons/plus.svg';

function PetsData() {
  const [showModal, setShowModal] = useState(false);

  const onBtnAddPetClick = () => {
    setShowModal(true);
  };
  return (
    <DivWrapperMain>
      <DivWrap>
        <Title>My pets:</Title>
        <DivBtn>
          Add pet
          <Button onClick={onBtnAddPetClick}>
            {' '}
            <ImgAdd src={addIcon} alt="" />
          </Button>
        </DivBtn>
      </DivWrap>
      {showModal && <ModalAddsPet setShowModal={setShowModal} />}
      <PetsList />
    </DivWrapperMain>
  );
}

export default PetsData;
