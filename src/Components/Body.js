import React from 'react'
import "./../App.css";
import BodyContainer1 from './BodyContainer1';
import Footer from './Footer';

const Body = () => {


    const data = [
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
        {
            title: "Merge PDF",
            disc: "Combine PDFs in the order you want with the easiest PDF merge available",
            icon: "https://cdn-icons-png.flaticon.com/128/888/888883.png"
        },
    ]
    return (
        <>
            <div className=' sm:m-0 m-1 sm:w-full bg-[#f3f0ec]'>
                <div className=' text-[#ffffff] pdfContainer h-[280px]'>
                    <div className='sm:flex flex-col items-center justify-center]'>
                        <h1 className='text-[25px] font-semibold sm:text-[38px] sm:w-[900px] sm:mt-[20px] text-center'>Every tool you need to work with PDFs in one place</h1>
                        <h4 className='sm:text-[18px] text-[14px] mt-[10px] sm:w-[800px] mb-[150px] text-center'>Every tool you need to use PDFs, at your fingertips. All
                            are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h4>
                    </div>
                </div>
                <div className='w-[85%] sm:w-full sm:pb-[40px] mt-[-70px] m-auto '>
                    <div className='p-2 flex flex-wrap sm:w-[1400px] m-auto justify-between bg-white drop-shadow-xl '>
                        {
                            data.map((val, i) => {
                                return (
                                    <div className='p-2 w-[140px] sm:w-[200px]  flex flex-col  sm:m-[10px] sm:px-[25px] py-[20px] hover:bg-[lightgray] cursor-pointer' key={i} >
                                        <img src={val.icon} className='w-[80px] sm:w-[100px] object-contain sm:mb-[20px]' />
                                        <h1 className='text-[#383e45] text-[18px] font-bold'>{val.title}</h1>
                                        <p className='text-[#626870] text-[14px] mt-[10px]'>{val.disc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <BodyContainer1 />
            {/* <Footer /> */}
        </>
    )
}

export default Body