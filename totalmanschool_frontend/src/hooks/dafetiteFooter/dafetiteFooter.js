import { DateHook } from "./dateHook"
import './dafetiteFooter.css'
import dafetite from './dafelogoWhiteTransparent.png'

function DafetiteFooter({cpText=null}) {
	const year = DateHook().todayYear;
	return (
		<>
			<span className="DafetiteFooter span-dafetite">
				<sup>&copy;</sup>{year}{cpText?' '+cpText+'.':''} All rights reserved | Developed by
				<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://dafetite.pages.dev/">
					<img
					src={dafetite}
					alt="dafetite ogaga"
					className="dafetite" />
				</a>
			</span>
		</>
	)
}
// const styles = {
// 	imgStyle: {
// 		width: '50px',
// 		height: '50px',
// 		borderRadius: '50%',
// 		marginLeft: '5px',
// 	}
// }
export { DafetiteFooter };
