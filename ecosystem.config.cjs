/* eslint-disable no-undef */

module.exports = {
    apps: [
      {
        name: "react-web-app",
        script: "serve",
        env: {
          PM2_SERVE_PATH: "./dist",
          PM2_SERVE_PORT: "4000",
          PM2_SERVE_SPA: "true",
        },
      },
    ],
  };