import { Link, useLocation } from 'react-router-dom';
import { schoolInfo } from '../entry/entry';
import { AppLogo } from './appLogo';
import { useEffect, useRef, useState } from 'react';
import { useDevice } from '../context/deviceTypeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
	const currentPage = useLocation().pathname.split("/")[1]
	// console.log({currentPage})
	const { label, width } = useDevice()
	const isMobile = width<=767
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
	const [hasMounted, setHasMounted] = useState(false);
	const [toNone, setToNone] = useState(true)

	useEffect(() => {
		setHasMounted(true);
	}, []);
	useEffect(() => {
		// console.log('in effect')
		if (isMobile&&!isMenuOpen&&!toNone) {
			// console.log('removing ul')
			const delay = setTimeout(() => {
				setToNone(true)
				document.body.style.overflow = "";
			}, 200);
		} else if (isMenuOpen&&toNone) {
			// console.log('adding ul')
			setToNone(false)
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen])

	function closeMenu() {
		setIsMenuOpen(false);
		setIsSubMenuOpen(false);
	}
	const aboutUsArgs = {
		setIsSubMenuOpen, closeMenu, isSubMenuOpen,
		isMobile, currentPage,
	}
	// console.log({toNone, isMenuOpen, isSubMenuOpen, isMobile})
	return (
		<header className="Header main-header clearfix" role="header">
			<div className={`logo ${width>450?'':'rm-pad'}`}>
				<Link
				onClick={closeMenu}
				to={"/"}>
					<AppLogo />
				</Link>
			</div>
			<Link
			onClick={(e) => {
				e.stopPropagation();
				setIsMenuOpen((prev) => !prev);
			}}
			className={`menu-link ${width<=450?'pad-up':''}`}>
				<FontAwesomeIcon icon={isMenuOpen?"times":"bars"} color="#fff" />
			</Link>
			<nav className={`main-nav ${hasMounted?'':'d-none'}`}
			onClick={(e) => e.stopPropagation()}>
				<ul className={`${isMobile?'menu-show':'main-menu'}
								${isMenuOpen?'down':'up'}
								${(toNone&&isMobile)?'d-none':''}
								`}>
					<AboutUs {...aboutUsArgs} />
					<li className={`${currentPage==='contact-us'?'active':''}`}>
						<Link
							onClick={closeMenu}
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
			<div onClick={closeMenu}
			className={isMenuOpen?'page-overlay':''} />
		</header>
	)
}
function AboutUs({setIsSubMenuOpen, closeMenu, isSubMenuOpen, isMobile, currentPage}) {
	const subMenus = (
		<>
			<li className={`${currentPage==='who-we-are'?'active':''}`}>
				<Link
					onClick={closeMenu}
					to={"who-we-are"}
					>Who we are?
				</Link>
			</li>
			<li className={`${currentPage==='what-we-do'?'active':''}`}>
				<Link
					onClick={closeMenu}
					to={"what-we-do"}
					>
						What we do?
				</Link>
			</li>
		</>
	)
	if (isMobile) {
		return subMenus
	} else {
		return (
			<li className={`has-submenu ${(currentPage==='who-we-are'||currentPage==='what-we-do')?'active':''}`}
			onMouseEnter={()=>setIsSubMenuOpen(prev=>!prev)}
			onMouseLeave={()=>setIsSubMenuOpen(prev=>!prev)}>
				<Link
					>About Us
				</Link>
				{(!isMobile||(isMobile&&isSubMenuOpen))?
				<ul className={`sub-menu`}>
					{subMenus}
				</ul>
				:null}
			</li>
		)
	}
}
export { Header }