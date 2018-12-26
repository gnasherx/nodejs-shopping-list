const devConfig = {
  MONGO_URL: "mongodb://localhost/nodejs-shopping-list-dev"
};

const testConfig = {
  MONGO_URL: "mongodb://localhost/nodejs-shopping-list-test"
};

const prodConfig = {
  MONGO_URL: "mongodb://localhost/nodejs-shopping-list-prod"
};

const defaultConfig = {
  PORT: process.env.PORT || 8000
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    case "production":
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
};
