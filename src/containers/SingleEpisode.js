import React, {useEffect} from 'react';
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const EpisodeHolder = styled.div`
    border:1px solid black;
`

const SingleEpisode = ({episodesState, charactersState, match}) => {
    const { singleEpisode, getSingleEpisode } = episodesState;
    const {getMultipleCharacters,charactersList} = charactersState;
    const { name, air_date,episode,characters } = singleEpisode;
    const { id } = match?.params

    const charactersIDs = characters?.map((url)=>  url.replace(/[^0-9]/g,''))
    const charactersListJSON = charactersList?.toJSON(); 

    useEffect(()=> {
        getSingleEpisode(id);
    }, []);
  
    useEffect(()=> {
        if (charactersIDs?.length && !charactersListJSON.length) {
            getMultipleCharacters(charactersIDs);
        }
    }, [charactersIDs,charactersListJSON]);

    console.log(charactersListJSON); 

    return (
        <EpisodeHolder>
            <div>{name}</div>
            <div>{air_date}</div>
            <div>{episode}</div>
        </EpisodeHolder>
    )

}

export default compose(
    inject(({ store: { episodesState,charactersState } }) => ({ episodesState,charactersState })),
    observer
  )(SingleEpisode)

