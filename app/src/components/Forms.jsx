import React, { useState } from "react";
import Educatio from "./Educatio";
import Experience from "./Experience";
import Projects from "./Projects";
import PersonalDetails from "./PersonalDeatils";
import Extra from "./Extra";
import axios from 'axios'
import { saveAs } from 'file-saver'
function Forms() {
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: "",

        exp1_org: "",
        exp1_pos: "",
        exp1_desc: "",
        exp1_dur: "",
        exp2_org: "",
        exp2_pos: "",
        exp2_desc: "",
        exp2_dur: "",

        proj1_title: "",
        proj1_link: "",
        proj1_desc: "",
        proj2_title: "",
        proj2_link: "",
        proj2_desc: "",

        edu1_school: "",
        edu1_year: "",
        edu1_qualification: "",
        edu1_desc: "",
        edu2_school: "",
        edu2_year: "",
        edu2_qualification: "",
        edu2_desc: "",

        extra_1: "",
        extra_2: "",
    });
    const [page, setpage] = useState(0);

    const formtitle = [
        "Personal Details",
        "Education",
        "Experience",
        "Projects",
        "Extra",
    ];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalDetails formdata={formdata} setformdata={setformdata} />;
        } else if (page === 1) {
            return <Educatio formdata={formdata} setformdata={setformdata} />;
        } else if (page === 2) {
            return <Experience formdata={formdata} setformdata={setformdata} />;
        } else if (page === 3) {
            return <Projects formdata={formdata} setformdata={setformdata} />;
        } else {
            return <Extra formdata={formdata} setformdata={setformdata} />;
        }
    };

    return (
        <div className="w-2/3 p-2 mx-auto mt-5 text-center border rounded-md shadow-md">
            <h1 className="text-lg font-semibold">Form</h1>
            <div>
                <h1 className="font-semibold text-slate-500 text-md">
                    {formtitle[page]}
                </h1>
            </div>
            <div >
                <div style={{
                    width:
                        page === 0 ? '20%' :
                            page === 1 ? '40%' :
                                page === 2 ? '60%' :
                                    page === 3 ? '80%' :
                                        "100%"
                }} className="flex items-center justify-center w-[80%]  h-3 bg-blue-500 rounded-xl progressbar"></div>
            </div>
            <div>{PageDisplay()}</div>
            <div className="flex items-center justify-center gap-2 mt-3 mb-2">
                <button className="px-2 py-1 text-sm text-white bg-black rounded-lg" onClick={() => {
                    setpage((page) => page - 1)
                }}
                    disabled={page == 0}>Prev</button>
                <button className="px-2 py-1 text-sm text-white bg-black rounded-lg" onClick={() => {
                    // setpage((page) => page + 1)
                    if (page === formtitle.length - 1) {
                        axios.post('http://localhost:4000/create-pdf', formdata).then(() => axios.get('http://localhost:4000/fetch-pdf', { responseType: 'blob' })).then((res) => {
                          const pdfblob=  new Blob([res.data], {
                                type: 'application/pdf'
                            })
                            saveAs(pdfblob,'Resume.pdf')
                        })
                    }
                    else{
                        setpage((page) => page + 1)
                    }
                }}
                    >{page==formtitle.length-1?"Download Pdf": "Next"}</button>
            </div>
        </div>
    );

}
export default Forms;
