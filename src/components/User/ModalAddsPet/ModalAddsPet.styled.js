import styled from 'styled-components';
import { device } from 'utils/device';

export const Backdrop = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  width: 90%;
  max-height: 90%;
  overflow: auto;
  border-radius: 20px;
  padding: 40px 20px;
  background: #ffffff;

  /* @media screen and (min-width: 480px) {
    width: 480px;
  } */
  @media ${device.fablet} {
    width: 480px;
  }
  /* @media screen and (min-width: 768px)  */
  @media ${device.tablet} {
    width: 608px;
    border-radius: 40px;
    padding: 40px 80px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
`;
export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 50%;

  background-color: #fdf7f2;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    top: 20px;
    right: 20px;
  }

  @media screen and (min-width: 1280px) {
    top: 24px;
    right: 24px;
  }
  &:hover {
    background-color: #f59256;
  }
  &:hover .iconClose {
    fill: black;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.38;
  text-align: center;
  color: #111111;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.36;
  }
`;
export const Error = styled.p`
  height: 16px;
  text-align: left;
  font-size: 10px;
  line-height: 12px;
  color: #f59256;
  letter-spacing: 0.04em;
  padding: 5px 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;
export const Descr = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-size: 16px;
  line-height: 1.38;
  text-align: center;
  color: #111111;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20 px;
    line-height: 1.32;
  }
`;
export const Label = styled.label`
  display: block;
  font-family: 'Manrope';
  font-style: normal;

  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.1;
    margin-bottom: 12px;
  }
`;
export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  padding: 11px 14px 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.63;
    padding: 11px 16px 10px;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: rgba(27, 27, 27, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.62;
    }
  }
`;
export const LoadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    border-radius: 40px;
  }
`;
export const InputLoad = styled.input`
  display: none;
`;
export const LabelLoad = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;
  background: #fdf7f2;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  padding: 12px 14px;
  outline: none;
  resize: none;

  @media screen and (min-width: 768px) {
    width: 394px;
    height: 116px;
    padding: 16px;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 1.85;
    letter-spacing: 0.04em;
    color: rgba(27, 27, 27, 0.6);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.62;
    }
  }
`;
export const ImgClose = styled.img`
  width: 21px;
  height: 21px;
`;

export const BlockOfButtons = styled.div`
  display: flex;
  /* flex-direction: column-reverse; */
  margin-top: 12px;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 12px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 180px;
  font-family: 'Manrope';
  font-style: normal;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  color: #111111;
  background-color: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  padding-top: 9px;
  padding-bottom: 9px;

  /* @media screen and (min-width: 480px) {
    &:last-child {
      margin-bottom: 12px;
    } */
  /* } */

  @media screen and (min-width: 768px) {
    width: 180px;
    font-size: 20px;
    line-height: 1.35;

    &:first-child {
      margin-right: 20px;
    }
  }
`;

export const AccentBtn = styled.button`
  display: block;
  width: 180px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  background-color: #f59256;
  color: #ffffff;
  /* color: #111111; */
  /* background-color: #ffffff; */
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  padding-top: 9px;
  padding-bottom: 9px;

  @media screen and (max-width: 768px) {
    width: 180px;
    font-size: 20px;
    line-height: 1.35;
    /*
    &:first-child {
      margin-right: 20px;
    } */
  }
`;

export const ThumbLoadImg = styled.div`
  width: 208px;
  height: 208px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;
