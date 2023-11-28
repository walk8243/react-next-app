import { Paper, Typography } from '@mui/material'
import styles from '../../styles/Home.module.css'

const Card = ({ url, title, children }: { url: string, title: string, children: string }) => (
  <Paper
    component="a"
    href={url}
    variant="outlined"
    className={styles.card}
  >
    <Typography component="h2" sx={{ fontWeight: 'bold' }}>
      {title} &rarr;
    </Typography>
    <Typography component="p">
      {children}
    </Typography>
  </Paper>
)

export default Card;
