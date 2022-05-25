import React from 'react';
import './header.css';
import Cta from './Cta';
import mage from '../../assets/mage.PNG';
import Headersocial from './Headersocial';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Header = () => {
	return (
		<section>
			<header className='header' id='home'>
				<div className='container header__container'>
					<h5 className='header__h5'>Hello I'm</h5>
					<motion.h1
						animate={{ rotate: 360 }}
						transition={{ duration: 2 }}
						className='header__h1'>
						Onassis Sowah Anyetei
					</motion.h1>
					<h5 className='header__h5'>Software Engineer </h5>
					<Cta />

					<Headersocial />
				</div>
			</header>
		</section>
	);
};

export default Header;
