import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import { StyledButton } from 'components/Common/Button/Button.styled';
import { device } from 'utils/device';

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: ${p => `${p.theme.space[5] + 8}px`};

  padding: ${p => `${p.theme.space[3] + 5}px ${p.theme.space[4] + 4}px`};
  background: ${p => p.theme.colors.primaryBackground};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: ${p => p.theme.radii.xxl};
  outline: none;
  color: rgba(17, 17, 17, 0.8);

  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacing.l};

  &::placeholder {
    color: ${p => p.theme.colors.text.dataText};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.hover};
    transition: border-color ${p => p.theme.animation.cubic};
  }
  @media ${device.fablet} {
    height: ${p => `${p.theme.space[5] + 20}px`};

    font-size: 18px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;

  @media ${device.fablet} {
    width: ${p => `${p.theme.space[9] + 96}px`};
    padding: ${p => `${p.theme.space[4] + 28}px ${p.theme.space[6] + 16}px`};
    background: ${p => p.theme.colors.white};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: ${p => p.theme.radii.xxl};
  }

  @media ${device.tablet} {
    width: ${p => `${p.theme.space[9] + 106}px`};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[4] + 8}px`};
`;

export const InputsWrp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => `${p.theme.space[4]}px`};
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const TextError = styled.span`
  position: absolute;
  color: red;
  bottom: ${p => `-${p.theme.space[4]}px`};
  left: ${p => `${p.theme.space[4] + 4}px`};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.colors.text.sectionTitle};

  @media ${device.fablet} {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.title};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.l};
  color: ${p => p.theme.colors.text.dataText};
`;

export const AuthLink = styled(Link)`
  color: ${p => p.theme.colors.text.link};
  text-decoration: underline;
`;

export const AuthBtn = styled(StyledButton)`
  width: 100%;
  padding: ${p => `${p.theme.space[3] + 2}px ${p.theme.space[4] + 12}px`};
  background: ${p => p.theme.colors.button.primaryBackground};
  border-radius: ${p => p.theme.radii.xxl};
  font-size: 20px;
  height: ${p => `${p.theme.space[5] + 11}px`};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hover};
    transition: background-color ${p => p.theme.animation.cubic};
  }

  @media ${device.tablet} {
    height: ${p => `${p.theme.space[5] + 16}px`};
  }
`;
export const EyeBtn = styled.button`
  background-color: inherit;
  position: absolute;
  cursor: pointer;
  top: 8px;

  right: 22px;
  border: none;

  @media ${device.fablet} {
    top: 12px;
  }
`;

export const IconEye = styled(BsFillEyeFill)`
  color: ${p => p.theme.colors.button.primaryBackground};
`;
export const IconEyeSlash = styled(BsFillEyeSlashFill)`
  color: ${p => p.theme.colors.button.primaryBackground};
`;

export const StyledBtnGoogle = styled.button`
  display: inline-block;
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid;

  @media ${device.mobileOnly} {
    border-color: ${({ theme }) => theme.colors.hover};
    border-radius: ${p => p.theme.radii.xxl};
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: ${p => p.theme.lineHeights.body};
    letter-spacing: ${p => p.theme.letterSpacing.xxs};
    padding: ${p => `${p.theme.space[2] + 2}px ${p.theme.space[2] + 6}px`};
    height: ${p => `${p.theme.space[5] + 5}px`};
  }

  @media ${device.fablet} {
    border-color: ${({ theme }) => theme.colors.hover};
    border-radius: ${p => p.theme.radii.xxl};
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.body};
    letter-spacing: ${p => p.theme.letterSpacing.l};
    padding: ${p => `${p.theme.space[2] + 2}px ${p.theme.space[2] + 12}px`};
    height: ${p => `${p.theme.space[5] + 11}px`};
  }

  &:hover,
  &:focus {
    background-color: #e8e8e8;
    transition: background-color ${p => p.theme.animation.cubic};
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const FlexLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
