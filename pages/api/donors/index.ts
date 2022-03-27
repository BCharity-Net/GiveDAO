import { NextApiRequest, NextApiResponse } from 'next'
import { sampleDonorData } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleDonorData)) {
      throw new Error('Cannot find donor data')
    }

    res.status(200).json(sampleDonorData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
