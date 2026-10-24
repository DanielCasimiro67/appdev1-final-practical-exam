import { useSyncExternalStore } from 'react'
import SignUp from './components/SignUp/SignUp.jsx'
import Login from './components/Login/Login.jsx'

function subscribe(onChange) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function getScreen() {
  return window.location.hash === '#signup' ? 'signup' : 'login'
}

export default function App() {
  const screen = useSyncExternalStore(subscribe, getScreen)
  return screen === 'signup' ? <SignUp /> : <Login />
}
