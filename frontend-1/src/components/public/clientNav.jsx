import '../../App.css';
import { useState } from "react"
import { Link } from "react-router-dom"

export default function ClientNav() {
    return (
        <>
            <div className="top-0 sticky flex flex-row justify-between w-full h-12 bg-dark-blue z-50 py-2 px-32">
                <div>
                    <p className="text-h-lg font-bold text-white">App Name</p>
                </div>
                <div>
                    <ul className="flex flex-row gap-6 text-white font-semibold">
                        <li className="dropdown1 cursor-pointer flex flex-row items-center">
                            <p>Peminjaman Ruang</p>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            <ul class="dropdown-menu1 absolute top-6 hidden text-white-700 pt-1 text-sm">
                                <li class=""><Link class="bg-blue-400 hover:text-orange py-2 px-4 block whitespace-no-wrap" to="/room">Reservasi Ruang</Link></li>
                                <li class=""><Link class="bg-blue-400 hover:text-orange py-2 px-4 block whitespace-no-wrap" to="/">Histori Reservasi</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown2 cursor-pointer flex flex-row items-center">
                            <p>Pinjam Buku</p>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            <ul class="dropdown-menu2 absolute top-6 hidden text-white-700 pt-1 text-sm">
                                <li class=""><Link class="bg-blue-400 hover:text-orange py-2 px-4 block whitespace-no-wrap" to="/book">Pinjam Buku</Link></li>
                                <li class=""><Link class="bg-blue-400 hover:text-orange py-2 px-4 block whitespace-no-wrap" to="/">Histori Peminjaman</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
