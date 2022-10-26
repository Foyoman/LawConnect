import React from 'react'
import greaterColab from '../images/lc-greater-collab@2x.jpg';
import workRemote from '../images/lc-work-remote@2x.jpg';
import safeDocs from '../images/lc-safe-docs@2x.jpg';

export default function Solutions() {
	return (
		<div id='solutions' className='section'>
			<div className='container'>
				<h2>
					One Solution Designed to Make Your Firm More Money
				</h2>
				<div id='solutions-cards'>
					<div className='solutions-card'>
						<div className='card-img'>
							<img src={ greaterColab } alt="greater collaboration" />
						</div>
						<div className='card-caption'>
							<h3>Greater Collaboration</h3>
							<p>
								Collaborate on documents with clients, lawyers and other parties with LawConnect's Comment and Reply.
							</p>
						</div>
					</div>
					<div className='solutions-card'>
						<div className='card-img'>
							<img src={ workRemote } alt="work remotely" />
						</div>
						<div className='card-caption'>
							<h3>Work Remotely</h3>
							<p>
								You can sign in to LawConnect and view, collaborate and share your documents from anywhere.
							</p>
						</div>
					</div>
					<div className='solutions-card'>
						<div className='card-img'>
							<img src={ safeDocs } alt="safe documents" />
						</div>
						<div className='card-caption'>
							<h3>Safe Documents</h3>
							<p>
								LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
