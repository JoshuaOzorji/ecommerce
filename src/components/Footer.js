import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import {
	BiLogoLinkedin,
	BiLogoFacebook,
	BiLogoInstagram,
} from "react-icons/bi";
import logo from "../assets/img/logo-black.svg";
import { footerLinks } from "../utils/constants";

const Footer = () => {
	return (
		<main className='wrapper font-noto mt-10 border-t'>
			<section className='md:flex justify-between  py-8'>
				<div className='flex flex-col justify-between'>
					<span className='flex items-center gap-x-2 justify-start pb-2 md:pb-0'>
						<img src={logo} alt='byte-crafters' className='w-12 h-12' />
						<h1 className='text-base md:text-[17px] font-light '>
							ByteCrafters
						</h1>
					</span>

					<div className='md:flex gap-1 hidden'>
						<span>
							<BiLogoFacebook
								size={22}
								className='hover:text-accent cursor-pointer'
							/>
						</span>
						<span>
							<AiOutlineTwitter
								size={22}
								className='hover:text-accent cursor-pointer'
							/>
						</span>
						<span>
							<BiLogoInstagram
								size={22}
								className='hover:text-accent cursor-pointer'
							/>
						</span>
						<span>
							<BiLogoLinkedin
								size={22}
								className='hover:text-accent cursor-pointer'
							/>
						</span>
					</div>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 gap-x-8'>
					{footerLinks.map((footerLink) => (
						<div key={footerLink.key}>
							<h3 className='text-[12.5px] md:text-[13px] font-bold'>
								{footerLink.title}
							</h3>
							<ul className='pt-1 pb-4'>
								{footerLink.submenu.map((link) => (
									<li
										key={link.name}
										className='text-[12px] md:pb-1 hover:underline cursor-pointer'>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* SM SOCIAL */}
			<div className='md:hidden gap-3 flex items-center justify-center pb-4'>
				<span>
					<BiLogoFacebook
						size={22}
						className='hover:text-accent cursor-pointer'
					/>
				</span>
				<span>
					<AiOutlineTwitter
						size={22}
						className='hover:text-accent cursor-pointer'
					/>
				</span>
				<span>
					<BiLogoInstagram
						size={22}
						className='hover:text-accent cursor-pointer'
					/>
				</span>
				<span>
					<BiLogoLinkedin
						size={22}
						className='hover:text-accent cursor-pointer'
					/>
				</span>
			</div>
			<div className='py-8 border-t'>
				<p className='text-center font-extralight text-xs font-noto'>
					&copy; {new Date().getFullYear()} <span> All rights reserved</span>
				</p>
			</div>
		</main>
	);
};

export default Footer;
