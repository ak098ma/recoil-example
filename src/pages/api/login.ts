import type { NextApiHandler } from 'next'
import { authTokenName } from 'src/constants/authTokenName'

const handler: NextApiHandler = (req, res) => {
  const { userId, password } = req.body
  if (userId === 'userId' && password === 'password') {
    res.setHeader('Set-Cookie', `${authTokenName}=test`)
    res.status(200).send('')
  } else {
    res.status(401).send('')
  }
}

export default handler
