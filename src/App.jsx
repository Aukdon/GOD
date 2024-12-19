
import './App.css'
import AppRoutes from './Layout/AppRoutes'

import { Provider } from 'react-redux'
import store from './store/store.js'

function App() {

  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>

  )
}

export default App
