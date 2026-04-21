import { useEffect } from 'react';
import { AppRoutes } from './routes/routes';
import { useLocation } from 'react-router-dom';
import './assets/css/bootstrap.min.css'
import './App.css';
import './assets/css/mainStyles.css'
import './assets/css/responsive.css'
import './assets/css/owl.css'
import './assets/css/animations.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, faCircleCheck, faCheck, faTimes,
  faBars, faCopy, faArrowsRotate, faDownload, faGear, faCogs,
  faFileCirclePlus, faTrash, faTrashCan, faEraser, faXmark,
  faPaperPlane, faCheckCircle, faUser, faPlus, faMinus,
  faCirclePlus, faBullseye, faLightbulb, faSchool,
  faHandsHelping, faPuzzlePiece, faPencil, faGraduationCap,
  faEnvelope, faPhone, faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faEye, faEyeSlash, faCircleCheck, faCheck,
  faTimes, faBars, faCopy, faArrowsRotate,
  faDownload, faGear, faCogs, faFileCirclePlus,
  faTrash, faTrashCan, faEraser, faXmark,
  faPaperPlane, faCheckCircle, faUser, faPlus,
  faMinus, faCirclePlus, faBullseye, faLightbulb, faSchool,
  faHandsHelping, faPuzzlePiece, faPencil, faGraduationCap,
  faEnvelope, faPhone, faLocationDot,
);

function App() {
  const location = useLocation().pathname;
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const animatedElements = document.querySelectorAll(".animate");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              // observer.unobserve(entry.target);
            } else {
              entry.target.classList.remove("in-view");
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        }
      );
  
      animatedElements.forEach((el) => observer.observe(el));
  
      // store observer on window temporarily so cleanup can access it
      window.__pageObserver = observer;
    });
  
    return () => {
      cancelAnimationFrame(raf);
  
      if (window.__pageObserver) {
        window.__pageObserver.disconnect();
        window.__pageObserver = null;
      }
    };
  }, [location]);
  return (
    <>
        <AppRoutes />
    </>
  );
}

export default App;
