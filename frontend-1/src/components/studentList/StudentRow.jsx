import React, { useState } from "react"
import ModalDetail from "./modalDetail"

const StudentRow = ({ student, index }) => {
    const [detail, setDetail] = useState(false)
    const setDetailModal = (state) => {
        setDetail(state)
    }

    return (
        <>
            {detail && <ModalDetail setDetail={setDetail} student={student} />}
            <tr key={index} className="">
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{student.nama}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{student.nim}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{student.prodi}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{student.fakultas}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">
                    <p className="cursor-pointer text-orange hover:text-yellow-300" onClick={(e) => setDetailModal(true)} >Open</p>
                </td>
            </tr>
        </>
    );
}

export default StudentRow;