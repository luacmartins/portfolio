import Head from 'next/head'
import SocialBar from '../components/SocialBar'
import List from '../components/List'
// import { getSortedProjectsData, getBioData } from '../lib/fetchData'
import { getSortedData } from '../lib/fetchData'

export default function IndexPage({
  allProjectsData,
  bioData,
  allExperienceData,
  allEducationData,
}) {
  return (
    <>
      <Head>
        <title>Carlos Martins Portfolio</title>
      </Head>
      <div className='min-h-screen px-4 py-16 text-gray-800 lg:px-0 lg:py-0'>
        <div className='flex flex-col items-center justify-center text-center sm:px-24 lg:justify-start lg:pt-16 lg:fixed lg:px-16 lg:w-104'>
          <img
            className='w-48 rounded-full shadow-lg'
            src={bioData.profilePhoto}
            alt={bioData.profilePhotoAlt}
          />
          <h2 className='mt-8 text-2xl font-thin leading-tight whitespace-pre-line'>
            {bioData.heading}
          </h2>
          <div className='mt-4'>
            <SocialBar />
          </div>
        </div>
        <div className='mt-12 sm:px-24 lg:px-0 lg:pt-16 lg:mt-0 lg:w-1/2 lg:ml-104 lg:pb-16'>
          <p className='text-lg font-thin' dangerouslySetInnerHTML={{ __html: bioData.text }}></p>

          {/* Projects */}
          <section className='mt-16'>
            <header className='mt-6 text-3xl font-semibold border-b'>Projects</header>
            <List data={allProjectsData} card='project' />
          </section>

          {/* Experience */}
          <section className='mt-16'>
            <header className='mt-6 text-3xl font-semibold border-b'>Experience</header>
            <List data={allExperienceData} />
          </section>

          {/* Education */}
          <section className='mt-16'>
            <header className='mt-6 text-3xl font-semibold border-b'>Education</header>
            <List data={allEducationData} />
          </section>
        </div>
      </div>
    </>
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
      allEducationData,
    },
  }
}
