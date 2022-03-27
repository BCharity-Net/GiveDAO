import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | GiveDAO">
    <h1 className='py-3'>Hello GiveDAO! 👋</h1>
    <p className='px-3 py-3'>
      <Link href="/donors">
        <a>Go Donors</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
