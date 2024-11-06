export const MONGODB_CONNECTION = "";
export const JWT_SECRET = ""; // token secret
export const JWT_EXPIRATION_TIME = 60*60*24*30; // token expiration



// four variables for mail
export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";


// size limit for how much megabytes of json can be used
export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true; // url encoding 

// user daily request rate limit to avoid cyber attack
export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 min
export const REQUEST_LIMIT_NUMBER = 3000 // per 15 min 3000 req allowed

// backend requeset response cachein hobe kina
export const WEB_CACHE = false;

export const PORT =5050;