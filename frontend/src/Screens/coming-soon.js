import React from 'react';
import {Link} from 'react-router-dom'
const ComingSoon = () => {
    return (
        <div className="coming-soon-area">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="coming-soon-content">
                            <h1>Under Construction</h1>
                            <p>The Page is currently under Construction. We Should be back shortly. Thank you for your patience.</p>
                            <Link to="/">
                            <button className="btn btn-primary">Go to Homepage</button>
                            </Link>
                            

						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ComingSoon;