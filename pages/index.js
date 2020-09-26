import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Prices from '../components/Prices'

const Index =  (props) => (
    <Layout>
        <div>
           <h1>Welcome to BitzPrice</h1>
           <p>Check current Bitcoin rate</p>
           <Prices bpi={props.bpi} />
        </div>
    </Layout> 
)

Index.getInitialProps = async function() {
    const result = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await result.json()

    return {
        bpi: data.bpi
    }
}

export default Index