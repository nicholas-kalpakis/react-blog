import classes from './nav.module.css'
import Link from 'next/link'
const Nav = () => {
	const navTitle = 'Nicholas Kalpakis'
	return (
		<div class={classes.nav}>
			<div class={classes.title}>{navTitle}</div>
			<div class={classes.subTitle}><Link href='/blog'>Blog</Link></div>
		</div>
	)
}

export default Nav