import React from 'react';
import signDocs from '../images/lc-sign-docs-mobile@2x.png';
import signDocsDesktop from '../images/lc-sign-docs-desktop@2x.png';

export default function Signing() {
	return (
		<div id='signing' className='section'>
			<div className='container'>
				<img className='section-img mobile-only' src={ signDocs } alt="signing documents electronically" />
				<img className='section-img desktop-only' src={ signDocsDesktop } alt="signing decuments electronically" />
				<div id='signing-content' className='content'>
					<h2 className='content-heading'>
						Signing Documents Electronically
					</h2>
					<p className='content-paragraph'>
						LawConnect integrates with DocuSign to provide our users with a quick, easy and secure way to sign important legal documents online. 
					</p>
				</div>
			</div>
		</div>
	)
}
