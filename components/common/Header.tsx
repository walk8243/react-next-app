import { useContext, useState } from 'react'
import { Switch, Toolbar, Typography } from '@mui/material'
import { ModeContext, ModeDispatchContext } from '../../context/mode'

const Header = () => {
	const mode = useContext(ModeContext)
	const [dark, setDark] = useState(mode === 'dark')
	const dispatch = useContext(ModeDispatchContext)
	const handleChange = () => {
		console.log('Header.handleChange');
		setDark(!dark)
		dispatch({ type: dark ? 'LIGHT' : 'DARK' })
	}

	return (
		<header>
			<Toolbar>
				<Typography>
					のぶ
				</Typography>
				<Switch
					checked={dark}
					onChange={handleChange}
					name='dark-mode'
					color='secondary'
				/>
			</Toolbar>
		</header>
	)
}

export default Header
