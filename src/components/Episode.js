import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
border: 1px solid red;
`
const EpisodeComponent = ({name}) => {
    
    return (
        <Box>
            <h3>{name}</h3>
        </Box>
    )
}
export default EpisodeComponent;