module.exports = ({ config }) => ({
  ...config,
  name: "RD Reponses",
  slug: "rd-reponses",
  orientation: "portrait",
  userInterfaceStyle: "light"
  ,android: {
    ...config.android,
    permissions: ["DETECT_SCREEN_CAPTURE"]
  }
});
