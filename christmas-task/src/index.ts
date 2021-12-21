import './styles.css'
import { Constructor } from "./components/constructor";
import { Setter } from './components/setter';



const constructor = new Constructor;
const setter = new Setter;

setter.setListeners();
constructor.createCards();
