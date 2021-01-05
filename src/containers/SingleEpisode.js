import React, {useEffect} from 'react';
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';

const SingleEpisode = ({episodesState,match}) => {
    const { singleEpisode, getSingleEpisode } = episodesState;
    const { name, air_date,episode } = singleEpisode;
    const { id } = match?.params

    useEffect(()=> {
        getSingleEpisode(id);
    }, []);

    return (
        <div>
            <div>{name}</div>
            <div>{air_date}</div>
            <div>{episode}</div>
        </div>
    )

}

export default compose(
    inject(({ store: { episodesState } }) => ({ episodesState })),
    observer
  )(SingleEpisode)

