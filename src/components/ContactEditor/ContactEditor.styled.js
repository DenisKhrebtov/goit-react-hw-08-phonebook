import styled from 'styled-components';

export const EditorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
export const EditLabel = styled.label`
  color: yellow;
`;

export const InputName = styled.input`
  padding-left: 5px;
  border-radius: 3px;
  margin-left: 15px;

  height: 20px;
  font-size: 18px;

  :hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 200ms;
  }
`;

export const InputNumber = styled.input`
  padding-left: 5px;
  border-radius: 3px;
  margin-left: 15px;

  height: 20px;
  font-size: 18px;

  :hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 200ms;
  }
`;

export const EditBtn = styled.button`
  align-self: center;
  border-radius: 9px;
  :hover,
  :focus {
    transform: scale(1.2);
    transition: transform linear 200ms;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const Modal = styled.div`
  width: 300px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid black;
  position: relative;
`;

export const CloseButton = styled.button``;
