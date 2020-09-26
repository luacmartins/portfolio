import SocialBar from '../components/SocialBar'
import List from '../components/List'
// import { getSortedProjectsData, getBioData } from '../lib/fetchData'
import { getSortedData } from '../lib/fetchData'

export default function IndexPage({ allProjectsData, bioData, allExperienceData, allEducationData }) {
   return (
      <div className="min-h-screen py-16 px-4 text-gray-800 lg:px-0 lg:py-0">
         <div className="flex items-center justify-center sm:px-24 lg:justify-start lg:pt-16 text-center flex-col lg:fixed lg:px-16 lg:w-104">
            <img className="rounded-full w-48 shadow-lg" src={bioData.profilePhoto} alt={bioData.profilePhotoAlt} />
            <h2 className="mt-8 text-2xl leading-tight font-thin">{bioData.heading}</h2>
            <div className="mt-4">
               <SocialBar />
            </div>
         </div>
         <div className="mt-12 sm:px-24 lg:px-0 lg:pt-16 lg:mt-0 lg:w-1/2 lg:ml-104 lg:pb-16">
            <p className="font-thin text-lg">{bioData.text}</p>

            {/* Experience */}
            <section className="mt-16">
               <header className="font-semibold text-3xl mt-6 border-b">Experience</header>
               <List data={allExperienceData} />
            </section>

            {/* Projects */}
            <section className="mt-16">
               <header className="font-semibold text-3xl mt-6 border-b">Projects</header>
               <List data={allProjectsData} card='project' />
            </section>

            {/* Education */}
            <section className="mt-16">
               <header className="font-semibold text-3xl mt-6 border-b">Education</header>
               <List data={allEducationData} />
            </section>
         </div>
      </div>
   )
}

export async function getStaticProps() {
   const allProjectsData = getSortedData('projects')
   const bioData = getSortedData('bio')[0]
   const allExperienceData = getSortedData('experience')
   const allEducationData = getSortedData('education')
   return {
      props: {
         allProjectsData,
         bioData,
         allExperienceData,
         allEducationData
      }
   }
}

