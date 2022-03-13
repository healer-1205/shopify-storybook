import React from 'react';
import { useMeasure } from 'react-use';
import classNames from 'classnames';
import useDarkMode from '../../hooks/useDarkMode';

const Footer = () => {
	const [ref, { height }] = useMeasure();

	const root = document.documentElement;
	root.style.setProperty('--footer-height', `${height}px`);

	const { darkModeStatus } = useDarkMode();

	return (
		<footer ref={ref} className='footer'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<span className='fw-light'>Copyright © 2022 - Version 2.2.0</span>
					</div>
					<div className='col-auto'>
						<a
							href='/'
							className={classNames('text-decoration-none', {
								'link-dark': !darkModeStatus,
								'link-light': darkModeStatus,
							})}>
							<small className='fw-bold'>Facit Theme</small>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
