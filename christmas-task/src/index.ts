import './styles.css';
import { Router } from './components/router';

const router = new Router();

router.createRoute();

addEventListener('hashchange', function (): void {
  router.createRoute();
});
