import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToggleButton from './atoms/toggleButton';
import './reset.scss'
import './popup.scss';

/* eslint-disable @typescript-eslint/no-unused-vars */
const PopUp : React.FunctionComponent = () => (
    <React.Fragment>
      <header>
        <h1>{ chrome.i18n.getMessage('title') }</h1>
      </header>
      <main>
        <ul>
          <li>
            <p>test</p>
            <ToggleButton></ToggleButton>
          </li>
        </ul>
      </main>
    </React.Fragment>
);
/* eslint-enable @typescript-eslint/no-unused-vars */

ReactDOM.render(
  <PopUp />,
  document.getElementById('root'),
);
