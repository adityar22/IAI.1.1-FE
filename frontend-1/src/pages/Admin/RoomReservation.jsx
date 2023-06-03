import React from "react";
import Searchbar from "../../components/public/searchbar";

const RoomReservation = () => {
    const reservations = [
        { title: 'Book 1', author: 'Author 1', publisher:'Publisher 1', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:5, genres:['gen1','gen2', 'gen3'], cover: 'book1.jpg' },
        { title: 'Book 2', author: 'Author 2', publisher:'Publisher 2', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:8, genres:['gen1','gen2', 'gen3'], cover: 'book2.jpg' },
        { title: 'Book 3', author: 'Author 3', publisher:'Publisher 3', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:11, genres:['gen1','gen2', 'gen3'], cover: 'book3.jpg' },
    ];
    
    return (
        <>
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Data Reservasi Ruangan</h1>
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
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Act </th>
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

export default RoomReservation;