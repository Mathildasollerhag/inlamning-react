import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../shoppingcart/ShoppingCart';
import { useSelector } from 'react-redux';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBIcon } from 'mdbreact';


export default function Navigation() {

  const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

  return (
<nav className="mb-1 navbar navbar-expand-lg navbar-dark blue-grey darken-3 py-4">
  <Link className="h1 text-white ml-3" to="/">Wineshop<i className="ml-1 fas fa-wine-glass-alt"></i></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link ml-5 h5" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link ml-5 h5" to="/mypage">My page</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link ml-5 h5" to="/about">About us</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons mr-5">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" href="!#"
          aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-default text-center"
          aria-labelledby="navbarDropdownMenuLink-333">
          <button className="btn btn-light">Log in</button>
        </div>
      </li>
      <MDBDropdown className="nav-item dropdown">
                <MDBDropdownToggle nav caret>
                { totalCartQuantity } <MDBIcon icon="shopping-cart" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="dropdown-default shopping-cart shoppingCart z-depth-1 text-center">

                  <ShoppingCart />

                </MDBDropdownMenu>
      </MDBDropdown>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" href="!#"
          aria-haspopup="true" aria-expanded="false">
          <span className="nav-item">{totalCartQuantity}</span>
          <i className="fas fa-shopping-cart"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-default shoppingCart z-depth-1 text-center"
          aria-labelledby="navbarDropdownMenuLink-333">
          <ShoppingCart />
        </div>
      </li> */}
    </ul>
  </div>
</nav>
    )
}


