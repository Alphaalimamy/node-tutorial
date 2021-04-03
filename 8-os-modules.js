const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method retursn the system uptime in seconds
console.log(`The system uptime is: ${os.uptime() / 360} hours`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
console.log("Total memory: " + os.totalmem);
