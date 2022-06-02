import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';

const Headersocial = () => {
	return (
		<div className='header__social'>
			<a
				href='https://www.linkedin.com/in/onassis-sowah-anyetei-47a00b108/'
				target='blank'>
				<ImLinkedin />
			</a>
			<a href='https://github.com/onassis28' target='_blank'>
				<BsGithub />
			</a>
		</div>
	);
};

export default Headersocial;
