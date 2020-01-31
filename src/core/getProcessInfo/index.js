const getProcessInfo = () => {
  console.log(process.getCPUUsage());
  console.log('platform', process.platform);
};

document.getElementById('get-process').addEventListener('click', getProcessInfo);

module.exports = getProcessInfo;
