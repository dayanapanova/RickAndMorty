import React, { useEffect,useState } from 'react';
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
    

`
const Tab = styled.div`
    position:relative;
    padding:10px;
    background-color: ${({isActive,theme})=>isActive ? theme.colors.light : 'transperant'};
    cursor:${({isActive})=>isActive ? 'default' : 'pointer'};

    svg {
        width:30px;
        height:30px;
        fill: ${({isActive,theme})=>isActive ? theme.colors.primary : theme.colors.light};
        margin: 0 auto;
        display: block;
    }
    
    span {
        display: block;
        text-align: center;
        color: ${({isActive,theme})=>isActive ? theme.colors.primary : theme.colors.light};
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
    const [currentTab, setCurrentTab] =useState(0);

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
                    <Tabs>
                        {TABS.map(({icon:Icon,title},index)=>(
                            <Tab 
                                isActive={index===currentTab}
                                onClick={()=>setCurrentTab(index)}
                            >
                                <Icon/>
                                <span>{title}</span>
                            </Tab>
                        ))}
                    </Tabs>
            </Col>
        </Row>
    )
}


export default compose(
    inject(({ store: { charactersState } }) => ({ charactersState })),
    observer
  )(SingleCharacter)
