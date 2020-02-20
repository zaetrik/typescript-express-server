import helmet from "helmet";

export default helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'none'"],
      styleSrc: ["'self'"],
      scriptSrc: ["'self'"],
      //reportUri: "/",
      objectSrc: ["'self'"],
      upgradeInsecureRequests: true,
      frameAncestors: ["'none'"]
    }
  },
  referrerPolicy: { policy: "same-origin" }
  //featurePolicy: {}
});
