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

    const InfoTab = () => (
        <div>
            <ul>
                <li>status:{status}</li>
                <li>gender:{gender}</li>
                <li>species:{species}</li>
            </ul>
        </div>
    )

    const EpisodeTab = () => (
        <div>Episode tab</div>
    )

    const OriginTab = () => (
        <div>Origin tab tab</div>
    )

    const LocationsTab = () => (
        <div>Location tab</div>
    )

    const TABS = [
        {
            icon:InfoIcon,
            title:'Information',
            component:InfoTab
        },
        {
            icon:EpisodeIcon,
            title:'Episodes',
            component:EpisodeTab
        },
        {
            icon:PlanetIcon,
            title:'Origin',
            component:OriginTab
        },
        {
            icon:LocationIcon,
            title:'Location',
            component:LocationsTab
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
