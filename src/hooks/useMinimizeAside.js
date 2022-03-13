import { useContext, useLayoutEffect } from 'react';
import ThemeContext from '../contexts/themeContext';

export default function useMinimizeAside() {
	const { setAsideStatus } = useContext(ThemeContext);
	useLayoutEffect(() => {
		setAsideStatus(false);
		return () => {
			setAsideStatus(true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
