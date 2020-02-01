import { remote } from 'electron';

const net = remote.net;


// 实际开发中的时候， 几乎不会使用这种方法， 因为效率比较低
// 如果要做类似于代理之类的， 用这个还是挺好的
const $netButton = document.getElementById('net-button');
$netButton.addEventListener('click', () => {
  const request = net.request('https://www.biadu.com');

  request.on('response', (response) => {
    console.log(`STATUS: ${response.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
    response.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    response.on('end', () => {
      console.log('No more data in response.');
    });
  });
  request.end();
});

export default {};
