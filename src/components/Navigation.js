import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoIcon, EpisodeIcon, CharacterIcon } from '@/icons';

const Navigation = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: ${({ theme })=> theme.sizes.sideBarWidth}px;
    background-color: ${({ theme })=> theme.colors.primary};
    padding: 20px 0;
`

const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 30px 0 0 0;
`

Menu.Item = styled(NavLink)`
    color: ${({ theme })=> theme.colors.light};
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    padding: 10px 0;

    &.active {
        background-color: red;
    }

    svg {
        fill: #fff;
        display: block;
        margin: 0 auto;
        width: 30px;
        height: 30px;
    }
`

const LogoSvg = styled(LogoIcon)`
    width: 50px;
    height: 50px;
    fill: #fff;
    margin: 0 auto;
    display: block;
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

export default () => {
    return (
        <Navigation>
            <Link to="/">
                <LogoSvg />
            </Link>
            <Menu>
                {MENU_ITEMS.map(({ label, to, icon: Icon }, index)=> (
                    <li key={`${label}-${index}`}>
                        <Menu.Item to={to} exact>
                            <Icon />
                            {label}
                        </Menu.Item>
                    </li>
                ))}
            </Menu>
        </Navigation>
    )
};
