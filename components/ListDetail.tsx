import * as React from 'react'

import { Donor } from '../interfaces'

type ListDetailProps = {
  item: Donor
}

const ListDetail = ({ item: donor }: ListDetailProps) => (
  <div>
    <h1>Detail for {donor.name}</h1>
    <p>ID: {donor.id}</p>
  </div>
)

export default ListDetail
