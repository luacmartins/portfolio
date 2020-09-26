import Card from './Card'

const List = ({ projects }) => {
   return (
      <>
         {projects.map((project) => (
            <div key={project.title} className="mb-6 sm:mb-8">
               <Card data={project} />
            </div>
         ))}
      </>
   );
}

export default List;