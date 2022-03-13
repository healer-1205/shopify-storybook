import * as React from 'react';

function SvgFileX(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M6.146 6.146a.5.5 0 01.708 0L8 7.293l1.146-1.147a.5.5 0 11.708.708L8.707 8l1.147 1.146a.5.5 0 01-.708.708L8 8.707 6.854 9.854a.5.5 0 01-.708-.708L7.293 8 6.146 6.854a.5.5 0 010-.708z' />
			<path d='M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z' />
		</svg>
	);
}

export default SvgFileX;
