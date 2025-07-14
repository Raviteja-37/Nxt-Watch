import React from 'react'

const data = React.createContext({
  isLight: true,
  isLighChange: () => {},
  ban: true,
  banChange: () => {},
  saved: [],
  addSaved: () => {},
  delSaved: () => {},
})

export default data
