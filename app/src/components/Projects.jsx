import React from 'react'

function Projects({formdata,setformdata}) {
  // proj1_title: "",
  // proj1_link: "",
  // proj1_desc: "",
  // proj2_title: "",
  // proj2_link: "",
  // proj2_desc: "",

  return (
    <div>
    <form className="flex flex-row items-center p-6 px-6 mx-10 mt-4 mb-10 border rounded-lg shadow-md justify-evenly">
    
      <div className="flex flex-col items-start space-y-2">
      
        <div className="items-center ">
          <label>Project Title</label>
          <input
            type="text"
            placeholder="School name"
            value={formdata.proj1_title}
            onChange={(e) =>
              setformdata({ ...formdata, proj1_title: e.target.value })
            }
            className="px-2 py-1 ml-1 border rounded-lg "
          />
        </div>
        <div>
          <label>Project Link</label>
          <input
            type="text"
            placeholder="School Qualification"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.proj1_link}
            onChange={(e) =>
              setformdata({ ...formdata, proj1_link: e.target.value })
            }
          />
        </div>
        <div>
          <label>Project Description</label>
          <input
            type="text"
            placeholder="School PassOut year"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.proj1_desc}
            onChange={(e) =>
              setformdata({ ...formdata, proj1_desc: e.target.value })
            }
          />
        </div>
      
      </div>

      <div className="flex flex-col items-start space-y-2">
      <div className="items-center ">
          <label>Project Title</label>
          <input
            type="text"
            placeholder="School name"
            value={formdata.proj2_title}
            onChange={(e) =>
              setformdata({ ...formdata, proj2_title: e.target.value })
            }
            className="px-2 py-1 ml-1 border rounded-lg "
          />
        </div>
        <div>
          <label>Project Link</label>
          <input
            type="text"
            placeholder="School Qualification"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.proj2_link}
            onChange={(e) =>
              setformdata({ ...formdata, proj2_link: e.target.value })
            }
          />
        </div>
        <div>
          <label>Project Description</label>
          <input
            type="text"
            placeholder="School PassOut year"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.proj2_desc}
            onChange={(e) =>
              setformdata({ ...formdata, proj2_desc: e.target.value })
            }
          />
        </div>
      </div>

    </form>
  </div>
  )
}

export default Projects
