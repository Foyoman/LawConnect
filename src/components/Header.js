import React from 'react';
import hero from '../images/lc-hero-mobile@2x.png';
import desktopHero from '../images/lc-hero-desktop@2x.png';

export default function Header() {
	return (
		<div id="header" className='section'>
			<div className='container'>
				<img className='banner-img mobile-only' src={ hero } alt="hero" />
				<div id="header-content">
					<h2>
						The place to work with your lawyer
					</h2>
					<p>
						Your lawyer uses LawConnect to share information with you about your legal case in a private, convenient and secure way.
					</p>
					<button>
						Create Free Account
					</button>
				</div>
				<img className='desktop-only banner-img' src={ desktopHero } alt="hero" />
				<div className='desktop-only' id='background-circle' />
			</div>
		</div>
	)
}
