import { AppRoutes } from './routes/routes';
import './assets/css/bootstrap.min.css'
import './App.css';
import './assets/css/mainStyles.css'
import './assets/css/responsive.css'
import './assets/css/owl.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, faCircleCheck, faCheck, faTimes,
  faBars, faCopy, faArrowsRotate, faDownload, faGear, faCogs,
  faFileCirclePlus, faTrash, faTrashCan, faEraser, faXmark,
  faPaperPlane, faCheckCircle, faUser, faPlus, faMinus,
  faCirclePlus, faBullseye, faLightbulb, faSchool,
  faHandsHelping, faPuzzlePiece, faPencil, faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faEye, faEyeSlash, faCircleCheck, faCheck,
  faTimes, faBars, faCopy, faArrowsRotate,
  faDownload, faGear, faCogs, faFileCirclePlus,
  faTrash, faTrashCan, faEraser, faXmark,
  faPaperPlane, faCheckCircle, faUser, faPlus,
  faMinus, faCirclePlus, faBullseye, faLightbulb, faSchool,
  faHandsHelping, faPuzzlePiece, faPencil, faGraduationCap,
);

function App() {
  return (
    <>
        <AppRoutes />
    </>
  );
}

export default App;
