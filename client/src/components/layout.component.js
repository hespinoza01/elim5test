// import components
import { Header, Footer } from '../components'

export default function Layout({ children, className = '' }) {
    return (
        <main className='Layout'>
            <Header />

            <section className={className}>{children}</section>

            <Footer />
        </main>
    )
}
