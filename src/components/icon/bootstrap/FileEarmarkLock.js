import * as React from 'react';

function SvgFileEarmarkLock(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 114 0zM7 7v1h2V7a1 1 0 00-2 0zM6 9.3v2.4c0 .042.02.107.105.175A.637.637 0 006.5 12h3a.64.64 0 00.395-.125c.085-.068.105-.133.105-.175V9.3c0-.042-.02-.107-.105-.175A.637.637 0 009.5 9h-3a.637.637 0 00-.395.125C6.02 9.193 6 9.258 6 9.3z' />
			<path d='M14 14V4.5L9.5 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2zM9.5 3A1.5 1.5 0 0011 4.5h2V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h5.5v2z' />
		</svg>
	);
}

export default SvgFileEarmarkLock;
