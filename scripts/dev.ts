import createViteElectronService from '@electron-prokit/create-service';
import config from "../ep.config";

console.log(createViteElectronService)

createViteElectronService({
  render: config.render,
  preload: config.preload,
  work: config.work,
  main: config.main,
  electronPath: config.electronPath
});
