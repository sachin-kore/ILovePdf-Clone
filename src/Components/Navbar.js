import React from 'react'
import DesktopWindowsSharpIcon from '@mui/icons-material/DesktopWindowsSharp';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "./../assets/ilovepdf.svg"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BuildIcon from '@mui/icons-material/Build';

const Navbar = () => {

    return (
        <div className=' w-[99%] sm:p-0 px-1 bg-white sm:w-full sticky top-0  z-[999]  bottom-2 sm:px-[10px] drop-shadow-md h-[50px] sm:h-[100%]'>
            <div className='flex sm:flex  items-center justify-between h-[100%]'>
                <div className='sm:hidden text-[#ffffff] bg-black h-[30px] p-1 rounded-full flex bg-center'>
                    <BuildIcon />
                </div>
                <div className=''>
                    <img src={Logo} alt='' className='sm:h-[30px] h-[30px]' />
                </div>
                <div className=' hidden sm:flex  items-center sm:gap-[40px]'>

                    <span>MERGE</span>
                    <span>SPLIT PDF</span>
                    <span>COMPRESS PDF</span>
                    <span>CONVERT PDF</span>
                    <span>ALL PDF TOOLS</span>
                </div>
                <div className='flex items-center sm:gap-7'>
                    <div className='hidden sm:visible'>
                        <DesktopWindowsSharpIcon />
                    </div>
                    <div className='hidden sm:flex items-center'>
                        <button className='bg-[#d7cbcb] hover:text-[#ffffff] hover:bg-[#4c3737] p-4 w-[80px] text-[black]'>Log In</button>
                        <button className='bg-[red] w-[90px] hover:bg-[#000] p-4 text-[white]'>Sign Up</button>
                    </div>
                    <div className='sm:hidden bg-red-500 h-[42px] text-[#ffffff] px-1 flex items-center mr-[20px]' >
                        <AccountCircleIcon />
                    </div>
                    <MenuIcon />


                </div>
            </div>
        </div>
    )
}

export default Navbar