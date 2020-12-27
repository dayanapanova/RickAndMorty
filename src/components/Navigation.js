import React,{useState} from 'react';
import {  Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LogoIcon, EpisodeIcon, CharacterIcon } from '@/icons';
import {Menu,Toggle} from '@/components'


const Navigation = styled.div`
    z-index:2;
    position: fixed;
    top: 0;
    ${({ theme }) => css`
        @media ${theme.mediaQueries.smDown} {
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:5px 15px;
            background-color: ${({ theme }) => theme.colors.primary};
            right:0;
            left:0;
            height:50px;
        }

        @media ${theme.mediaQueries.mdUp} {
            height: 100%;
            width: ${({ theme }) => theme.sizes.sideBarWidth}px;
            background-color: ${({ theme }) => theme.colors.primary};
            padding: 20px 0;
        }
    `}
`
const LogoSvg = styled(LogoIcon)`
    width: 50px;
    height: 50px;
    fill: #fff;
    margin: 0 auto;
    display: block;
`
const ToggleWrapper = styled.div`
${({ theme }) => css`
        @media ${theme.mediaQueries.mdUp} {
            display:none;
        }

        
    `}
`



export default () => {
    const [isOpen, setIsOpen]= useState(false);
    return (
        <Navigation>
            <Link to="/">
                <LogoSvg />
            </Link>
            <ToggleWrapper>
                <Toggle isOpen={isOpen} onClick={()=>setIsOpen(!isOpen)}/>
            </ToggleWrapper>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
            
        </Navigation>
    )
};
