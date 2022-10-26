import React from 'react';
import Header from './Header';
import Solutions from './Solutions';
import Sharing from './Sharing';
import Signing from './Signing';

export default function Home() {
	return (
		<div id='home'>
			<Header />
			<Solutions />
			<Sharing />
			<Signing />
		</div>
	)
}
