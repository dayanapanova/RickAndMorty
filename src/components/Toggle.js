import React from 'react';
import styled,{css} from 'styled-components';
const Toggle = styled.div`
  display: block;
  width: 40px;
  height: 24px;
  position: relative;
  margin-left: 20px;
  cursor: pointer;
  z-index: 1;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: ${({theme})=>(theme.colors.light)};
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 9px;
    }

    &:nth-child(4) {
      top: 18px;
    }
  }

  
  ${({isOpen})=>(isOpen ? css`
  span {
      &:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }

      &:nth-child(2) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }

      &:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
    }
  ` : ``)}
`

const ToggleComponent = ({isOpen,onClick}) => (
    <Toggle isOpen={isOpen} onClick={onClick}>
        <span/>
        <span/>
        <span/>
        <span/>
    </Toggle>
)

export default ToggleComponent;