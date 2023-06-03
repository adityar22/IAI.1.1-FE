import React, { useState } from "react";

const StudentProfile = () => {
    const [imgProfile, setImgProfile] = useState("")

    const [name, setName] = useState("Aditya Ramadhan")
    const [nim, setNim] = useState("20/460535/TK/51124")
    const [prodi, setProdi] = useState("Teknologi Informasi")
    const [fakultas, setFakultas] = useState("Teknik")
    const [email, setEmail] = useState("adityaramadhan01@mail.ugm.ac.id")

    const [user, setUSer] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <section className=' body-font w-screen my-8 text-black flex'>
                <div className='container px-5 mx-auto flex flex-col'>
                    {/* Judul Aplikasi */}
                    <div className='mb-5'>
                        <p className='title-font font-medium text-4xl mb-4'>
                            Profil Akun Mahasiswa
                        </p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <div className='bg-gray-200 rounded-lg py-8 px-8 pr-36 flex flex-col'>
                            <div className="mt-3">
                                <img
                                    src={imgProfile}
                                    alt={name}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            </div>
                            <div className="mt-3">
                                <p>Nama :</p>
                                <p>{name}</p>
                            </div>
                            <div className="mt-3">
                                <p>NIM :</p>
                                <p>{nim}</p>
                            </div>
                            <div className="mt-3">
                                <p>Prodi :</p>
                                <p>{prodi}</p>
                            </div>
                            <div className="mt-3">
                                <p>Fakultas :</p>
                                <p>{fakultas}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default StudentProfile;