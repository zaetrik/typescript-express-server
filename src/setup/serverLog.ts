import fs from "fs";
import morgan from "morgan";
import morganJson from "morgan-json";

const logFormat = morganJson({
  short: ":method :url :status",
  status: ":status",
  remoteAddress: ":remote-addr",
  remoteUser: ":remote-user",
  date: ":date[web]",
  method: ":method",
  url: ":url",
  referrer: ":referrer",
  userAgent: ":user-agent"
});

export default morgan(logFormat, {
  stream: fs.createWriteStream("./logs/accessLogs.json", {
    flags: "a"
  })
});
