import React from 'react';
import { NavLink,  } from 'react-router-dom';
import styled,{css} from 'styled-components';
import { EpisodeIcon, CharacterIcon } from '@/icons';

const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 30px 0 0 0;
    ${({ theme,isOpen }) => css`
        @media ${theme.mediaQueries.smDown} {
            display:${isOpen ? 'block': 'none'};
            position:absolute;
            width:100%;
            height:100vh;
            background-color:red;
            top:30px;
            left:0;
        }
    `};

`

Menu.Item = styled(NavLink)`
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    padding: 10px 0;
    

    &.active {
        background-color: ${({ theme }) => theme.colors.orange};
    }

    svg {
        fill: #fff;
        display: block;
        margin: 0 auto;
        width: 30px;
        height: 30px;
    }
`



const MENU_ITEMS = [
    {
        to: '/',
        label: 'Episodes',
        icon: EpisodeIcon,
    },
    {
        to: '/characters',
        label: 'Characters',
        icon: CharacterIcon,
    }
]

const MenuComponent = ({isOpen,setIsOpen})=> {
    
    return(
        <Menu isOpen={isOpen}>
                {MENU_ITEMS.map(({ label, to, icon: Icon }, index) => (
                    <li key={`${label}-${index}`}>
                        <Menu.Item to={to} exact onClick={()=>setIsOpen(false)}>
                            <Icon />
                            {label}
                        </Menu.Item>
                    </li>
                ))}
            </Menu>
    )
}
export default MenuComponent;