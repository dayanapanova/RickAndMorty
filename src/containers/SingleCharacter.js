import React, { useEffect,useState } from 'react';
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import {InfoIcon, PlanetIcon,EpisodeIcon,LocationIcon,AlienIcon,GenderIcon, CharacterIcon} from '@/icons';
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
const InfoUl = styled.ul`
    list-style:none;
    font-size:15px;
`
const InfoLi = styled.li`
    font-size: 18px;
    color:${({ theme }) => theme.colors.dark};
    margin: 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
    
`
const AlienImage = styled(AlienIcon)`
    width:30px;
    height:30px;
    fill:#fff;
    margin-right: 10px;
`
const GenderImage = styled(GenderIcon)`
    width:30px;
    height:30px;
    margin-right:10px;
`
const IconImage = styled(CharacterIcon)`
    width:30px;
    height:30px;
    margin-right:10px;
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
            <InfoUl>
                <InfoLi><AlienImage/>status: {status}</InfoLi>
                <InfoLi><GenderImage/>gender: {gender}</InfoLi>
                <InfoLi><IconImage/>species: {species}</InfoLi>
            </InfoUl>
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
