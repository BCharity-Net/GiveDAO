import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Charity } from '../../interfaces'
import { sampleCharityData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Charity[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Charitys List | GiveDAO">
    <h1 className='py-3'> Charitys List</h1>
    <p className='py-3'>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p className='px-3 py-3'>You are currently on: eCharitys</p>
    <List items={items} />
    <p className='px-3 py-3'>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Charity[] = sampleCharityData
  return { props: { items } }
}

export default WithStaticProps
