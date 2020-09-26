import ProjectCard from './ProjectCard'
import Card from './Card'

const List = ({ data, card }) => {
   return (
      <div className="mt-6">
         {data.map((item) => (
            <div key={item.title} className="mb-6 sm:mb-8">
               {card === 'project' && <ProjectCard data={item} />}
               {card !== 'project' && <Card data={item} />}
            </div>
         ))}
      </div>
   );
}

export default List;