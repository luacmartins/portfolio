const ProjectCard = ({ data }) => {
  return (
    <div>
      <div>
        <header className='mt-2 text-2xl font-semibold leading-tight sm:mt-0'>{data.title}</header>
        <p className='mt-2 text-lg font-thin' dangerouslySetInnerHTML={{ __html: data.text }}></p>
      </div>
      <div className='flex justify-start py-2 mt-2 sm:py-3'>
        <a
          className='px-2 py-1 text-white bg-blue-500 rounded sm:w-32 sm:text-center hover:shadow hover:bg-blue-600'
          href={data.demo}
          alt={data.demoAlt}
          target='_blank'
        >
          Live site
        </a>
        <a
          className='px-2 py-1 ml-4 text-blue-500 border border-blue-500 rounded sm:w-32 sm:text-center hover:shadow hover:text-blue-600 hover:border-blue-600'
          href={data.code}
          alt={data.codeAlt}
          target='_blank'
        >
          {data.codeAlt}
        </a>
        {data.serverCode && (
          <a
            className='px-2 py-1 ml-4 text-blue-500 border border-blue-500 rounded sm:w-32 sm:text-center hover:shadow hover:text-blue-600 hover:border-blue-600'
            href={data.serverCode}
            alt={data.serverCodeAlt}
            target='_blank'
          >
            {data.serverCodeAlt}
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
