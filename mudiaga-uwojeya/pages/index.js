import Head from 'next/head'
import { Fragment } from 'react';

const Index = () => {
    return <Fragment>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Mudiaga Moody" />
            <meta name="description" content="My portfolio website" />
            <meta
                name="keywords"
                content="full stack developer, front end developer
        back end developer, wewb developer, web development, web design, portfolio website,
        website design, web designer, website developer, website, web apps, web application Mudiaga Moody Uwojeya Nigeria"
            />
            <title>Mudiaga Moody Uwojeya</title>

            /*  external stylesheet and favicon */
            <link
                rel="shortcut icon"
                href="../../assets/mudi-favicon-sm.png"
                type="image/x-icon"
            />
           
        </Head>

       <div class="container">
		
		<nav class="navigation">
			// brand section
			<div class="navigation__brand">
				<a href="index.html" target="_self" class="navigation__home">
					<img
						src="assets/logo.png"
						alt="mudi logo"
						class="navigation__logo"
					/>
				</a>
			</div>

			<input type="checkbox" class="navigation__checkbox" id="menu-toggle" />
			<label for="menu-toggle" class="navigation__button">
				<span class="navigation__icon"></span>
			</label>
			<div class="navigation__ball"></div>
			<div class="navigation__menu">
				<ul class="navigation__list">
					<li class="navigation__item">
						<a href="index.html" target="_self" class="navigation__link"
							>Home</a
						>
					</li>
					<li class="navigation__item">
						<a
							href="projects.html"
							target="_self"
							class="navigation__link"
							>Projects</a
						>
					</li>
					<li class="navigation__item">
						<a href="blog.html" target="_self" class="navigation__link"
							>Blog</a
						>
					</li>
					<li class="navigation__item">
						<a href="#contact" target="_self" class="navigation__link"
							>Contact</a
						>
					</li>
				</ul>

				<div class="navigation__socials">
					<span class="navigation__social-text">Find Me</span>
					<div class="navigation__social-container">
						<a href="#contact" class="navigation__social-link">
							<svg class="navigation__social-brand">
								<use href="assets/sprite.svg#icon-mail_outline"></use>
							</svg>
						</a>

						<a
							href="https://github.com/uwojeyamudiaga/"
							target="_blank"
							class="navigation__social-link"
						>
							<svg class="navigation__social-brand">
								<use href="assets/sprite.svg#icon-github1"></use>
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/mudiaga-moody-uwojeya/"
							target="_blank"
							class="navigation__social-link"
						>
							<svg class="navigation__social-brand">
								<use href="assets/sprite.svg#icon-linkedin"></use>
							</svg>
						</a>
						<a
							href="https://twitter.com/MoodyMudiaga/"
							target="_blank"
							class="navigation__social-link"
						>
							<svg class="navigation__social-brand">
								<use href="assets/sprite.svg#icon-twitter1"></use>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</nav>

		<header class="header">
			<div class="header__bg-video">
				<video class="header__video" autoplay muted loop>
					<source src="assets/laptop.mp4" type="video/mp4" />
					Your current browser does not support video, please upgrade your
					browser.
				</video>
			</div>
			<div class="header__content">
				<h1 class="heading-primary">Grow your business</h1>
				<p class="header__paragraph">
					get seen by the people looking for your products or services on
					the internet, drive them to your website and convert them. It is
					as simple as ...
				</p>
				<svg class="header__chevron">
					<use href="assets/sprite.svg#icon-keyboard_arrow_down"></use>
				</svg>
			</div>
		</header>

		<section class="feature">
			<div class="feature__features--1">
				<div class="feature__shape">
					<svg class="feature__item">
						<use href="assets/sprite.svg#icon-public"></use>
					</svg>

					<svg class="feature__item--1">
						<use href="assets/sprite.svg#icon-where_to_vote"></use>
					</svg>
				</div>
				<div class="feature__description">
					<h3 class="heading-secondary">
						<abbr title="Search Engine Optimization">seo</abbr>
					</h3>
					<p class="feature__highlight">
						boost your online presence by ranking top in search results to
						get more leads, sales, and save on ads
					</p>
				</div>
			</div>

			<div class="feature__features--2">
				<div class="feature__shape">
					<svg class="feature__item">
						<use href="assets/sprite.svg#icon-bolt"></use>
					</svg>
				</div>
				<div class="feature__description">
					<h3 class="heading-secondary">speed</h3>
					<p class="feature__highlight">
						because nobody waits for a slow website, a fast performing
						website increases conversion
					</p>
				</div>
			</div>

			<div class="feature__features--3">
				<div class="feature__shape">
					<svg class="feature__item">
						<use href="assets/sprite.svg#icon-laptop_windows"></use>
					</svg>
					<svg class="feature__item--2">
						<use href="assets/sprite.svg#icon-tablet"></use>
					</svg>
					<svg class="feature__item--3">
						<use href="assets/sprite.svg#icon-phone_android"></use>
					</svg>
				</div>
				<div class="feature__description">
					<h3 class="heading-secondary">
						<abbr title="Responsive Web Design">rwd</abbr>
					</h3>
					<p class="feature__highlight">
						responsive design to include the billions of customers
						now accessing the internet on mobile devices
					</p>
				</div>
			</div>

			<div class="feature__features--4">
				<div class="feature__shape">
					<svg class="feature__item">
						<use href="assets/sprite.svg#icon-accessible"></use>
					</svg>
				</div>
				<div class="feature__description">
					<h3 class="heading-secondary">
						<abbr title="Accessibility">a11y</abbr>
					</h3>
					<p class="feature__highlight">
						make your website accessible to all kinds of
						visitors, including those using assistive technology
					</p>
				</div>
			</div>
		</section>

		<section class="testimonial">
			<div class="testimonial__container">
				<div class="testimonial__customer">
					<div class="testimonial__info">
						<svg class="testimonial__icon">
							<use href="assets/sprite.svg#icon-account_circle"></use>
						</svg>
						<div class="testimonial__profile">
							<h4 class="heading-tertiary">Augustine Edward</h4>
							<p class="testimonial__description">
								CEO - 360 Whiteboard
							</p>
						</div>
					</div>
					<p class="testimonial__review">
						Moody is very passionate and all about adding value to what he
						does. I will never tire to use his services. To anyone
						wondering whether or not they should hire Moody, you're in
						good hands.
					</p>
				</div>

				<div class="testimonial__customer testimonial__customer--1">
					<div class="testimonial__info testimonial__info--1">
						<svg class="testimonial__icon">
							<use href="assets/sprite.svg#icon-account_circle"></use>
						</svg>
						<div class="testimonial__profile testimonial__profile--1">
							<h4 class="heading-tertiary">Naomi Fresh</h4>
							<p class="testimonial__description">
								Solopreneur - Muna fashion
							</p>
						</div>
					</div>
					<p class="testimonial__review">
						Moody makes sure his work is industry standard and
						satisfactory to his client. I can tell by the efforts he
						poured into my project. My website is faster than before, and
						is converting more than before I met Moody.
					</p>
				</div>

				<div class="testimonial__customer">
					<div class="testimonial__info">
						<svg class="testimonial__icon">
							<use href="assets/sprite.svg#icon-account_circle"></use>
						</svg>
						<div class="testimonial__profile">
							<h4 class="heading-tertiary">Stewart O. Egedegbe Esq</h4>
							<p class="testimonial__description">
								Principal Partner - S. O. Egedegbe & Co.
							</p>
						</div>
					</div>
					<p class="testimonial__review">
						From the design, the performance, and my personal experience
						using the website Moody designed for us I am very satisfied
						with the overall result of our project. It was beyond our
						expectations.
					</p>
				</div>
			</div>
		</section>

		<section class="contact" id="contact">
			<form action="mailto:moody.mudiaga@gmail.com" class="contact__form">
				<label for="#name" class="contact__label">Name</label>
				<input
					type="text"
					id="name"
					class="contact__input"
					placeholder="Name"
					required
				/>

				<label for="#mail" class="contact__label">Email</label>
				<input
					type="email"
					id="mail"
					class="contact__input"
					placeholder="E-mail"
					required
				/>

				<label for="#message" class="contact__label">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="15"
					class="contact__textarea"
					placeholder="Message"
					required
				></textarea>

				<input type="submit" value="Submit" class="contact__button" />
			</form>
		</section>

		<footer class="footer">
			<ul class="footer__list">
				<li class="footer__item">
					<a href="index.html" target="_self" class="footer__link">Home</a>
				</li>
				<li class="footer__item">
					<a href="projects.html" target="_self" class="footer__link"
						>Projects</a
					>
				</li>
				<li class="footer__item">
					<a href="blog.html" target="_self" class="footer__link">Blog</a>
				</li>
				<li class="footer__item">
					<a href="#contact" target="_self" class="footer__link"
						>Contact</a
					>
				</li>
			</ul>
			<ul class="footer__list">
				<li class="footer__attribution">
					SVG icons from
					<a href="https://icomoon.io/" class="footer__link">IcoMoon</a>
				</li>
				<li class="footer__attribution">
					Cover video from
					<a href="https://coverr.co/" class="footer__link">Coverr</a>
				</li>
			</ul>
			<div class="footer__copyright">
				All rights reserved! Mudiaga Moody Uwojeya &copy; 2020
			</div>
		</footer>
	</div>
    </Fragment>
}

export default Index;