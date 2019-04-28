import { BehaviorSubject } from 'rxjs';

const Window: any = window;
const { ipcRenderer } = Window.require('electron');

const rxConfig = new BehaviorSubject({});

ipcRenderer.send('getRxConfig');
ipcRenderer.on('rxConfig', (event: any, config: any) => {
  rxConfig.next(config);
});

const setRxConfig = (config: any) => {
  ipcRenderer.send('setRxConfig', config);
};

export { rxConfig, setRxConfig };
