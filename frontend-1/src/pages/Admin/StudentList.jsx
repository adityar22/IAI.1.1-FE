import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useStudentContext } from "../../hooks/useStudentContext";

import Searchbar from "../../components/public/searchbar";
import Pagination from "react-js-pagination";
import ModalAdd from "../../components/studentList/modalAdd";
import ModalDetail from "../../components/studentList/modalDetail";

const StudentList = () => {
    const [add, setAdd] = useState(false)
    const setAddModal =(state)=>{
        setAdd(state)
    }

    const [detail, setDetail] = useState(false)
    const setDetailModal =(state)=>{
        setDetail(state)
    }

    return (
        <>
            {add && <ModalAdd setAdd={setAdd}/>}
            {detail && <ModalDetail setDetail={setDetail}/>}
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Data Mahasiswa</h1>
                </div>
                <div className="justify-between sm:justify-between flex-row sm:flex" >
                    <button
                        type="button"
                        className="button p-3 mt-2 mb-10 sm:mb-12 mr-7 relative bg-orange text-white font-bold"
                        onClick={(e)=>setAddModal(true)}
                    > Tambah Mahasiswa + </button>
                    <Searchbar />
                </div>

                <table className="shadow-2xl border-2 border-dark-blue-200 text-center w-full" >
                    <thead className="bg-dark-blue text-white" >
                        <tr >
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Nama </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > NIM </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Prodi </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Fakultas </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Act </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="" className="">
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">Nama</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">XX/123456/XX/12345</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">Teknologi Informasi</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">Teknik</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">
                                <p className="cursor-pointer text-orange hover:text-yellow-300" onClick={(e)=>setDetailModal(true)} >Open</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex-row">
                    
                </div>

            </div>
        </>
    );
}

export default StudentList;