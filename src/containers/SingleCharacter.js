import React, { useEffect,useState } from 'react';
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import {InfoIcon, PlanetIcon,EpisodeIcon,LocationIcon} from '@/icons';
import {Row,Col} from 'react-grid-system';
import {TabContent} from '@/components';


const Head =styled.div`
    text-align:center;
`
const Title = styled.h2`
    font-size:20px;
    color:${({ theme }) => theme.colors.dark};
`
const CharacterImage = styled.img`
    display:block;
    width:100px;
    border-radius:50px;
    height:100px;
    margin: 0 auto;
`

const SingleCharacter = ({ charactersState, match }) => {
    const { singleCharacter, getSingleCharacter } = charactersState;
    const { status,name,image,gender,species } = singleCharacter;
    const { id } = match?.params

    useEffect(()=> {
        getSingleCharacter(id);
    }, []);

    const TABS = [
        {
            icon:InfoIcon,
            title:'Information'
        },
        {
            icon:EpisodeIcon,
            title:'Episodes'
        },
        {
            icon:PlanetIcon,
            title:'Origin'
        },
        {
            icon:LocationIcon,
            title:'Location'
        }
    ]
    
    return (
       <Row justify='center'>
            <Col md={6}>
                    <CharacterImage src={image}/>
                    <Head>
                        <Title>{name}</Title>
                    </Head>
                    <TabContent items={TABS}/>
            </Col>
        </Row>
    )
}


export default compose(
    inject(({ store: { charactersState } }) => ({ charactersState })),
    observer
  )(SingleCharacter)
