import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), '/pages/projects')
const bioDirectory = path.join(process.cwd(), '/pages/bio')

export function getSortedProjectsData() {
   const fileNames = fs.readdirSync(projectsDirectory)
   const allProjectsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
         id,
         ...matterResult.data
      }
   })
   // Sort posts by date
   return allProjectsData.sort((a, b) => {
      if (a.date < b.date) {
         return 1
      } else {
         return -1
      }
   })
}

export function getBioData() {
   const fileName = 'bio.md'
   const fullPath = path.join(bioDirectory, fileName)
   const fileContent = fs.readFileSync(fullPath, 'utf8')
   const matterResult = matter(fileContent)
   console.log(matterResult)
   return {
      id: 'bio',
      ...matterResult.data
   }
}