import React, { useEffect } from 'react';
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';

const SingleCharacter = ({ charactersState, match }) => {
    const { singleCharacter, getSingleCharacter } = charactersState;
    const { id } = match?.params

    useEffect(()=> {
        getSingleCharacter(id);
    }, []);

    return (

        <div>
            <h2>Name: {singleCharacter?.name}</h2>
        </div>
    )
}


export default compose(
    inject(({ store: { charactersState } }) => ({ charactersState })),
    observer
  )(SingleCharacter)
