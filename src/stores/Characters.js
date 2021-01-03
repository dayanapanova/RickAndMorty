import { types, flow } from 'mobx-state-tree'
import { request } from '@/utils'

export default types.model('CharactersStore', {
  charactersList: types.maybe(types.array(types.frozen())),
  singleCharacter: types.maybe(types.frozen()),
})
  .actions(self => {
    return {
      getCharacters: flow(function* getCharacters () {
        

        const response = yield request({
          method: 'get',
          url: '/character',
        })

        self.charactersList = response?.data?.results
      }),
      getSingleCharacter: flow(function* getSingleCharacter(id) {
        self.singleCharacter = {}

        const response = yield request({
          method: 'get',
          url: `/character/${id}`,
        })

        self.singleCharacter = response?.data
      }),
    }
  })
