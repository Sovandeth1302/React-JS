
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

function cart() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  //aDD PRODUCT
  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  //REMOVE
  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };
  //CALCULTE
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
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
			<li><Link className="nav-link" to='/contact.html'>Contact us</Link></li>
		</ul>

		<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
			<li><Link className="nav-link" to="#"><img src="assets/images/user.svg"></img></Link></li>
			<li><Link className="nav-link" to='/cart'><img src="assets/images/cart.svg"></img></Link></li>
		</ul>
	</div>
</div>
	
</nav>
{/* End Header/Navigation */}

{/* Start Hero Section */}
<div class="hero">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-lg-5">
        <div class="intro-excerpt">
          <h1>Cart</h1>
        </div>
      </div>
      <div class="col-lg-7">
        
      </div>
    </div>
  </div>
</div>
{/* End Hero Section */}

<div className="container mt-5">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-3">
                <img src={item.image} alt={item.title} width="60" />
                <div>
                  <h5>{item.title}</h5>
                  <p>
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-4">
              <h4>Total: ${calculateTotal()}</h4>
              <button className="btn btn-primary">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>



{/* Start Footer Section */}
<footer class="footer-section">
<div class="container relative">

  <div class="sofa-img">
    <img src="assets/images/sofa.png" alt="Image" class="img-fluid"/>
  </div>

  <div class="row">
    <div class="col-lg-8">
      <div class="subscription-form">
        <h3 class="d-flex align-items-center"><span class="me-1"><img src="images/envelope-outline.svg" alt="Image" class="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

        <form action="#" class="row g-3">
          <div class="col-auto">
            <input type="text" class="form-control" placeholder="Enter your name"/>
          </div>
          <div class="col-auto">
            <input type="email" class="form-control" placeholder="Enter your email"/>
          </div>
          <div class="col-auto">
            <button class="btn btn-primary">
              <span class="fa fa-paper-plane"></span>
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>

  <div class="row g-5 mb-5">
    <div class="col-lg-4">
      <div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Furni<span>.</span></a></div>
      <p class="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

      <ul class="list-unstyled custom-social">
        <li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
        <li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
      </ul>
    </div>

    <div class="col-lg-8">
      <div class="row links-wrap">
        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">Support</a></li>
            <li><a href="#">Knowledge base</a></li>
            <li><a href="#">Live chat</a></li>
          </ul>
        </div>

        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div class="col-6 col-sm-6 col-md-3">
          <ul class="list-unstyled">
            <li><a href="#">Nordic Chair</a></li>
            <li><a href="#">Kruzo Aero</a></li>
            <li><a href="#">Ergonomic Chair</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>

  <div class="border-top copyright">
    <div class="row pt-4">
      <div class="col-lg-6">
        <p class="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  {/* License information: https://untree.co/license/ */}
      </p>
      </div>

      <div class="col-lg-6 text-center text-lg-end">
        <ul class="list-unstyled d-inline-flex ms-auto">
          <li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

    </div>
  </div>

</div>
</footer>
    </div>
  )
}

export default cart
