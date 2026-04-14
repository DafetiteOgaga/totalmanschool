
import { Link } from 'react-router-dom';
import { DafetiteFooter } from '../hooks/dafetiteFooter/dafetiteFooter';

function Footer() {
	return (
		<footer>
			<div className="Footer container">
				<div className="row">
					<div className="col-md-12">
						<DafetiteFooter />
						{/* <p><i className="fa fa-copyright"></i> Copyright 2020 by Grad School
						
						| Design: <Link href="https://templatemo.com" rel="sponsored" target="_parent">TemplateMo</Link><br/>
						Distributed By: <Link href="https://themewagon.com" rel="sponsored" target="_blank">ThemeWagon</Link>
						
						</p> */}
					</div>
				</div>
			</div>
		</footer>
	)
}
export { Footer }