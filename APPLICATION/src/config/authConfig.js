export const authConfig = {
  loginUrl: "", // SSO ??
  relayingParty: "urn:myassetmap-dev",
  authTokenCookie: "myassetmap-token-local",
  authIDCookie: "myassetmap-id-local",
  authCookie: "myassetmap-auth-local",
  authUsernameCookie: "myassetmap-user-local",
  secretAccessKey: "1mqxM1c9/gZY/EhYocJrgWP111mHaLZvJDhROdzN",
  accessKeyId: "AKIA3SSZS6TSSJX7JGPS"
};

export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "my-asset-maps-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ye8wu3frvb.execute-api.us-east-1.amazonaws.com/dev/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_0HnrBnwXU",
    APP_CLIENT_ID: "1iv0urf1ovrqkqoefsipc1mpf",
    IDENTITY_POOL_ID: "us-east-1:ddc9dcd8-966c-4ba8-81cd-6b0db1a588a5"
  }
};
