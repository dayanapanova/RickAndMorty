import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';
import { Character } from '@/components';
import { Row, Col } from "react-grid-system";

const Characters = ({ charactersState }) => {
    const history = useHistory();
    const { charactersList, getCharacters } = charactersState;
    const charactersListJSON = charactersList?.toJSON();

    useEffect(()=> {
        getCharacters();
    }, [])

    return (
        <Row>
            {charactersListJSON.map(({ id, image, name, status,gender  }, index) => (
                <Col key={`${name}-${index}`} xs={12} sm={12} md={6} lg={3}>

                    <Character
                        onClick={() => history.push(`/characters/${id}`)}
                        image={image}
                        name={name}
                        status={status}
                        gender={gender}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default compose(
    inject(({ store: { charactersState } }) => ({ charactersState })),
    observer
  )(Characters)
