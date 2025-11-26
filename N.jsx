import React from "react";
import "./N.css";

export default function N() {
  return (
    <nav className="navbar navbar-expand-lg main-nav d-block">
      {/* MOBILE NAVBAR WRAPPER */}
      <div className="navbar p-2 mt-2 navbar-light d-block d-lg-none">
        <div className="container-fluid d-none d-sm-flex justify-content-between align-items-center">

          {/* HAMBURGER BUTTON */}
          <div>
            <button
              className="btn p-0"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                className="svg-inline--fa fa-bars fa-2x"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                ></path>
              </svg>
            </button>
          </div>

          {/* LOGO */}
          <div>
            <a href="/goolokweb">
              <img
                src="/goolokweb/static/media/Goolok Final Logo.b72ab7da045d271d935b.png"
                className="logo"
                loading="lazy"
                alt="logo"
              />
            </a>
          </div>

          {/* SEARCH BAR */}
          <div className="search-wrapper">
            <div className="p-icon-field p-icon-field-right">
              <span className="pi pi-search p-input-icon"></span>
              <input
                className="nav-search-bar p-inputtext p-component"
                placeholder="Search property tap"
              />
            </div>
          </div>

          {/* ICONS WRAPPER */}
          <div className="d-flex align-items-center icons-wrapper">

            {/* LOGIN MODAL */}
            <div>
              <div className="modal modal-overlay" tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div>
                      <button type="button" className="close closebutton">
                        <span>×</span>
                      </button>
                    </div>

                    <div className="modal-body">
                      <form className="p-4">
                        <div className="form-group">
                          <h3 className="mb-4 model-heading">
                            <strong>Enter Phone number to continue</strong>
                          </h3>
                        </div>

                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">+91</span>
                          </div>
                          <input
                            type="text"
                            maxLength="10"
                            autoComplete="off"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>

                        <div className="mb-4 mt-4 d-none" id="enterotp">
                          <label>Enter the OTP</label>
                          <div id="otp-input" className="mt-1">
                            <input type="text" maxLength="1" />
                            <input type="text" maxLength="1" />
                            <input type="text" maxLength="1" />
                            <input type="text" maxLength="1" />
                          </div>
                        </div>

                        <a className="btn_1 mt-4 rounded full-width" href="/goolokweb">
                          Login
                        </a>

                        <div className="text-center add_top_10 mt-3">
                          Don't have an account? <a href="/goolokweb">Sign Up</a>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* WISHLIST DROPDOWN */}
            <div className="nav-item dropdown wishlist-container">
              <div className="nav-link p-0" data-bs-toggle="dropdown">
                <span className="MuiBadge-root">
                  <svg className="MuiSvgIcon-root" viewBox="0 0 24 24">
                    <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28"></path>
                  </svg>
                </span>
              </div>

              <ul className="dropdown-menu wishlist-menu">
                <div className="mt-3 text-center">
                  <button className="MuiButtonBase-root" type="button">
                    Log in
                  </button>
                  <p className="mt-2 small-text">To add or view items in wishlist</p>
                </div>
              </ul>
            </div>

            {/* BELL DROPDOWN */}
            <div className="nav-item dropdown bell-container">
              <div className="bell-icon-wrapper nav-link p-0" data-bs-toggle="dropdown">
                <svg className="MuiSvgIcon-root" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"></path>
                </svg>
              </div>

              <ul className="dropdown-menu bell-menu">
                <div className="d-flex justify-content-center">
                  <p className="p-2">No notifications available</p>
                </div>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}
