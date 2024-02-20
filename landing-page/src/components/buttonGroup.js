import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import '../font/Inter-SemiBold.ttf';
import {ReactComponent as ArrowIcon} from '../icons/arrow.svg';

function ButtonGroup() {
    return (  
      <body class = "top-container">
        <div class ='btn-common-black'>
            <div class = 'btnTextBox'>GET STARTED</div>
            <div class = 'btnIconBox'>
                <ArrowIcon class = 'icon'/>
            </div>
        </div>
      </body>
    );
  }
  
  export default ButtonGroup;