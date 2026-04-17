
import { Link } from 'react-router-dom';
import { schoolInfo } from '../entry/entry';
import { DafetiteFooter } from '../hooks/dafetiteFooter/dafetiteFooter';
import { titleCase } from '../hooks/changeCase';

function Footer() {
	return (
		<footer>
			<div className="Footer container">
				<div className="row justify-content-center">
					<div className="col-md-12 pt-4">
						<p>{schoolInfo.address}</p>
						<p>{schoolInfo.mobile}</p>
						<p>{schoolInfo.email}</p>
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