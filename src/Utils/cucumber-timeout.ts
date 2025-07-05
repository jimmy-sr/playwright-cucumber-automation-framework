import { setDefaultTimeout } from "@cucumber/cucumber";

//load env variables from .env file
import { config as loadEnv } from 'dotenv';
const env = loadEnv({path: './env/.env'})

const customTimeout = parseInt(env.parsed?.CUCUMBER_CUSTOM_TIMEOUT || '60000');
setDefaultTimeout(customTimeout); // Set default timeout to 60 seconds