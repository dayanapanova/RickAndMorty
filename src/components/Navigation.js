import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Navigation = styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    width: ${({ theme })=> theme.sizes.sideBarWidth}px;
    background-color: ${({ theme })=> theme.colors.primary};
`

const MenuItem = styled(Link)`
    color: ${({ theme })=> theme.colors.light};
`

const MENU_ITEMS = [
    {
        to: '/',
        label: 'Episodes',
    },
    {
        to: '/characters',
        label: 'Characters',
    }
]

export default () => {
    return (
        <Navigation>
            <ul>
                {MENU_ITEMS.map(({ label, to }, index)=> (
                    <li key={`${label}-${index}`}>
                        <MenuItem to={to}>{label}</MenuItem>
                    </li>
                ))}
            </ul>
        </Navigation>
    )
};
