import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
    border: 1px solid red;

`
const Title = styled.h3`
    font-size:30px;
    color:${({theme})=> theme.colors.primary};
`

const EpisodeComponent = ({name}) => {
    
    return (
        <Box>
            <Title>{name}</Title>
        </Box>
    )
}
export default EpisodeComponent;