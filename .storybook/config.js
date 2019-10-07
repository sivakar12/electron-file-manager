import { configure } from '@storybook/react'

import '../src/styles/App.scss'

configure(require.context('../src/stories', true, /\.(j|t)sx?$/), module)