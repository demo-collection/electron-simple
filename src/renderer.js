const getProcessInfo = () => {
  console.log(process.getCPUUsage());
  console.log('plantform', process.platform);
};

document.getElementById('get-process').addEventListener('click', getProcessInfo);
