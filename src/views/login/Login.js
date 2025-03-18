import React, { useState } from 'react'
import styles from "../login/Login.module.css"
import logo  from "../../assets/Black.png"
import { useNavigate } from 'react-router-dom'
export default function Login() {

    const [loginData , setLoginData] = useState({userName:'',password:''})
    const [error , setError] = useState('')

    const navigate = useNavigate()
    const handleData = (e)=>{
        if(error) setError('')
        const {name,value}=e.target
        setLoginData((prev)=>({...prev , [name] : value}))
    }

    const handelSubmit = (e)=>{
        e.preventDefault()
        if(loginData.userName.toLowerCase() === 'mazen' && loginData.password.toLowerCase() ==='1234'){
            localStorage.setItem('MINASSAT_TALEB_LOGIN',true)
            navigate('/')
            return
        }
        if(loginData.userName === 'mazen' && loginData.password !== '1234') {
            setError('الرجاء التاكد من البريد')
            return
        }
        setError('الرجاء التاكد من البريد او كلمة السر ')
    }

    
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.logo}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={styles.title}>
                    <span>مرحبًا بعودتك</span>
                </div>
                <p className={styles.title_para}>يرجى إدخال بياناتك لتسجيل الدخول.</p>

                <form onSubmit={handelSubmit} >
                    <div className={styles.row}>
                        {/* <i className="fas fa-user"></i> */}
                        <input type="text" name='userName' onChange={handleData} placeholder="أدخل بريدك الإلكتروني..." required />
                    </div>
                    <div className={styles.row}>
                        {/* <i className="fas fa-lock"></i> */}
                        <input type="password" name='password' onChange={handleData} placeholder="كلمة المرور" required />
                    </div>
                    {error && <div  className={styles.errorMsg}>
                        <p> {error} </p>    
                    </div>}
                    <div className={styles.pass}><a href="#">هل نسيت كلمة المرور؟</a></div>
                    <div  className={styles.row +" "+styles.button}>
                        <input type="submit" value="تسجيل الدخول" />
                    </div>
                    {/* <div className="signup-link">لست عضوًا؟ <a href="#">سجل الآن</a></div> */}
                </form>
            </div>
        </div>
    )
}
