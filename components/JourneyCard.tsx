import { Container, Col, Row } from 'react-bootstrap';


const JourneyCard = ({}) => {
	return (

    <section>
      <div className='relative z-0 mx-10 mt-10 rounded-lg bg-gradient-to-tr from-slate-100 from-40% via-blue-300 via-60% to-slate-300'>
				<h2 className="grid pl-10 pt-5 text-2xl uppercase font-light text-slate-950">
					MY JOURNEY
				</h2>
        <div className='p-10 text-slate-950 grid md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6'>

					<div className=''>
						<h3>CRAIG STEEL DESIGN</h3>
						<p>UI UX SENIOR DESIGNER - 2010 - Present</p>
						<li>Creative Output</li>
						<li>Branding</li>
						<li>Design / Build of Website Applications</li>
						<li>Ecommerce Websites / Wordpress Themes</li>
						<li>UI/UX Design</li>
						<li>Photographic art direction</li>
						<li>Commissioning Photographers</li>
						<li>Commissioning illustrators</li>
						<li>Taking client briefs</li>
						<li>Creating client briefs</li>
						<li>Presenting to clients</li>
						<li>Creative team management</li>
						<li>Project management</li>
						<li>Final print</li>
					</div>
					<div className=''>
						<h3>THE FUSION EFFECT</h3>
						<p>Senior Designer - 2003-10</p>
						<li>Creative output</li>
						<li>Branding</li>
						<li>Annual Reports</li>
						<li>Photographic art direction</li>
						<li>Commissioning Photographers</li>
						<li>Commissioning illustrators</li>
						<li>Presenting to clients</li>
						<li>Creative team management</li>
						<li>Project management</li>
						<li>Final print</li>
					</div>
					<div className=''>
						<h3>CAIRNES DESIGN</h3>
						<p>Senior Designer - 1994-03</p>

						<h3>CLOCKWORK</h3>
						<p>Design Project Manager - 1992-94</p>

						<h3>LONDON CREATIVE DESIGN</h3>
						<p>Senior Designer - 1988-92</p>
					</div>

						<div className="absolute bottom-5  text-white right-10 px-3 py-2 rounded-sm uppercase text-sm font-thin bg-slate-800 opacity-70 hover:opacity-100 transition duration-300 ease-in">
							<a
								href="/craigParfitt-CV-2023.pdf"
								target="_blank"
								download> Download My CV{" "}
							</a>
						</div>

				</div>
			</div>
		</section>
	);
}

export default JourneyCard
