import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'tw-elements-react/dist/css/tw-elements-react.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import './fonts/minecraft.ttf'


ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
		<ToastContainer position={'bottom-left'} autoClose={1500} />
	</Provider>
)
