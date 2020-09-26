import SocialBar from '../components/SocialBar'
import renderer from 'react-test-renderer'

test('should render social bar correctly', () => {
   const component = renderer.create(<SocialBar />)
   expect(component).toMatchSnapshot()
})
