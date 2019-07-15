import { StyleSheet } from 'react-native'
import theme from './theme'

import textStyles from './text'
import flexStyles from './flex'

export default {
  text: textStyles,
  flex: flexStyles,
  layout: {
    fullHeight: { height: '100%' },
    fullWidth: { width: '100%' }
  }
}
