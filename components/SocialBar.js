import Icon from './Icon'
const icons = [{
   type: 'github',
   alt: 'github icon',
   link: 'https://github.com/luacmartins'
}, {
   type: 'linkedin',
   alt: 'linkedin icon',
   link: 'https://www.linkedin.com/in/luacmartins/'
}]


const SocialBar = () => {
   return (
      <div className="flex">
         {icons.map((icon) => (
            <a key={icon.type} className="h-6 w-6 mx-2 hover:opacity-75" href={icon.link} alt={icon.alt} target="_blank">
               <Icon type={icon.type} />
            </a>
         ))}
      </div>
   )
}

export default SocialBar;