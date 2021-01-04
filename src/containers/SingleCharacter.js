import React, { useEffect } from 'react';
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import {InfoIcon, PlanetIcon,EpisodeIcon,LocationIcon} from '@/icons';
import {Row,Col} from 'react-grid-system';

const Tabs = styled.div`
    width:100%;
    background-color:${({ theme }) => theme.colors.orange};
    color:${({ theme }) => theme.colors.light};
    padding:0px;
    display:flex;
    justify-content:space-between;
    padding:10px;

`
const Tab = styled.div`
    position:relative;
    svg{
        width:30px;
        height:30px;
        fill:white;
        cursor:pointer;
    }
    
`
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
    const [selectedTab, isClicked] =useState(0);

    useEffect(()=> {
        getSingleCharacter(id);
    }, []);

    return (
       <Row justify='center'>
            <Col md={6}>
                    <CharacterImage src={image}/>
                    <Head>
                        <Title>{name}</Title>
                    </Head>
                    <Tabs>
                        <Tab><InfoIcon/></Tab>
                        <Tab><EpisodeIcon/></Tab>
                        <Tab><PlanetIcon/></Tab>
                        <Tab><LocationIcon/></Tab>
                    </Tabs>
            </Col>
        </Row>
    )
}


export default compose(
    inject(({ store: { charactersState } }) => ({ charactersState })),
    observer
  )(SingleCharacter)
