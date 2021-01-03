import React,{useEffect} from 'react';
import { Episode } from '@/components';
import { Row, Col } from 'react-grid-system';
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react';


const Episodes = ({episodesState}) => {
    const {getEpisodes,episodesList} = episodesState;
    const episodesListJSON = episodesList?.toJSON();
    console.log(episodesListJSON);
    useEffect(() => {
      getEpisodes()
    }, []);

    return (
        <Row>
            {episodesListJSON.map(({ name, season, characters, date,id }, index) => (
                    <Col key={`${name}-${index}`} xs={12} sm={6} md={4} lg={3}>
                        <Episode
                            name={name}
                            characters={characters}
                            date={date}
                            season={season}
                            id={id}
                        />
                    </Col>
                ))}
        </Row>
    )


};

export default compose(
    inject(({ store: { episodesState } }) => ({ episodesState })),
    observer
  )(Episodes)
