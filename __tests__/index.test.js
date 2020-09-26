import IndexPage from '../pages/index'
import renderer from 'react-test-renderer'
import { getSortedData } from '../lib/fetchData'

const allProjectsData = getSortedData('projects')
const bioData = getSortedData('bio')[0]
const allExperienceData = getSortedData('experience')
const allEducationData = getSortedData('education')

test('should render index page correctly', () => {
   const component = renderer.create(<IndexPage bioData={bioData} allProjectsData={allProjectsData} allExperienceData={allExperienceData} allEducationData={allEducationData} />)
   expect(component).toMatchSnapshot()
}) 