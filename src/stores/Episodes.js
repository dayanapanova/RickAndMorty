import { types, flow } from 'mobx-state-tree'
import { request } from '@/utils'

export default types.model('EpisodesStore', {
  episodesList: types.maybe(types.array(types.frozen())),
  singleEpisode: types.maybe(types.frozen())
})
  .actions(self => {
    return {
      getEpisodes: flow(function* getEpisodes () {


        const response = yield request({
          method:'get',
          url: '/episode',
        })

        self.episodesList = response.data?.results
      }),
      getSingleEpisode: flow(function* getSingleEpisode(id) {

        const response = yield request({
          method: 'get',
          url: `/episode/${id}`,
        })

        self.singleEpisode = response?.data
      }),
    }
  })
