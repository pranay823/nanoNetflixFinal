import React from 'react'

const ReviewCard = ({content , name}) => {
  return (
    <div>
      <div className='mx-4 border border-netred border-opacity-50  w-[400px] h-[300px]   text-offwhite p-4 text-center overflow-x-scroll'>
        <div className='w-20 bg-netred p-2  mx-auto rounded-full '>
          <img className='rounded-full '
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeovOjMzW8qkQEmDR868np3YP1bURzQsCmA&usqp=CAU" alt="no image"></img>
        </div>
        <h1 className='my-3 font-semibold text-2xl tracking-wider'>{name}</h1>
        <p className=' font-light tracking-wide  '>{content}</p>
    
       
      </div>
    </div>
  )
}

export default ReviewCard