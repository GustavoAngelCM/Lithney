import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { firestore } from '../config/firebase'
import { doc } from 'firebase/firestore'
import { useDocument } from 'react-firebase-hooks/firestore'

const Home: NextPage = () => {
  const router = useRouter()
  const [key, setKey] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [value, loading, error] = useDocument( doc(firestore, 'config', 'xYuuBHlGY7fERBKbdFbr'))

  const validate = () => {
    const pass = value?.data()?.pwd
    if (pass === key) {
      setSuccessMessage('Super 😊 ji ji ji')

      setTimeout(() => {
        router.push('birthday')
      }, 1500)

    } else {
      setErrorMessage('Intenta de nuevo porfa')
    }
  }

  const onChangueKey = (e: any) => setKey(e.target.value)

  const closeMessageError = () => {
    setErrorMessage('')
    setKey('')
  }

  return (
    <>
      <Head>
        <title>Lithney Birthday</title>
      </Head>
      <div className={'flex w-screen h-screen justify-center items-center bg-lith1 flex-col'}>
        <div className={'flex w-screen h-screen justify-center items-center flex-col backdrop-blur-md'}>
        {
          (errorMessage !== '') && (
            <div className={`flex flex-col items-start sm:w-11/12 md:w-9/12 border-l-4 p-2 border-red-500 bg-red-50`}>
              <h4 className={`text-lg uppercase font-medium w-full flex justify-between text-red-500`}> Noo... <span onClick={closeMessageError} className={'text-right cursor-pointer'}>X</span></h4>
              <p className={`$text-base text-red-900`}>{errorMessage}</p>
            </div>
          )
        }
        {
          (successMessage !== '') && (
            <div className={`flex flex-col items-start sm:w-11/12 md:w-9/12 border-l-4 p-2 border-green-500 bg-green-50`}>
              <h4 className={`text-lg uppercase font-medium w-full flex justify-between text-green-500`}> Si... </h4>
              <p className={`$text-base text-green-900`}>{successMessage}</p>
            </div>
          )
        }
        <input
          value={key}
          className={'sm:w-11/12 md:w-9/12 text-center p-2 my-3 bg-green-100 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500'}
          placeholder={'Enter key'}
          onChange={onChangueKey}
        />
        {
          !loading && (
            <button
                className={'bg-green-500 my-3 py-2 px-4 rounded-lg text-white uppercase text-l font-medium hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-400'}
              onClick={validate}
            >
              Click ME LITH
            </button>
          )
        }
        {
          error && (
            <div className={'bg-white text-red-500 font-semibold text-xl p-2 m-2 rounded-md'} ><h2>Error de Red</h2></div>
          )
        }
        </div>
      </div>
    </>
  )
}

export default Home

