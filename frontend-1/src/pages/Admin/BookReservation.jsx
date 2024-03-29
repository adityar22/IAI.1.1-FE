import React from "react";
import Searchbar from "../../components/public/searchbar";
import RentList from "../../components/book/RentList";

const BookReservation = () => {
    const rents = [
        { kode: 'xx-123-abc-123', judul: 'Buku A', peminjam:'si A', tanggal:'13/05/2023', deadline:'20/05/2023', status:'dipinjam' },
        { kode: 'xx-124-abc-124', judul: 'Buku B', peminjam:'si B', tanggal:'14/05/2023', deadline:'21/05/2023', status:'terlambat' },
        { kode: 'xx-125-abc-125', judul: 'Buku C', peminjam:'si C', tanggal:'14/05/2023', deadline:'21/05/2023', status:'dikembalikan' },
    ];

    return (
        <>
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Data Peminjaman Buku</h1>
                </div>
                <div className="justify-between sm:justify-end flex-row sm:flex mb-6" >
                    <Searchbar />
                </div>

                <table className="shadow-2xl border-2 border-dark-blue-200 text-center w-full" >
                    <thead className="bg-dark-blue text-white" >
                        <tr >
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Kode Peminjaman </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Judul Buku </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Peminjam </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Pengembalian </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Status </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Act </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rents && rents.map((rent, index)=>(
                            <RentList rent={rent} index={index} />
                        ))}
                    </tbody>
                </table>
                <div className="flex-row">

                </div>

            </div>
        </>
    );
}

export default BookReservation;