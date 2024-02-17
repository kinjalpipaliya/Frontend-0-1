import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import '../font/Inter-SemiBold.ttf';

function ButtonIcon() {

    var myInput = true;
  
    return (  
      <body class = "top-container">
        <div class="container">
          <div class="flex text-center">
          <a href="#0" class={(!myInput ? 'btn-common button-primary-disabled' : 'btn-common button-primary')}>Button CTA</a>
          <a href="#0" class={(!myInput ? 'btn-common button-secondary-disabled' : 'btn-common button-secondary')}>Button CTA</a>
          <a href="#0" class={(!myInput ? 'btn-common button-secondary-grey-disabled' : 'btn-common button-secondary-grey')}>Button CTA</a>        
          <a href="#0" class={(!myInput ? 'btn-common button-tertiary-disabled' : 'btn-common button-tertiary')}>Button CTA</a>        
          <a href="#0" class={(!myInput ? 'btn-common button-link-disabled' : 'btn-common button-link')}>Button CTA</a>        
          <a href="#0" class={(!myInput ? 'btn-common button-link-grey-disabled' : 'btn-common button-link-grey')}>Button CTA</a>      
          <a href="#0" class={(!myInput ? 'btn-common button-icon-disabled' : 'btn-common button-icon')}>Button CTA</a>    
          </div>
        </div>
      </body>
    );
  }
  
  export default ButtonIcon;