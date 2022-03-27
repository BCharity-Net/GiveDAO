import * as React from 'react'
import ListItem from './ListItem'
import { Donor } from '../interfaces'

type Props = {
  items: Donor[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
