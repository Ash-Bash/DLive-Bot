import { BehaviorSubject } from 'rxjs';

const Window: any = window;
const { ipcRenderer } = Window.require('electron');

const rxCommands = new BehaviorSubject({});

ipcRenderer.send('getRxCommands');
ipcRenderer.on('rxCommands', (event: any, commands: {}) => {
  console.log(Object.keys(commands));
  rxCommands.next(commands);
});

const setRxCommands = (commands: any) => {
  ipcRenderer.send('setRxCommands', commands);
};

export { rxCommands, setRxCommands };
