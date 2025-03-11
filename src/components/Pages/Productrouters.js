import React, { Fragment } from 'react';

const Productrouters = () => {
  $(document).ready(function(){ 
    $('.tab-a').click(function(){  
      $(".tab").removeClass('tab-active');
      $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
      $(".tab-a").removeClass('active-a');
      $(this).parent().find(".tab-a").addClass('active-a');
     });
});

  return (
   <Fragment>
<div class="tab-container">
<div class="tab-menu">
      <ul>
         <li><a href="#" class="tab-a active-a" data-id="tab1">TAB-1</a></li>
         <li><a href="#" class="tab-a" data-id="tab2">TAB-2</a></li>
         <li><a href="#" class="tab-a" data-id="tab3">TAB-3</a></li>
         <li><a href="#" class="tab-a" data-id="tab3">TAB-4</a></li>
      </ul>
   </div>

   <div  class="tab tab-active" data-id="tab1">
         <h2>heading of tab one</h2>
         <p>Content of tab one</p>
         
   </div>

   <div  class="tab" data-id="tab2">
          <h2>heading of tab two</h2>
         <p>Content of tab two</p>
   </div>
  
      <div  class="tab" data-id="tab3">
          <h2>heading of tab three</h2>
         <p>Content of tab three</p>     
   </div>

  <div  class="tab" data-id="tab3">
          <h2>heading of tab thr</h2>
         <p>Content of tab three</p>     
   </div>
  
</div>
   </Fragment>
   
  );

}

export default Productrouters;
