import { useState } from 'react'

// import components
import { Button, Elim5Minion, Layout, Navbar } from '../components'

export default function Home() {
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <Layout className='Home'>
            <section className='Home-content'>
                <div className='Home-content__information'>
                    <h2 className='Home-content__information-title'>
                        Welcome to the Interactive Demo
                    </h2>

                    <p className='Home-content__information-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat, nisi molestiae amet tempora soluta.
                    </p>

                    <p className='Home-content__information-footer'>
                        Lorem ipsum dolor sit amet
                    </p>
                </div>

                <Elim5Minion />
            </section>

            <Button
                onClick={() => setShowNavbar(true)}
                className='btn-start-demo'
                primary
            >
                start demo
            </Button>

            {showNavbar && <Navbar onClose={() => setShowNavbar(false)} />}
        </Layout>
    )
}
