import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="container mx-auto">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="py-6"> 
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/donors">
          <a>Donors</a>
        </Link>{' '}
        |{' '}
        <Link href="/volunteers">
          <a>Volunteers</a>
        </Link>{' '}
        |{' '}
        <Link href="/charities">
          <a>Charities</a> 
        </Link>{' '}      
        | <a href="/api/donors">Donors API</a>
         {' '}
        |{' '}               
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <button className='bg-blue-300'>Login</button>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
