import Image from 'next/image'
import { Link } from '@mui/material'
import styles from '../../styles/common/Footer.module.css'
import { Box } from '@mui/system'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Link
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				color="inherit"
				underline="none"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{' '}
				<Box component="span" className={styles.logo}>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</Box>
			</Link>
		</footer>
	)
}

export default Footer
