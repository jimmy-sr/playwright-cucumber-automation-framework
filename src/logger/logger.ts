import colors from '@colors/colors'
import * as winston from 'winston'

import dotenv from 'dotenv'
dotenv.config({ path: './env/.env' })

//Define the custom format
const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  let colorizeMessage = message
  switch (level) {
    case 'error':
      colorizeMessage = colors.red(String(message))
      break
    case 'warning':
      colorizeMessage = colors.yellow(String(message))
      break
    case 'info':
      colorizeMessage = colors.green(String(message))
      break
  }
  return `${timestamp} ${level}: ${colorizeMessage}`
})

// create a logger instance

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(winston.format.timestamp(), myFormat),
  transports: [new winston.transports.Console()],
})

export default logger;
