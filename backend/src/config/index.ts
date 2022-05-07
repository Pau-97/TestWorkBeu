export const myApi = {
  myApiKey: process.env.MY_API_KEY || '23jhd2huweSDSI12nsiwe2',
  port: process.env.PORT  || '3001',
  name: process.env.MY_API_NAME || 'my-api-random',
  origin: process.env.MY_API_ORIGIN || '*',
  timedOut: process.env.MY_API_TIMEOUT || '30000'
}