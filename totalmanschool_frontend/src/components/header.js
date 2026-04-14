import { Link } from 'react-router-dom';
import { schoolName } from '../entry/entry';
import { AppLogo } from './appLogo';
import { useEffect, useState } from 'react';
import { useDevice } from '../context/deviceTypeContext';

function Header() {
	const { label, width } = useDevice()
	const isMobile = width<=767
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);
	console.log({isMenuOpen, isSubMenuOpen})
	return (
		<header className="Header main-header clearfix" role="header">
			<div className={`logo ${width>450?'':'rm-pad'}`}>
				<Link
				to={"/"}>
					{/* <em>{schoolName.totalman}</em> {schoolName.school} */}
					<AppLogo />
				</Link>
			</div>
				<Link
				// href="#menu"
				onClick={()=>setIsMenuOpen(prev=>!prev)}
				className={`menu-link ${width<=450?'pad-up':''}`}><i className={`fa ${isMenuOpen?"fa-times":"fa-bars"}`}></i></Link>
				<nav className={`main-nav ${hasMounted?'':'d-none'}`}>
					<ul className={`
									${isMobile?'menu-show':'main-menu'}
									${isMenuOpen?'down':'up'}
									`}>
						{/* <li className='active'>
							<Link
								to={"/"}
								>Home
							</Link>
						</li> */}
						<li className="has-submenu"
						onMouseEnter={()=>setIsSubMenuOpen(prev=>!prev)}
						onMouseLeave={()=>setIsSubMenuOpen(prev=>!prev)}
						>
							<Link
								>About Us
							</Link>
							{(!isMobile||(isMobile&&isSubMenuOpen))?
							<ul className={`sub-menu`}>
								<li className='active'>
									<Link
										to={"who-we-are"}>Who we are?
									</Link>
								</li>
								<li>
									<Link
										// to={"what-we-do"}
										>
											What we do?
									</Link>
								</li>
							</ul>
							:null}
						</li>
						<li>
							<Link
								to={"other-activities"}
								>Activities
							</Link>
						</li>
						<li className='active'>
							<Link
								to={"contact-us"}>
									Contact
							</Link>
						</li>
						<li>
							<Link>
									{width}px
							</Link>
						</li>
					</ul>
				</nav>
		</header>
	)
}
export { Header }