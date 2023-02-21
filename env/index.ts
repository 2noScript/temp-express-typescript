import dotenv from 'dotenv'
dotenv.config()

export const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET
export const PORT = process.env.PORT

// export { SECRET_KEY, PORT }
