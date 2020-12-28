import { types, flow } from 'mobx-state-tree'
import { request, HTTPmethods } from '@/utils'

export default types.model('EpisodesStore', {
  episodesList: types.maybe(types.array(types.frozen())),
})
  .actions(self => {
    return {
      getEpisodes: flow(function* getEpisodes () {
        self.episodesList = []

        const response = yield request({
          method: HTTPmethods.GET,
          url: '/episode',
        })

        self.episodesList = response.data
      }),
    }
  })
