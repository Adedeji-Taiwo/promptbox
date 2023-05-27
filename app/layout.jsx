import '@styles/globals.css'
import Head from 'next/head'
import { Nav, Provider } from '@components'


export const metadata = {
    title: "Promptbox",
    description: "Discover & Share AI Prompts",
    icons: {
        icon: '/favicon.ico'
    }
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout