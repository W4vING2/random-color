import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { IndexProvider } from './context/indexProvider.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<IndexProvider>
				<App />
			</IndexProvider>
		</BrowserRouter>
	</StrictMode>
)
