
import { Link } from 'react-router-dom';
import { schoolInfo } from '../entry/entry';
import { DafetiteFooter } from '../hooks/dafetiteFooter/dafetiteFooter';
import { titleCase } from '../hooks/changeCase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
	return (
		<footer>
			<div className="Footer container">
				<div className="row justify-content-center">
					<div className="col-md-12 pt-4">
						<p>
							<FontAwesomeIcon icon="location-dot" />
							{schoolInfo.address}</p>
						<p>
							<FontAwesomeIcon icon="phone" />
							{schoolInfo.mobile}</p>
						<p>
							<FontAwesomeIcon icon="envelope" />
							{schoolInfo.email}</p>
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