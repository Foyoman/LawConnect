import React from 'react';
import sharing from '../images/lc-share-docs@2x.png';

export default function Sharing() {
	return (
		<div id='sharing' className='section'>
			<div className='container'>
				<img className='section-img' src={ sharing } alt="sharing docs" />
				<div id='sharing-content' className='content'>
					<h2 className='content-heading'>Sharing Documents</h2>
					<p className='content-paragraph'>
						Your lawyer will share documents related to your case with you, via LawConnect. Each time a document is shared by your lawyer, you will receive an email notification so you can access the document. 
					</p>
					<br />
					<p>
						If you already have a LawConnect account, you can login and an alert will be in your notifications tab that a document has been shared.
					</p>
				</div>
			</div>
		</div>
	)
}
