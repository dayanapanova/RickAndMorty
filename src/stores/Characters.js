import { types, flow } from 'mobx-state-tree'
import { request } from '@/utils'

export default types.model('CharactersStore', {
  charactersList: types.maybe(types.array(types.frozen())),
})
  .actions(self => {
    return {
      getCharacters: flow(function* getCharacters () {
        self.charactersList = []

        const response = yield request({
          method: 'get',
          url: '/character',
        })

        self.charactersList = response?.data?.results
      }),
    }
  })
