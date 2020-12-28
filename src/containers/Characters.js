import React from "react";
import { useHistory } from "react-router-dom";
import { Character } from '@/components';
import { Row, Col } from "react-grid-system";


const MOCK_DATA = [
    {
        image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
        name: 'Beth Smith',
        status: 'alive',
        gender: 'female',
        id: 1
    },
    {
        image: 'https://rickandmortyapi.com/api/character/avatar/218.jpeg',
        name: 'Rick Sanchez',
        status: 'alive',
        gender: 'male',
        id: 2
    },
    {
        image: 'https://rickandmortyapi.com/api/character/avatar/139.jpeg',
        name: 'Morty Smith',
        status: 'alive',
        gender:'male',
        id: 3
    }

]

const Characters = () => {
    const history = useHistory();

    return (
        <Row>
            {MOCK_DATA.map(({ id, image, name, status,gender  }, index) => (
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
export default Characters;
