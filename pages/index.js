import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav/nav'
export default function Index() {
  return (
  		<Fragment>
			<div class={styles.social}>
				<div class={styles.socialIcon}><a href="https://www.facebook.com/kalpakis1"><Image class={styles.socialIcon} width="48" height="48" src="/f_logo_RGB-Blue_100.png"/></a></div>
				<div class={styles.socialIcon}><a href="https://www.instagram.com/nick_kalpakis/"><Image class={styles.socialIcon} width="48" height="48" src="/glyph-logo_May2016.png"/></a></div>
				<div class={styles.socialIcon}><a href="https://www.linkedin.com/in/nicholas-kalpakis-85619589/"><Image width="180" height="48" src="/LI-Logo.png"/></a></div>
				<div class={styles.socialIcon}><a href="https://twitter.com/Kalpizzy7"><Image class={styles.socialIcon} width="48" height="48" src="/Twitter_Social_Icon_Rounded_Square_Color.png"/></a></div>
			</div>
			<div class={styles.introContainer}>
				<div class={styles.intro}>
					I'm Nick, I have been a developer for ~ 7 years! 
					<br/> 📲  I'm intereseted in full-stack development (mostly front end??)
					<br/> ⚛️ I'm currenty building Next.js projects :)
					<br/> 💭 I enjoy talking software, business, culture and just about anything.  
					<br/> ✏️ Hit me on twitter! @kalpizzy7
				</div>
			</div>
	  	</Fragment>
	)
}
