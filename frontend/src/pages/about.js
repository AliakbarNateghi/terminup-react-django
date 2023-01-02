import React, { Component }  from 'react';
import { useState, useEffect} from "react";
import PropTypes from 'prop-types'
import { useHistory, Link, Route, Routes, Router, BrowserRouter } from "react-router-dom";
import { AiFillCaretLeft } from "react-icons/all";
import '../App.css'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsTelegram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import Sidebar from '../components/Sidebar';

const About = () => {

    const navigate = useHistory();

    const donateRedirect = () => {
        navigate.push('/donate');
        window.location.reload()
    }

    return (    
        <div>   
            <div><Sidebar /></div>
            <br></br>
            <div style={{ 
                        // height: '80%',
                        // width: '80%',
                        textAlign: 'center',
                        // marginLeft: '10%',
                        marginTop: '10%' 
                        }}>
                <span style={{fontSize: '25px'}}>&#128075;</span>
                <h1 className='font-face-gm'>دوست قشنگم سلام + </h1>
                <h1 className='font-face-gm'>دقت کن این سایت اصلی انتخاب واحد نیست و فقط برای راحتی تو نوشته شده + </h1>
                <h1 className='font-face-gm'>اگر ایده ای برای بهتر شدن سایت داری یا به مشکلی خوردی حتما بهم اطلاع بده + </h1>
                <h1 className='font-face-gm'>اگر رشته یا دانشگاهت تو سیستم نیست حتما بهم اطلاع بده تا سایت رو آپدیت کنم + </h1>
                <h1 className='font-face-gm'>راستی از لینک زیر میتونی یه کافه مهمونم کنی یه دلگرمی بزرگ + </h1>
                <span style={{fontSize: '25px'}}></span>
                <button onClick={donateRedirect} className='btn' style={{backgroundColor: '#DA291C', color: 'white'}}>DONATE</button>
                <br></br><br></br><br></br>
                <h1 className='font-face-gm'>راه های ارتباط با من + </h1>
                <a href='https://github.com/AliakbarNateghi/'>
                    <AiFillGithub style={{fontSize : '70px', color: '#171515'}} />
                </a>
                <a href='https://api.whatsapp.com/send?phone=989309096215'>
                    <IoLogoWhatsapp style={{fontSize : '70px', color: '#128C7E'}} />
                </a>
                <a href='mailto:lkbrntgh@gmail.com?subject = Feedback&body = Message'>
                    <SiGmail style={{fontSize : '70px', color: '#c71610'}} />
                </a>
                <a href='https://t.me/Aliakbar_Nateghi'>
                    <i className='fa fa-telegram' style={{fontSize : '70px', color: '#0088cc'}} ></i>
                </a>
            </div>  
        </div>
    )
}

export default About