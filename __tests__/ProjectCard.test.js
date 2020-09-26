import ProjectCard from '../components/ProjectCard'
import renderer from 'react-test-renderer'

const data = {
   title: 'CM Photo',
   date: '2020-02-10',
   demo: 'website',
   demoAlt: 'live demo',
   code: 'github',
   codeAlt: 'source code',
   text: "I designed and wrote the code for my online photography store. I used React's Next.js framework and TailwindCSS to stactically generate the front end. State is managed with React hooks and data with markdown files. Testing is done using Jest. Fulfillment and payment were integrated using Rest APIs."
}

test('should render card correctly', () => {
   const component = renderer.create(<ProjectCard data={data} />)
   expect(component).toMatchSnapshot()
}) 