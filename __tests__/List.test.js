import List from '../components/List'
import { getSortedData } from '../lib/fetchData'
import renderer from 'react-test-renderer'

const projectData = getSortedData('projects')
const educationData = getSortedData('education')

test('should render project list correctly', () => {
   const component = renderer.create(<List data={projectData} card='project' />)
   expect(component).toMatchSnapshot()
})

test('should render regular list correctly', () => {
   const component = renderer.create(<List data={educationData} />)
   expect(component).toMatchSnapshot()
}) 