import Card from '../components/Card'
import renderer from 'react-test-renderer'

const data = {
   title: 'Hadar Importação',
   date: '01-08-2019',
   period: 'Feb 2012 - Aug 2019 (7y 6mo)',
   position: 'CEO',
   text: 'Hadar is an imports and exports company supplying the textile industry in Brazil. I joined the struggling company in 2011 and during my time as CEO, I was able to restructure all of its operations from product lines and suppliers to logistics and fulfillment partners. I also secured $300k in funding for the growing operations of the company. These changes led the company to an upswing, getting out of the red and reporting over $1.5m in revenue and 28% net profit in the first year. In the following years, I was responsible for bringing 420+ clients and adding 7 new product lines. I left the company in 2019 to pursue my passion in technology.'
}

test('should render card correctly', () => {
   const component = renderer.create(<Card data={data} />)
   expect(component).toMatchSnapshot()
}) 