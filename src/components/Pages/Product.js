import React, { Fragment } from 'react';
import "../../components/css/product.css";
import { Link } from 'react-router-dom';
import sw1 from "../../assets/sw1.png";

import $ from 'jquery';


const Product = () => {
  // Check active classes
var checkClass = function() {
  if ( $('.item').hasClass('hide') ) {
    $('.item').removeClass('hide');
  }
};

// Category filters
$('.all').click( function() {
  checkClass();
});
$('.gateways').click( function() {
  checkClass();
  $('.item:not(.gateways)').toggleClass('hide');
});
$('.Wifi').click( function() {
  checkClass();
  $('.item:not(.Wifi)').toggleClass('hide');
});
$('.Switches').click( function() {
  checkClass();
  $('.item:not(.Switches)').toggleClass('hide');
});
$('.Routers').click( function() {
  checkClass();
  $('.item:not(.Routers)').toggleClass('hide');
});
$('.Servers').click( function() {
  checkClass();
  $('.item:not(.Servers)').toggleClass('hide');
});


// Active tag
$('.button').click(function(){
  $('.button').removeClass('active');
  $(this).addClass('active');
})
  
  
  return (
    <Fragment>
      <section className='container'>

      <h1>Our Product</h1>

      <div class="buttons">
        <button class="button all active">All</button>
        <button class="button Wifi">Wifi</button>
        <button class="button Switches">Switches</button>
        <button class="button gateways">gateways</button>
        <button class="button Routers">Routers</button>
        <button class="button Servers">Servers</button>
      </div>

      <div class="grid row">
        <div class="item col-md-3 gateways">
          <Link to="/product">

           
          </Link>

        </div>
        <div class="item col-md-3 Wifi">

        </div>
        
        <div class="item col-md-3 Switches">
        <Link to="/product">

           
        <img src={sw1} className="" alt="switches_squarenetwork" />
</Link>
        
        </div>
        <div class="item col-md-3 Switches">
        <Link to="/product">

           
<img src={sw1} className="" alt="switches_squarenetwork" />
</Link>

        </div>
        <div class="item col-md-3 Routers"></div>
        <div class="item col-md-3 Wifi"></div>
        <div class="item col-md-3 Wifi"></div>
        <div class="item col-md-3 Switches">
        <Link to="/product">

           
<img src={sw1} className="" alt="switches_squarenetwork" />
</Link>

        </div>
        <div class="item col-md-3 Servers"></div>
        <div class="item col-md-3 gateways"></div>
        <div class="item col-md-3 Wifi"></div>
        <div class="item col-md-3 Switches">
        <Link to="/product">

           
<img src={sw1} className="" alt="switches_squarenetwork" />
</Link>

        </div>
        <div class="item col-md-3 Switches">
        <Link to="/product">

           
<img src={sw1} className="" alt="switches_squarenetwork" />
</Link>

        </div>
        <div class="item col-md-3 Routers"></div>
        <div class="item col-md-3 Wifi"></div>
        <div class="item col-md-3 Wifi"></div>
        <div class="item col-md-3 Switches">
        <Link to="/product">

           
<img src={sw1} className="" alt="switches_squarenetwork" />
</Link>

        </div>
        <div class="item col-md-3 Servers"></div>
      </div>
      </section>

    </Fragment>
  )
}

export default Product;