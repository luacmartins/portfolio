import Icon from '../components/Icon'
import renderer from 'react-test-renderer'

test('should render github icon correctly', () => {
   const component = renderer.create(<Icon type='github' />)
   expect(component).toMatchSnapshot()
})

test('should render twitter icon correctly', () => {
   const component = renderer.create(<Icon type='twitter' />)
   expect(component).toMatchSnapshot()
})

test('should render linkedin icon correctly', () => {
   const component = renderer.create(<Icon type='linkedin' />)
   expect(component).toMatchSnapshot()
}) 