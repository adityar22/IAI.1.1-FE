const RentList = ({rent, index}) => {
    return (
        <>
            <tr key={index} className="">
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.kode}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.judul}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.peminjam}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.deadline}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.status}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">
                    <p className="cursor-pointer text-orange hover:text-yellow-300">Open</p>
                </td>
            </tr>
        </>
    );
}

export default RentList;