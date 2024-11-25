import React from 'react'
import { Link } from 'react-router-dom'
function Service() {
  return (
    <div>
		<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div className="container">
	<Link className="navbar-brand" to='/'>Furni<span>.</span></Link>

	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>

	<div className="collapse navbar-collapse" id="navbarsFurni">
		<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
			<li className="nav-item active">
				<Link className="nav-link" to='/'>Home</Link>
			</li>
			<li><Link className="nav-link" to='/shop'>Shop</Link></li>
			<li><Link className="nav-link" to='/about'>About us</Link></li>
			<li><Link className="nav-link" to='/services'>Services</Link></li>
			<li><Link className="nav-link" to='/blog'>Blog</Link></li>
			<li><Link className="nav-link" to='/contact'>Contact us</Link></li>
		</ul>

		<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
			<li><Link className="nav-link" to="#"><img src="assets/images/user.svg"></img></Link></li>
			<li><Link className="nav-link" to='/cart'><img src="assets/images/cart.svg"></img></Link></li>
		</ul>
	</div>
</div>
	
</nav>
      <div className="why-choose-section">
			<div className="container">
				
				
				<div className="row my-5">
					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="assets/images/truck.svg" alt="Image" className="imf-fluid"></img>
							</div>
							<h3>Fast &amp; Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="assets/images/bag.svg" alt="Image" className="imf-fluid"></img>
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="assets/images/support.svg" alt="Image" className="imf-fluid"></img>
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="assets/images/return.svg" alt="Image" className="imf-fluid"></img>
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="assets/images/truck.svg" alt="Image" className="imf-fluid"></img>
							</div>
							<h3>Fast &amp; Free Shipping</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="assets/images/bag.svg" alt="Image" className="imf-fluid"></img>
							</div>
							<h3>Easy to Shop</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="assets/images/support.svg" alt="Image" className="imf-fluid"></img>
							</div>
							<h3>24/7 Support</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

					<div className="col-6 col-md-6 col-lg-3 mb-4">
						<div className="feature">
							<div className="icon">
								<img src="assets/images/return.svg" alt="Image" className="imf-fluid"></img>
							</div>
							<h3>Hassle Free Returns</h3>
							<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
						</div>
					</div>

				</div>
			
			</div>
		</div>
    </div>
  )
}

export default Service
