import React from "react";
import Searchbar from "../../components/public/searchbar";

const RoomHistory = () => {
    return ( 
        <>
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Histori Reservasi Ruangan</h1>
                </div>
                <div className="justify-between sm:justify-end flex-row sm:flex mb-6" >
                    <Searchbar />
                </div>

                <table className="shadow-2xl border-2 border-dark-blue-200 text-center w-full" >
                    <thead className="bg-dark-blue text-white" >
                        <tr >
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > No </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Kode Reservasi </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Lokasi </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Peminjam </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Tanggal </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="" className="">
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">1</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">XX-123456-XX-12345</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">Teknologi Informasi</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">Aditya</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">20/05/2023</td>
                            <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">
                                <p className="text-green-700">Acc</p>
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
 
export default RoomHistory;