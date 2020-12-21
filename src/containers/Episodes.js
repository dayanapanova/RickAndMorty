import React from 'react';
import { Episode } from '@/components';
import { Row, Col } from 'react-grid-system';


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
            {
                name: 'Morty',
                id: 2
            },
            {
                name: 'Rick',
                id: 3
            },
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
        season: 's02',
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
        <Row>
            {MOCK_DATA.map(({ name, season, characters, date }) => (
                    <Col sm={3}>
                        <Episode
                            name={name}
                            characters={characters}
                            date={date}
                            season={season}
                        />
                    </Col>
                ))}
        </Row>
    )


};

export default Episodes;
