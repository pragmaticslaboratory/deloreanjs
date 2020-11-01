import introJs from 'intro.js';
import 'intro.js/introjs.css';
import './styles.css';

let intro = introJs('#root');

intro.setOptions({
  steps: [
    {
      intro: `<h3>Would you like to travel back in time?</h3> <p >With DeloreanJS 
      and its <b>timepoints</b> you will be able. <br> Let's get started 👩🏻‍💻 👨🏿‍💻!</p>`,
      position: 'center',
    },
    {
      element: '.settings-section',
      intro: `<h3>Advanced settings</h3> <p>In this panel you can establish an advanced configuration 
      such as activating the <b>implicit timepoints mode</b> 😯</p>`,
      position: 'right',
    },
    {
      element: '.variables-section',
      intro: `<h3>Watch variables</h3> <p>Here you must set the variables you want to debug 🔍</p>`,
      position: 'right',
    },
    {
      element: '.state-section',
      intro: `<h3>State</h3> <p>DeloreanJS captures the state of your program at each timepoint, 
      in this panel you can <b>view and modify the variables</b> to experience new scenarios in your program!</p>`,
      position: 'right',
    },
    {
      element: '.codemirror-container',
      intro: `<h3>Text Editor</h3> <p>The editor detect your changes and you can add new tabs 😄</p>`,
      position: 'right',
    },
    {
      element: '.console-container',
      intro: `<h3>Console</h3> <p>Logs, error, information of your program will be exposed on the console</p>`,
      position: 'left',
    },
    {
      element: '.timepoint-list-container',
      intro: `<h3>Timepoint</h3> <p>Your time points are displayed in this panel, remember to select one to view its state</p>`,
      position: 'right',
    },
    {
      element: '.timeline-viewer',
      intro: `<h3>Timeline Viewer</h3> <p>The <b>timeline</b> of your program helps you to visualize the timepoints</p>`,
      position: 'top',
    },
    {
      element: '.fab-content-container',
      intro: `<h3>Run, Stop and Resume buttons</h3> <p>Run your program!</p>`,
      position: 'top',
    },
  ],
  showStepNumbers: 'False',
});

export default intro;
