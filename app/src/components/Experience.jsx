import React from 'react'

function Experience({formdata,setformdata}) {
  // exp1_org: "",
  // exp1_pos: "",
  // exp1_desc: "",
  // exp1_dur: "",
  // exp2_org: "",
  // exp2_pos: "",
  // exp2_desc: "",
  // exp2_dur: "",
  return (
    <div>
      <form className="flex flex-row items-center p-6 px-6 mx-10 mt-4 mb-10 border rounded-lg shadow-md justify-evenly">
      
        <div className="flex flex-col items-start space-y-2">
        
          <div className="items-center ">
            <label>Experience in 1st Organization</label>
            <input
              type="text"
              placeholder="School name"
              value={formdata.exp1_org}
              onChange={(e) =>
                setformdata({ ...formdata, exp1_org: e.target.value })
              }
              className="px-2 py-1 ml-1 border rounded-lg "
            />
          </div>
          <div>
            <label>Position in the activity</label>
            <input
              type="text"
              placeholder="School Qualification"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.exp1_pos}
              onChange={(e) =>
                setformdata({ ...formdata, exp1_pos: e.target.value })
              }
            />
          </div>
          <div>
            <label>Experience Description</label>
            <input
              type="text"
              placeholder="School PassOut year"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.exp1_desc}
              onChange={(e) =>
                setformdata({ ...formdata, exp1_desc: e.target.value })
              }
            />
          </div>
          <div>
            <label>Experience Duration</label>
            <input
              type="text"
              placeholder="Linkedin url"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.exp1_dur}
              onChange={(e) =>
                setformdata({ ...formdata, exp1_dur: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-2">
        <div className="items-center">
            <label>Experience in 2nd Organization</label>
            <input
              type="text"
              placeholder="School name"
              value={formdata.exp2_org}
              onChange={(e) =>
                setformdata({ ...formdata, exp2_org: e.target.value })
              }
              className="px-2 py-1 ml-1 border rounded-lg "
            />
          </div>
          <div>
            <label>Position in the activity</label>
            <input
              type="text"
              placeholder="School Qualification"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.exp2_pos}
              onChange={(e) =>
                setformdata({ ...formdata, exp2_pos: e.target.value })
              }
            />
          </div>
          <div>
            <label>Experience Description</label>
            <input
              type="text"
              placeholder="School PassOut year"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.exp2_desc}
              onChange={(e) =>
                setformdata({ ...formdata, exp2_desc: e.target.value })
              }
            />
          </div>
          <div>
            <label>Experience Duration</label>
            <input
              type="text"
              placeholder="Linkedin url"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.exp2_dur}
              onChange={(e) =>
                setformdata({ ...formdata, exp2_dur: e.target.value })
              }
            />
          </div>
        </div>

      </form>
    </div>
  )
}

export default Experience
