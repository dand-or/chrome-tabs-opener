import PageInfo from '../models/pageInfo';

const pageInfo = new PageInfo();

const sendMessageAction = () => (
  chrome.runtime.sendMessage(
    {
      type: 'CONTENT',
      payload: {
        message: `message from content ${pageInfo.href}`,
      },
    },
    (response) => {
      console.log(response);
    },
  )
);

sendMessageAction();
