"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Register() {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [confirmPwd, setConfirmPwd] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(pwd === confirmPwd) setError("Password does not match")

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, pwd})
            })

            const data = res.json();
            if(!res.ok) setError("Registration failed")
            
            router.push("/login")
        } catch (error) {
            throw new Error("Something went wrong")
        }
    }

  return (
    <div>Register</div>
  )
}

export default Register