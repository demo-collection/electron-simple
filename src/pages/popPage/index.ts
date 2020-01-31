const $shendMessageButton = document.getElementById('send-message-button');

const sendMessage = () => window.opener.postMessage({
  type: 1,
  message: '子窗口信息',
});

$shendMessageButton.addEventListener('click', sendMessage);
