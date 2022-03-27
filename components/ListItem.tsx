import React from 'react'
import Link from 'next/link'

import { Donor } from '../interfaces'

type Props = {
  data: Donor
}

const ListItem = ({ data }: Props) => (
  <Link href="/donors/[id]" as={`/donors/${data.id}`}>
    <a className='px-6'>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
