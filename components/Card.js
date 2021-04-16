const Card = ({ data }) => {
  return (
    <div>
      <span className='text-sm font-semibold text-gray-700'>{data.position}</span>
      <header className='mt-2 text-2xl font-semibold leading-tight sm:mt-0'>{data.title}</header>
      <span className='text-sm font-light text-gray-600'>{data.period}</span>
      <div className='mt-2 text-lg font-thin'>{data.text}</div>
      {data.bullets && (
        <ul
          className='mt-4 ml-8 text-lg font-thin list-disc'
          dangerouslySetInnerHTML={{ __html: data.bullets }}
        ></ul>
      )}
    </div>
  )
}

export default Card
