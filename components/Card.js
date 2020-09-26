const Card = ({ data }) => {
   return (
      <div>
         <span className="font-semibold text-gray-700 text-sm">{data.position}</span>
         <header className="font-semibold text-2xl leading-tight mt-2 sm:mt-0">{data.title}</header>
         <span className="text-gray-600 font-hairline text-sm">{data.period}</span>
         <p className="mt-2 font-thin text-lg">{data.text}</p>
      </div>
   );
}

export default Card;