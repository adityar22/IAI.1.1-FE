const InputGenre = ({ genres, setGenres }) => {

    function handleKeyDown(e) {
        e.stopPropagation();

        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setGenres([...genres, value])
        e.target.value = ''

        e.preventDefault();
    }

    function removeTag(index) {
        setGenres(genres.filter((el, i) => i !== index))
    }

    return (
        <div className="">
            {genres.map((genre, index) => (
                <div className="inline-block badges text-sm bg-blue-600 mr-4 px-2" key={index}>
                    <span
                        className="text-white">
                        {genre}
                    </span>
                    <span className="font-extrabold ml-3 cursor-pointer text-orange" onClick={() => removeTag(index)}>x</span>
                </div>
            ))}
            <input onKeyDown={handleKeyDown} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type and press enter to add genre" />
        </div>
    )
}


export default InputGenre