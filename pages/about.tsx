import Link from 'next/link'
import Layout from '../components/Layout'
import { profiles } from '../lensapi/profile/get-profiles'

const AboutPage = (data) => { 
  console.log(data)
  return (
  <Layout title="About | GiveDAO">
    <h1 className='py-3'>About</h1>
    <p className='px-3 py-3'>This is the about page</p>    
    {/* <ul>
      {data.profiles.items.map(item => <li key={item.id}>{item.id}</li>)}
    </ul> */}
    <p className='py-3'>
      <Link href="/">
        <a>GO Home</a>
      </Link>
    </p>
  </Layout>
)}

export default AboutPage

export const getStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const data = await profiles()
  return { props: { data } }
}
