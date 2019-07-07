import { run } from './app/app';
import './main.scss';
import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';

const componentService = new ComponentService();
const alertService = new AlertService();
run(alertService, componentService);
