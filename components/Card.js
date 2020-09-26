const Card = ({ data }) => {
   return (
      <div className="border border-gray-300 rounded-lg overflow-hidden">
         <div className="p-2 sm:p-4">
            <h1 className="font-semibold text-xl leading-tight mt-2 sm:mt-0">{data.title}</h1>
            <p className="mt-4 font-thin text-gray-700">{data.text}</p>
         </div>
         <div className="flex justify-start mt-2 border-t py-2 sm:py-3 pl-2 sm:pl-4">
            <a className="bg-blue-500 rounded px-2 py-1 text-white sm:w-32 sm:text-center hover:shadow hover:bg-blue-600" href={data.demo} alt={data.demoAlt} target="_blank">Live demo</a>
            <a className="border border-blue-500 px-2 py-1 text-blue-500 rounded ml-4 sm:w-32 sm:text-center hover:shadow hover:text-blue-600 hover:border-blue-600" href={data.code} alt={data.codeAlt} target="_blank">Source code</a>
         </div>
      </div>
   );
}

export default Card;