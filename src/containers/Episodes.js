import React from 'react';
import { Episode } from '@/components';
import { Container, Row, Col } from 'react-grid-system';


const MOCK_DATA = [
    {
        name: 'Taste Episode',
        date: '13 octomber',
        season: 's01',
        characters: [
            {
                name: 'Morty',
                id: 2
            },
            {
                name: 'Rick',
                id: 3
            },
        ],

    },
    {
        name: 'Taste Episode2',
        date: '15 octomber',
        season: 's01',
        characters: [
            {
                name: 'Summer',
                id: 4
            },
            {
                name: 'Bett',
                id: 5
            },
        ]
    }
]
const Episodes = () => {


    return (
        <Container>
            <Row>
                {MOCK_DATA.map(({ name, characters, date }) => {
                    return (
                        <Col sm={3}>
                            <Episode name={name} characters={characters} date={date} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )


};

export default Episodes;
