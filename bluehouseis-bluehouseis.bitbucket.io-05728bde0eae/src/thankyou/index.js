
import "./assets/bootstrap/css/bootstrap.min.css";
//import "./assets/bootstrap/js/bootstrap.min.js";
import "./style.css";
import fb from "./assets/images/facebook.png";
import insta from "./assets/images/instagram.png";
import logo from "./assets/images/logo.jpeg";
import ok from "./assets/images/ok.png";
import whatsapp from "./assets/images/whatsapp.png";
import youtube from "./assets/images/youtube.png";

export default function ThankYou() {
    return (
      <div className="content h-100">
        <section className="h-100">
          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-12 text-center">
                <div className="logo text-left">
                  <a href="https://bluehouse.is"><img className="img-fluid" src={logo} alt="logo" /></a>
                </div>
                <div className="blk_top">
                  <p className="head">THANK YOU FOR BOOKING WITH US!</p>
                  <div className="img_blk">
                    <img className="img-fluid" src={ok} alt="ok" />
                  </div>
                  <p>Please, check your email inbox for your reservation details.</p>
                  <p>(If you can not find it check your spam folder)</p>
                </div>
                <div className="blk_btm">
                  <div className="row">
                    <div className="col-md-8 col-12">
                      <p>Discover more about Iceland and the Blue House:</p>
                      <ul className="list-unstyled d-flex justify-content-center">
                        <li><a href="https://www.instagram.com/bluehousebb"><img src={insta} alt="instagram" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCHwb5_DHT9B3iysOexwyH9A"><img src={youtube} alt="youtube" /></a></li>
                        <li><a className="button" href="https://bluehouse.is/blog">BLOG</a></li>
                        <li><a className="button" href="https://bluehouse.tourdesk.is/Tour">DAYTOURS</a></li>
                      </ul>
                    </div>
                    <div className="col-md-4 col-12">
                      <p>Also find us on:</p>
                      <ul className="list-unstyled d-flex justify-content-center">
                        <li><a href="https://www.facebook.com/bluehouseiceland"><img src={fb} alt="facebook" /></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="><img src={whatsapp} alt="whatsapp" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    )
}
	
