import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getSortedData(folder) {
   const directory = path.join(process.cwd(), `/pages/${folder}`)
   const fileNames = fs.readdirSync(directory)
   const allData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(directory, fileName)
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
   return allData.sort((a, b) => {
      if (a.date < b.date) {
         return 1
      } else {
         return -1
      }
   })
}