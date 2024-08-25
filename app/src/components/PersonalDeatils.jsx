import React from "react";

function PersonalDeatils({ formdata, setformdata }) {
  // name: "",
  //       email: "",
  //       phone: "",
  //       linkedin: "",
  //       github: "",
  //       skills: "",
  return (
    <div>
    <form className="flex flex-row flex-wrap items-center p-6 px-6 mx-10 mt-4 mb-10 space-y-4 text-center border rounded-lg shadow-md justify-evenly">
        <div className="items-center">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={formdata.email}
            onChange={(e)=>setformdata({...formdata,email:e.target.value})}
            className="px-2 py-1 ml-1 border rounded-lg "
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.name}
            onChange={(e)=>setformdata({...formdata,name:e.target.value})}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            placeholder="phone"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.phone}
            onChange={(e)=>setformdata({...formdata,phone:e.target.value})}
          />
        </div>
        <div>
          <label>Linkedin</label>
          <input
            type="text"
            placeholder="Linkedin url"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.linkedin}
            onChange={(e)=>setformdata({...formdata,linkedin:e.target.value})}
          />
        </div>
        <div>
          <label>Github</label>
          <input
            type="text"
            placeholder="Github url"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.github}
            onChange={(e)=>setformdata({...formdata,github:e.target.value})}
          />
        </div>
        <div>
          <label>Skills</label>
          <input
            type="text"
            placeholder="Skills"
            className="px-2 py-1 ml-1 border rounded-lg "
            value={formdata.skills}
            onChange={(e)=>setformdata({...formdata,skills:e.target.value})}
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalDeatils;
