import React from 'react';
import './header.css';
import Cta from './Cta';
import mage from '../../assets/mage.PNG';
import Headersocial from './Headersocial';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Header = () => {
	return (
		<section>
			<header className='header' id='home'>
				<div className='container header__container'>
					<h5 className='header__h5'>Hello I'm</h5>
					<AnimationOnScroll animateIn='animate__fadeInLeftBig'>
						<h1>Onassis Sowah Anyetei</h1>
						<h5 className='header__h5'>Software Engineer </h5>
					</AnimationOnScroll>

					<Cta />
					<Headersocial />
				</div>
			</header>
		</section>
	);
};

export default Header;
