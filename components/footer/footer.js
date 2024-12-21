import style from './footer.module.css'

export default function Footer(){
    return <div >
<>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className=  " container my-5">
    <footer className="bg-dark text-center text-lg-start text-white">
      {/* Grid container */}
      <div className="container p-4">
        {/*Grid row*/}
        <div className="row mt-4">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-book fa-fw fa-sm me-2" />
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-book fa-fw fa-sm me-2" />
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-user-edit fa-fw fa-sm me-2" />
                  Our authors
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Meet Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-shipping-fast fa-fw fa-sm me-2" />
                Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-backspace fa-fw fa-sm me-2" />
                 Instagram
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="far fa-file-alt fa-fw fa-sm me-2" />
                Twitter
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="far fa-file-alt fa-fw fa-sm me-2" />
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Publishing house</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  Address
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  123 Street
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  05765 NY
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-briefcase fa-fw fa-sm me-2" />
                  Send us a Note
                </a>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Write to us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-at fa-fw fa-sm me-2" />
                  Help us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-shipping-fast fa-fw fa-sm me-2" />
                  Check the order status
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  <i className="fas fa-envelope fa-fw fa-sm me-2" />
                  Join the newsletter
                </a>
              </li>
            </ul>

         
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  </div>
  {/* End of .container */}
</>


    </div>
}