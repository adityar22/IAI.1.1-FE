import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import { useStudentContext } from "../../hooks/student/useStudentContext";
import {useDisplayContext} from "../../hooks/useDisplayContext";

import Searchbar from "../../components/public/searchbar";
import Pagination from "react-js-pagination";
import ModalAdd from "../../components/studentList/modalAdd";
import StudentRow from "../../components/studentList/StudentRow";

const StudentList = () => {
    // const students = [
    //     { nama: 'Adit 1', nim: '20/460535/TK/51124', prodi:'Teknologi Informasi', fakultas:'Teknik' },
    //     { nama: 'Adit 2', nim: '20/460535/TK/51124', prodi:'Teknologi Informasi', fakultas:'Teknik' },
    //     { nama: 'Adit 3', nim: '20/460535/TK/51124', prodi:'Teknologi Informasi', fakultas:'Teknik' },
    // ];

    const {students, dispatch} = useStudentContext();
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = 'http://localhost:5000/students';
    useFetch({ url, dispatch, setError, setLoading, type: 'GET_STUDENT' });
    console.log(students)

    const [add, setAdd] = useState(false)
    const setAddModal =(state)=>{
        setAdd(state)
    }

    return (
        <>
            {add && <ModalAdd setAdd={setAdd} url={url} setLoading={setLoading} setError={setError} />}
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
                        {students && students.students.map((student, index)=>(
                            <StudentRow student={student} index={index} />
                        ))}
                    </tbody>
                </table>
                <div className="flex-row">
                    
                </div>

            </div>
        </>
    );
}

export default StudentList;