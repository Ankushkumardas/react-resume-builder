import React from 'react'

function Extra({formdata,setformdata}) {
  // extra_1: "",
  //       extra_2: "",
  return (
    <div>
    <form className="flex flex-row flex-wrap items-center p-6 px-6 mx-10 mt-4 mb-10 space-y-4 text-center border rounded-lg shadow-md justify-evenly">
        <div className="items-center">
          <label>Extra 1</label>
          <input
            type="text"
            placeholder="email"
            value={formdata.extra_1}
            onChange={(e)=>setformdata({...formdata,extra_1:e.target.value})}
            className="px-2 py-1 ml-1 border rounded-lg "
          />
        </div>
        <div>
          <label>Extra 2</label>
          <input
            type="text"
            placeholder="Name"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.extra_2}
            onChange={(e)=>setformdata({...formdata,extra_2:e.target.value})}
          />
        </div>
       
      </form>
    </div>
  )
}

export default Extra
