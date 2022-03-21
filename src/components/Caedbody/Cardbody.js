import React from 'react'

function Cardbody() {
  return (
    <div className="card flex flex-col border-l-2 border-r-2 border-t border-gray-300 drop-shadow-md w-96 h-96">
      <p className='mt-1 text-xs font-normal py-2 px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed expedita hic 
      placeat molestiae nesciunt voluptatem voluptas a repellat animi dolor porro eius vitae accusantium, in voluptates 
      adipisci libero quo explicabo, illum, temporibus iusto. Deserunt, adipisci suscipit incidunt aspernatur ratione 
      quaerat officiis ducimus perspiciatis quae et possimus laborum, libero esse repellendus iusto consequuntur qui? 
      Animi, quos?! <span className='mt-1 text-xs font-bold text-red-600'>Read more...</span></p>
      <img src="photos/2022.jpg" alt="2022" className="bg-cover" />
    </div>
  )
}

export default Cardbody
