import { useState } from "react"

const AddRoom = ({setAdd}) => {
    const [name, setName] = useState("")
    const [lokasi, setLokasi] = useState("")
    const [tipe, setTipe] = useState("")

    const handleClose =(state)=>{
        setAdd(state)
    }

    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <form className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-end">
                        <button className="" onClick={(e)=>handleClose(false)} >x</button>
                    </div>
                    <h3 className="text-center text-2xl font -bold mb-12">Tambah Ruangan</h3>
                    <div className="mb-4">
                        {name != "" && <label className="">Nama Ruangan : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Nama Ruangan"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="mb-4">
                        {tipe != "" && <label className="">Tipe Ruangan : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="tipe"
                            type="text"
                            placeholder="Tipe ruangan"
                            onChange={(e) => setTipe(e.target.value)}
                            value={tipe}
                        />
                    </div>
                    <div className="mb-4">
                        {lokasi != "" && <label className="">Lokasi Ruangan : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lokasi"
                            type="text"
                            placeholder="Lokasi ruangan"
                            onChange={(e) => setLokasi(e.target.value)}
                            value={lokasi}
                        />
                    </div>
                    
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-orange mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddRoom;