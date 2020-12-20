import React, { useState } from 'react';
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

const Date = styled.span`
    color: red;
    font-size: 14px;
`
const CharactersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    height: ${({isOpen})=> isOpen ? 'auto' : '20px'};
    overflow: hidden;
`

const Character = styled.span`
    background-color: ${({theme})=> theme.colors.primary};
    display: block;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 30px;
`

const EpisodeComponent = ({name, season, characters, date}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Box>
            <BoxHead>
                <Title>{name}</Title>
                <Season>{season}</Season>
            </BoxHead>
            <div>
                <Date>{date}</Date>
                <CharactersList isOpen={isOpen}>
                    {characters.map(({name}, index)=>(
                        <Character key={`${name}-${index}`}>{name}</Character>
                    ))}
                </CharactersList>
                <div onClick={()=> setIsOpen(!isOpen)}>{isOpen ? 'Shrink' : 'Expand'}</div>
            </div>
        </Box>
    )
}
export default EpisodeComponent;