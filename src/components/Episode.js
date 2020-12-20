import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
    background: #fff;
    box-shadow: 0 0 11px -5px rgba(0,0,0,0.3);
    padding: 15px;

`
const Title = styled.h3`
    font-size: 16px;
    color:${({theme})=> theme.colors.dark};
    font-weight: 500;
    margin: 0;
`

const BoxHead = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({theme})=> theme.colors.silver};
    padding-bottom: 10px;
`

const Season = styled.span`
    padding: 2px 4px;
    font-size: 11px;
    background-color: #e0e0e0;
    text-transform: uppercase;
    border-radius: 2px;
    color: ${({theme})=> theme.colors.dark};
`

const EpisodeComponent = ({name, season}) => {
    
    return (
        <Box>
            <BoxHead>
                <Title>{name}</Title>
                <Season>{season}</Season>
            </BoxHead>
        </Box>
    )
}
export default EpisodeComponent;