import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './layout/Layout'
import Favorite from './pages/Favorite'
import GeneratePage from './pages/GeneratePage'
import GradientPage from './pages/GradientPage'
import Home from './pages/Home'
import OneColorPage from './pages/OneColorPage'

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='generate' element={<GeneratePage />}></Route>
					<Route path='home' element={<Home />}></Route>
					<Route path='favorite' element={<Favorite />}></Route>
					<Route path='one-color' element={<OneColorPage />}></Route>
					<Route path='gradient' element={<GradientPage />}></Route>
					<Route path='*' element={<Navigate to='/' replace />}></Route>
				</Route>
			</Routes>
		</>
	)
}
