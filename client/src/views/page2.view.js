import { Link } from 'react-router-dom'

// import assets
import { ReactComponent as Elim5MinionAsset } from '../assets/elim5_minion.svg'

// import components
import { Layout, Button } from '../components'

// import hooks
import { usePage2 } from '../hooks'

export default function Page2() {
    const { demo1Ref, demo2Ref, demo3Ref } = usePage2()

    return (
        <Layout className='Page2'>
            <section className='Page2-title'>
                <Elim5MinionAsset className='Minion' />

                <h2>welcome to demo visualization</h2>

                <Link to='/'>
                    <Button>Home</Button>
                </Link>
            </section>

            <section ref={demo1Ref} className='Demo Demo1'>
                <Elim5MinionAsset className='Minion' />

                <h2>
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span className='space'>-</span>
                    <span>T</span>
                    <span>o</span>
                    <span className='space'>-</span>
                    <span>D</span>
                    <span>e</span>
                    <span>m</span>
                    <span>o</span>
                    <span className='space'>-</span>
                    <span>1</span>
                </h2>
            </section>

            <section ref={demo2Ref} className='Demo Demo2'>
                <Elim5MinionAsset className='Minion' />

                <h2>welcome to demo 2</h2>
            </section>

            <section ref={demo3Ref} className='Demo Demo3'>
                <Elim5MinionAsset className='Minion' />

                <h2>
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span className='space'>-</span>
                    <span>T</span>
                    <span>o</span>
                    <span className='space'>-</span>
                    <span>D</span>
                    <span>e</span>
                    <span>m</span>
                    <span>o</span>
                    <span className='space'>-</span>
                    <span>3</span>
                </h2>
            </section>
        </Layout>
    )
}
