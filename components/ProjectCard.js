const ProjectCard = ({ data }) => {
   return (
      <div>
         <div>
            <header className="font-semibold text-2xl leading-tight mt-2 sm:mt-0">{data.title}</header>
            <p className="mt-2 font-thin text-lg">{data.text}</p>
         </div>
         <div className="flex justify-start mt-2 py-2 sm:py-3">
            <a className="bg-blue-500 rounded px-2 py-1 text-white sm:w-32 sm:text-center hover:shadow hover:bg-blue-600" href={data.demo} alt={data.demoAlt} target="_blank">Live demo</a>
            <a className="border border-blue-500 px-2 py-1 text-blue-500 rounded ml-4 sm:w-32 sm:text-center hover:shadow hover:text-blue-600 hover:border-blue-600" href={data.code} alt={data.codeAlt} target="_blank">Source code</a>
         </div>
      </div>
   );
}

export default ProjectCard;