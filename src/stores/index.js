import { types } from 'mobx-state-tree'

import episodesState from './Episodes'
import charactersState from './Characters'

export default types.model('RootStore', {
  episodesState,
  charactersState,
})
