import React from 'react'
import { Provider } from 'react-redux'

import { Grid } from './components/Grid'
import { Tasks } from './components/Tasks'
import { TimeTable } from './components/TimeTable'
import { store } from './store/store'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Grid>
          <Tasks />
          <TimeTable />
        </Grid>
        {/*<Settings>*/}
        {/*  <AddTask />*/}
        {/*</Settings>*/}
      </div>
    </Provider>
  )
}

export default App
