import { Episode } from '@/components';
import React from 'react';


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
        <div>
            {MOCK_DATA.map(({ name,characters,date }) => {
                return (
                    <Episode name={name} characters={characters} date={date}/>
                )
            })}
        </div>
    )


};

export default Episodes;
