import { createBrowserRouter } from 'react-router-dom'
import Layout from '../pages/Layout.tsx'
import ErrorPage from '../pages/ErrorPage/ErrorPage.tsx'
import Home from '../pages/Home/Home.tsx'
import Game, { gameLoader } from '../pages/Game/Game.tsx'
import Rating, { ratingLoader } from '../pages/Rating/Rating.tsx'
import Rules from '../pages/Rules/Rules.tsx'
import Profile, { profileAction, profileLoader } from '../pages/Profile/Profile.tsx'
import Auth from '../pages/Auth/Auth.tsx'
import ProtectedRoute from '../components/ProtectedRoute.tsx'
import CreateProfile, { createProfileAction } from '../components/CreateProfile.tsx'


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'home',
				element: <Home />,
				loader: profileLoader,
				caseSensitive: true
			},
			{
				path: 'game',
				element: (
					<ProtectedRoute>
						<Game />
					</ProtectedRoute>
				),
				loader: gameLoader

			},

			{
				path: 'rating',
				element: <Rating />,
				loader: ratingLoader,
				caseSensitive: true
			},
			{
				path: 'rules',
				element: <Rules />,
				caseSensitive: true
			},
			{
				path: 'profile',
				action: profileAction,
				loader: profileLoader,
				caseSensitive: true,
				element: (
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				)
			},
			{
				path: 'createProfile',
				action: createProfileAction,
				caseSensitive: true,
				element: (
					<ProtectedRoute>
						<CreateProfile />
					</ProtectedRoute>
				)
			},

			{
				index: true,
				element: <Auth />,
				caseSensitive: true
			}
		]
	}
])
