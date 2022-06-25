
import React, { useEffect, useState } from 'react'
import * as api from '../apis/apiFile'

function App () {

  useEffect (async ()=> {
try {
      const crypto= await api.getCrypto()
      console.log(crypto)
      
    } catch (error) { console.error}

  },[])


  return (
    <>
   
    <h1>heyyy</h1>
    </>
  )
}

export default App
