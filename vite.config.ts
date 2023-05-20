import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	server: {
		port: 5000,
		host: true,
		open: true
	},
	resolve: {
		alias: [
			{
				find: '@assets',
				replacement: path.resolve(__dirname, 'src/assets')
			},
			{
				find: '@layout',
				replacement: path.resolve(__dirname, 'src/components/layout')
			},
			{
				find: '@shared',
				replacement: path.resolve(__dirname, 'src/components/shared')
			},
			{
				find: '@services',
				replacement: path.resolve(__dirname, 'src/services')
			},
			{
				find: '@context',
				replacement: path.resolve(__dirname, 'src/context')
			},
			{
				find: '@store',
				replacement: path.resolve(__dirname, 'src/store')
			},
			{
				find: '@hooks',
				replacement: path.resolve(__dirname, 'src/hooks')
			}
		]
	}
})
