import type { NextApiHandler } from 'next'
import { authTokenName } from 'src/constants/authTokenName'

const handler: NextApiHandler = (req, res) => {
  const token = req.cookies[authTokenName]

  setTimeout(() => {
    if (!token) {
      console.log('unauthorized')
      res.status(401).send('Please login.')
    } else {
      console.log('authorized')
      res.status(200).json({
        name: 'Recoil Kun',
        age: 1,
      })
    }
  }, 1000)
}

export default handler
