import styled from 'styled-components';
import { device } from 'utils/device';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  width: 56px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #111111;
  margin-right: 10px;

  font-size: 14px;
  line-height: 19px;

  @media ${device.tablet} {
    width: 83px;
    font-size: 18px;
    line-height: 25px;
    margin-right: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  width: 30px;
  height: 30px;
  `;

export const Input = styled.input`
  width: 170px;
  height: 24px;
  margin-right: 14px;
  padding-left: 12px;
  border: 1px solid transparent;
  font-weight: 400;
  letter-spacing: 0.04em;

  font-size: 14px;
  line-height: 19px;

  color: #111111;
  background-color: #FFFFFF;
  outline: none;
  ${({ active }) => active && `
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  `} @media ${device.tablet} {
    width: 216px;
    height: 32px;
    font-size: 18px;
    line-height: 25px;
    margin-right: 24px;
  }
`;

export const SpanValidation = styled.span`
  color: red;
  font-size: 14px;
  line-height: 22px;
  margin-left: 69px;
  @media ${device.tablet} {
    margin-left: 111px;
  }
  `;

