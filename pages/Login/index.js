import Login from '@/components/Login'
import React from 'react'

function index() {
  return (
    <div><Login
    userEmail={(value)=>{console.log('value',value)}}/></div>
  )
}

export default index