
import { Link } from 'react-router-dom';
import { schoolInfo } from '../entry/entry';
import { DafetiteFooter } from '../hooks/dafetiteFooter/dafetiteFooter';
import { titleCase } from '../hooks/changeCase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from 'react';

const contactIcons = [
	{
		icon: "location-dot",
		item: schoolInfo.address,
		link: null,
	},
	{
		icon: "phone",
		item: schoolInfo.mobile,
		link: `tel:${schoolInfo.mobile}`,
	},
	{
		icon: "envelope",
		item: schoolInfo.email,
		link: `mailto:${schoolInfo.email}`,
	},
]

function Footer() {
	return (
		<footer>
			<div className="Footer container">
				<div className="row justify-content-center">
					<div className="col-md-12 pt-4">
						{contactIcons.map((item, idx) => {
							return (
								<Fragment key={item.item+idx}>
									{item.link?
									<>
										<a
										href={item.link} aria-label={item.item}>
											<FontAwesomeIcon icon={item.icon} />
											{item.item}
										</a>
										<br/>
									</>
									:
									<p>
										<FontAwesomeIcon icon={item.icon} />
										{item.item}
									</p>}
									
								</Fragment>
							)
						})}
						{/* <p>
							<FontAwesomeIcon icon="location-dot" />
							{schoolInfo.address}</p>
						<p>
							<FontAwesomeIcon icon="phone" />
							{schoolInfo.mobile}</p>
						<p>
							<FontAwesomeIcon icon="envelope" />
							{schoolInfo.email}</p> */}
					</div>
					<div className="col-md-12">
						<DafetiteFooter cpText={titleCase(`${schoolInfo.the} ${schoolInfo.totalman} ${schoolInfo.school}`)} />
					</div>
				</div>
			</div>
		</footer>
	)
}
export { Footer }