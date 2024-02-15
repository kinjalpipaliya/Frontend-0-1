import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './font/Inter-SemiBold.ttf';

function App() {

   var myInput = true;

  return (  
    <body class="text-center">
      <div class="m-5 d-flex">
        <div class="flex-fill">
          <a href="#0" class={(!myInput ? 'my-custom-button-disabled' : 'my-custom-button')}>Button CTA</a>
        </div>
        <div class="flex-fill">
          {/* <a href="#0" class = "my-custom-button">Button CTA</a> */}
        </div>
        <div class="flex-fill">
          {/* <a href="#0" class = "my-custom-button">Button CTA</a> */}
        </div>
      </div>
    </body>
  );
}

export default App;
