import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../App.css'
import Sidebar from '../components/Sidebar'
import { BiCoffeeTogo, BiDonateHeart} from 'react-icons/bi';
import { GrContact } from 'react-icons/gr'

const Donate = () => {

    const navigate = useHistory();

    const aboutRedirect = () => {
        navigate.push('/about');
        window.location.reload()
    }
    
    return (
        <div>
            <Sidebar />
            <br></br>
            <div style={{textAlign : 'center', marginTop : '10%'}}>
                <h1 className='font-face-gm'>دوست عزیزم + </h1>
                <h1 className='font-face-gm'>ممنون از دلگرمی بزرگ و انگیزه ای ک بهم میدی واسه ادامه + </h1>
                <h1 className='font-face-gm'> از طریق لینک های زیر میتونی منو یه کافه مهمون کنی + </h1>
                {/* <a href="https://coffeete.ir/lkbrntgh">
                    <BiCoffeeTogo style={{fontSize : '70px', color : '#00704A'}} />
                </a> */}
                <br />
                <a href="http://www.coffeete.ir/lkbrntgh">
                    <img src="http://www.coffeete.ir/images/buttons/lemonchiffon.png" style={{width: '260px'}} />
                </a>
                {/* <a href='#'>
                    <BiDonateHeart style={{fontSize : '70px', color : '##ff66ff '}} />
                </a> */}
                <br></br><br></br><br />
                <h1 className='font-face-gm'>البته ک همه چی کافه نیست و میتونی با پیام قشنگت بهم انگیزه بده + </h1>
                <div onClick={aboutRedirect}><GrContact style={{fontSize : '70px', color : '#0088'}}/></div>
            </div>
        </div>
    )
}

export default Donate