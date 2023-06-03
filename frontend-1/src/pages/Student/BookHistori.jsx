import React from "react";
import Searchbar from "../../components/public/searchbar";

const BookHistori = () => {
    return (
        <>
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Histori Peminjaman Buku</h1>
                </div>
                <div className="justify-between sm:justify-end flex-row sm:flex mb-6" >
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
                                <p className="cursor-pointer text-orange hover:text-yellow-300">Open</p>
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

export default BookHistori;