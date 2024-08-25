import React from "react";

function Educatio({ formdata, setformdata }) {
  // edu1_school: "",
  //       edu1_year: "",
  //       edu1_qualification: "",
  //       edu1_desc: "",
  //       edu2_school: "",
  //       edu2_year: "",
  //       edu2_qualification: "",
  //       edu2_desc: "",
  return (
    <div>
      <form className="flex flex-row items-center p-6 px-6 mx-10 mt-4 mb-10 border rounded-lg shadow-md justify-evenly">
        <div className="flex flex-col items-start space-y-2">
          <div className="items-center">
            <label>School</label>
            <input
              type="text"
              placeholder="School name"
              value={formdata.edu1_school}
              onChange={(e) =>
                setformdata({ ...formdata, edu1_school: e.target.value })
              }
              className="px-2 py-1 ml-1 border rounded-lg "
            />
          </div>
          <div>
            <label>School Qualification</label>
            <input
              type="text"
              placeholder="School Qualification"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.edu1_qualification}
              onChange={(e) =>
                setformdata({ ...formdata, edu1_qualification: e.target.value })
              }
            />
          </div>
          <div>
            <label>Year of PassOut</label>
            <input
              type="text"
              placeholder="School PassOut year"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.edu1_year}
              onChange={(e) =>
                setformdata({ ...formdata, edu1_year: e.target.value })
              }
            />
          </div>
          <div>
            <label> School Education Description</label>
            <input
              type="text"
              placeholder="Linkedin url"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.edu1_desc}
              onChange={(e) =>
                setformdata({ ...formdata, edu1_desc: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col items-start space-y-2" >
        <div className="items-center">
            <label>School</label>
            <input
              type="text"
              placeholder="School name"
              value={formdata.edu2_school}
              onChange={(e) =>
                setformdata({ ...formdata, edu2_school: e.target.value })
              }
              className="px-2 py-1 ml-1 border rounded-lg "
            />
          </div>
          <div>
            <label>School Qualification</label>
            <input
              type="text"
              placeholder="School Qualification"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.edu2_qualification}
              onChange={(e) =>
                setformdata({ ...formdata, edu2_qualification: e.target.value })
              }
            />
          </div>
          <div>
            <label>Year of PassOut</label>
            <input
              type="text"
              placeholder="School PassOut year"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.edu2_year}
              onChange={(e) =>
                setformdata({ ...formdata, edu2_year: e.target.value })
              }
            />
          </div>
          <div>
            <label> School Education Description</label>
            <input
              type="text"
              placeholder="Linkedin url"
              className="px-2 py-1 ml-1 border rounded-lg "
              value={formdata.edu2_desc}
              onChange={(e) =>
                setformdata({ ...formdata, edu2_desc: e.target.value })
              }
            />
          </div>
        </div>

      </form>
    </div>
  );
}

export default Educatio;
