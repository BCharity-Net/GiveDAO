// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Donor } from 'path/to/interfaces';

export type Donor = {
  id: number
  name: string
}

export type Volunteer = {
  id: number
  name: string
}

export type Charity = {
  id: number
  name: string
}