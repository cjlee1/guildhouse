import React, { Fragment } from 'react';
import {createPortal} from 'react-dom';
import styled from "styled-components";

const Modal = ({isOpen, toggle, children }) => isOpen ? createPortal(
	<>
		<ModalOverlay></ModalOverlay>
		<ModalWrapper>
			<ModalBox>
        <button onClick={toggle}>X</button>
        {children}        
			</ModalBox>
		</ModalWrapper>
	</>, document.body
) : null;

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

const ModalWrapper = styled.div`
	// position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 1050;
  // width: 100%;
  // height: 100%;
  // overflow-x: hidden;
  // overflow-y: auto;
  // outline: 0;
  z-index: 1050;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  `

const ModalBox = styled.div`
	z-index: 100;
	background: white;
	position: relative;
	margin: 1.75rem auto;
	border-radius: 3px;
	max-width: 500px;
  padding: 2rem;
  color: black;
`