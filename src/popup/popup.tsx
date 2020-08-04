import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ToggleButton from './atoms/toggleButton';
import './reset.scss'
import './popup.scss';

const containers = [
  {
    container_id: 1,
    container_name: "テスト",
    tab_items: [1,2]
  }
];

const tabs = [
  {
    tab_id: 1,
    url: "https://github.com/dand-or?tab=repositories",
    title: "Your Repositories"
  },
  {
    tab_id: 2,
    url: "https://github.com/dand-or",
    title: "dand-or"
  },
];

/* eslint-disable @typescript-eslint/no-unused-vars */
const PopUp : React.FunctionComponent = () => (
    <React.Fragment>
      <header>
        <h1>{ chrome.i18n.getMessage('title') }</h1>
      </header>
      <main>
        <ul>
          {containers.map((c, i) => {
            return (
            <li key={i}>
              <p>{c.container_id}</p>
              <p>{c.container_name}</p>
              <ul>
                {c.tab_items.map((t, j) => {
                  const item = tabs.find((tab) => { return tab.tab_id === t });
                  return (
                  <li key={j}>
                    <p>{item?.tab_id}</p>
                    <a href={item?.url} target='_blank'>{item?.title}</a>
                  </li>
                  )
                })}
              </ul>
            </li>
            )
          })}
        </ul>
      </main>
    </React.Fragment>
);
/* eslint-enable @typescript-eslint/no-unused-vars */

ReactDOM.render(
  <PopUp />,
  document.getElementById('root'),
);
