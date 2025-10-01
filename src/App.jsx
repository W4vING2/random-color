import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
import GradientPage from './pages/GradientPage'
import Home from './pages/Home'
import OneColorPage from './pages/OneColorPage'

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='home' element={<Home />}></Route>
					<Route path='one-color' element={<OneColorPage />}></Route>
					<Route path='gradient' element={<GradientPage />}></Route>
					<Route path='*' element={<Navigate to='/' replace />}></Route>
				</Route>
			</Routes>
		</>
	)
}
