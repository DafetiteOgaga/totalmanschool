
import { Link } from 'react-router-dom';
import { DafetiteFooter } from '../hooks/dafetiteFooter/dafetiteFooter';

function Footer() {
	return (
		<footer>
			<div className="Footer container">
				<div className="row">
					<div className="col-md-12">
						<DafetiteFooter />
					</div>
				</div>
			</div>
		</footer>
	)
}
export { Footer }