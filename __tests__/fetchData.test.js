import { getSortedData } from '../lib/fetchData'

test('should fetch data and sort by date', () => {
   const data = getSortedData('bio')
   expect(data[0].heading).toEqual("Hi, my name is Carlos. I'm a Software Engineer.")
})