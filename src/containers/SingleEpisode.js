import React, {useEffect} from 'react';
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

const EpisodeHolder = styled.div`
    border:1px solid black;
`

const SingleEpisode = ({episodesState,match}) => {
    const { singleEpisode, getSingleEpisode } = episodesState;
    const { name, air_date,episode } = singleEpisode;
    const { id } = match?.params

    useEffect(()=> {
        getSingleEpisode(id);
    }, []);

    return (
        <EpisodeHolder>
            <div>{name}</div>
            <div>{air_date}</div>
            <div>{episode}</div>
        </EpisodeHolder>
    )

}

export default compose(
    inject(({ store: { episodesState } }) => ({ episodesState })),
    observer
  )(SingleEpisode)

