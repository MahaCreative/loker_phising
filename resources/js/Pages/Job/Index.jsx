import { Head, Link } from "@inertiajs/react";
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
import React from "react";

export default function Index() {
    return (
        <div className="flex flex-col  w-full">
            <Head title={"Lowongan Pekerjaan Indonesia"} />
            <div className="border border-blue-400 rounded-md w-full h-full">
                <div className="flex justify-between items-center py-2 px-4 drop-shadow-sm border border-b">
                    <img src="Job/garuda-1.webp" alt="" className="w-14" />
                    <p className="text-5xl font-bold text-blue-700">
                        <Menu color="inherit" fontSize="inherit" />
                    </p>
                </div>
                <div className="px-8 flex flex-col  py-4 bg-white">
                    <img src="/Job/bumn.webp" alt="" className="w-[80%]" />
                    <button className="bg-blue-900 hover:bg-blue-800 py-2 px-3 rounded-md drop-shadow-sm text-white my-3">
                        CARI LEBIH BANYAK LOWONGAN
                    </button>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex flex-col justify-center text-center  drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50 hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <List color="inherit" fontSize="inherit" />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-2">
                                Semua
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50 hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <AssignmentInd
                                    color="inherit"
                                    fontSize="inher2t"
                                />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-3">
                                Staff Kantor
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50 hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <AccountBalance
                                    color="inherit"
                                    fontSize="inher2t"
                                />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-3">
                                Perbankan
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50 hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <AdminPanelSettings
                                    color="inherit"
                                    fontSize="inher2t"
                                />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-3">
                                Admin
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50 hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <BarChart color="inherit" fontSize="inherit" />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-2">
                                Pemasaran
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50 hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <Hotel color="inherit" fontSize="inherit" />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-2">
                                Hotel
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50  hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <Money color="inherit" fontSize="inherit" />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-2">
                                Keuangan
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50 hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <Work color="inherit" fontSize="inherit" />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-2">
                                Pekerjaan
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center drop-shadow-md py-3 px-6 rounded-md border border-gray-400/50 hover:bg-gray-50">
                            <p className="text-blue-600 text-5xl">
                                <Menu color="inherit" fontSize="inherit" />
                            </p>
                            <p className="text-md tracking-tight text-center leading-5 my-2">
                                Lainnya
                            </p>
                        </div>
                    </div>
                    <img
                        src="/Job/kemnaker.webp"
                        alt=""
                        className="w-[80%] my-3"
                    />
                </div>
                <div className="px-8 flex flex-col  py-4 bg-blue-50">
                    <p className="font-bold text-3xl text-center ">
                        LOWONGAN KERJA INDONESIA
                    </p>
                    <p className="text-center text-gray-400 tracking-tighter left-4 my-2">
                        Berikut adalah beberapa lowongan pekerjaan yang bisa
                        Anda pilih
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/pendaftaran cpns pppk.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] font-bold tracking-tighter text-gray-800 leading-4">
                                    Pendaftaran CPNS & PPPK 2025
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 4,000,000 - Rp. 8,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 1 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/pt jawara satu poer.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] font-bold tracking-tighter text-gray-800 leading-4">
                                    PT Jawa Satu Power
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 5,000,000 - Rp. 13,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 2 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/badan amil zakat nasional.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] font-bold tracking-tighter text-gray-800 leading-4">
                                    Badan Amil Zakat Nasional
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 2,500,000 - Rp. 5,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 3 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/badan penyelenggara jaminan sosial.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] font-bold tracking-tighter text-gray-800 leading-4">
                                    Badan Penyelenggara Jaminan Sosial
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 3,000,000 - Rp. 7,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 4 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/perusaan umum bulog.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] font-bold tracking-tighter text-gray-800 leading-4">
                                    Perusahaan Umum Bulog
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 4,000,000 - Rp. 1,200,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 5 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/pt bank mandiri.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    PT. bank mandiri
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 4,000,000 - Rp. 12,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 6 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/pt bank rakyat indonesia.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    PT Bank Rakyat Indonesia
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 3,000,000 - Rp. 14,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 7 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/indofood.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    Indofood
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 3,000,000 - Rp. 5,500,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 8 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/holiwing group.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    Holiwing Group
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 3,000,000 - Rp. 10,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 9 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/pt indomarco primatama.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    PT Indomarco Prismatama
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 3,000,000 - Rp. 20,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 10 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/cleaning service.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    Cleaning Service
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 1,500,000 - Rp. 3,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 11 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/mr diy.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    MR D.I.Y.
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 6,000,000 - Rp. 20,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 12 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/pt freeport indonesia.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    PT Freeport Indonesia
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 5,000,000 - Rp. 20,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 13 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/idonesia weda bay.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    Indonesia Weda Bay Industrial Park
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 7,000,000 - Rp. 15,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 14 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/indonesia morowali.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    Indonesia Morowali Industrial Park
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 3,000,000 - Rp. 20,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 15 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/pamapersada nusantara.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    Pamapersada Nusantara
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 10,000,000 - Rp. 30,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 16 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/rotio.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    Roti’O
                                </p>
                                <div className="my-3">
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Paid
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Rp. 3,500,000 - Rp. 7,000,000 per
                                            month
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <AccessTime
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Full Time / Part Time
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Business
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Berpengalaman / Tidak Berpengalaman
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <Home
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Work From Office
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center my-1">
                                        <p className="text-gray-500">
                                            <ModelTraining
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </p>
                                        <p className="text-xs text-gray-500 tracking-tighter ">
                                            Tersedia training
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 17 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                        <div className="w-full bg-white rounded-lg drop-shadow-md">
                            <div className="w-full">
                                <img
                                    src="Job/lamaran kerja pilihan.webp"
                                    alt=""
                                    className="w-full h-[250px] object-cover object-top"
                                />
                            </div>
                            <div className="px-4 pt-3 ">
                                <p className="h-[30px] capitalize font-bold tracking-tighter text-gray-800 leading-4">
                                    LAMARAN KERJA PILIHAN
                                </p>
                                <div className="my-3">
                                    <p>
                                        Jika anda tidak lolos di lowongan kerja
                                        lainnya, maka silahkan masukkan data
                                        anda disini untuk kami carikan pekerjaan
                                        yang sesuai
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center my-3">
                                <Link
                                    href={route("registrasi", { id: 18 })}
                                    className="text-sm text-white bg-blue-600 rounded-full py-2 px-3 font-bold"
                                >
                                    LAMAR SEKARANG
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="Job/footer.webp" />
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
