import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Sidebar from '../components/Sidebar'
import { BiCoffeeTogo, BiDonateHeart} from 'react-icons/bi';
import { GrContact } from 'react-icons/gr'

const Donate = () => {

    // window.location.reload();
    
    return (
        <div>
            <Sidebar />
            <br></br>
            <div style={{textAlign : 'center', marginTop : '10%'}}>
                <h1 className='font-face-gm'>دوست عزیزم + </h1>
                <h1 className='font-face-gm'>ممنون از دلگرمی بزرگ و انگیزه ای ک بهم میدی واسه ادامه + </h1>
                <h1 className='font-face-gm'> از طریق لینک های زیر میتونی مستقیم حمایت مالی کنی یا منو یه کافه مهمون کنی + </h1>
                <a href="https://coffeete.ir/lkbrntgh">
                    <BiCoffeeTogo style={{fontSize : '70px', color : '#00704A'}} />
                </a>
                <a href='#'>
                    <BiDonateHeart style={{fontSize : '70px', color : '##ff66ff '}} />
                </a>
                <br></br><br></br><br></br>
                <h1 className='font-face-gm'>البته ک همه چی حمایت مالی نیست و میتونی با پیام قشنگت بهم انگیزه بده + </h1>
                <Link to='/about'><GrContact style={{fontSize : '70px', color : '#0088'}}/></Link>
            </div>
        </div>
    )
}

export default Donate