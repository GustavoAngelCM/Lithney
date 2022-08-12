import { addDoc, collection, deleteDoc, doc, DocumentData, QueryDocumentSnapshot, updateDoc } from 'firebase/firestore'
import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { firestore } from '../config/firebase'
import Head from 'next/head'

const Config: NextPage = () => {
  const router = useRouter()
  const [pwd, setPwd] = useState('')

  const onChanguePass = (e: any) => setPwd(e.target.value)

  const updatePwd = async () => {
    await updateDoc(doc(firestore, 'config', 'xYuuBHlGY7fERBKbdFbr'), { pwd })
    setPwd('')
  }

  const toDay = () => router.push('birthday')

  const toExit = () => router.push('/')
  
  const toNotes = () => router.push('note')


  return (
    <div className={'flex w-screen h-screen justify-center items-center  bg-lith3 flex-col'}>
      <Head>
        <title>Lithney Birthday | Notes</title>
      </Head>
      <div className={'flex w-screen h-screen justify-center items-center flex-col backdrop-blur-sm'}>
        <div className={'bg-white p-4 sm:h-2/6 h-2/6 sm:w-8/12 rounded-md shadow-lg w-11/12'}>
          <div className={'border-l-4 border-green-500 p-2 shadow-md m-2 w-full '}>
            <h2 className={'text-green-500 text-xl text-center'}>
              Configuración
            </h2>
          </div>
          <div className='flex justify-between'>
            <input
              value={pwd}
              className={'sm:w-11/12 md:w-9/12 text-center p-2 my-3 bg-green-100 rounded-md focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500'}
              placeholder={'New password'}
              onChange={onChanguePass}
              type={'password'}
            />

            <button
              className={'bg-green-500 my-3 py-2 px-4 rounded-lg text-white uppercase text-xs font-medium hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-400'}
              onClick={updatePwd}
            >
              Changue password
            </button>
          </div>
          <div className={'flex flex-row flex-wrap justify-around'}>
            <button
              className={'bg-orange-500 my-1 py-2 px-4 rounded-lg text-white uppercase text-xs font-medium hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-400'}
              onClick={toDay}
            >
              Birthday
            </button>
            <button
              className={'bg-green-500 my-1 py-2 px-4 rounded-lg text-white uppercase text-xs font-medium hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-400'}
              onClick={toNotes}
            >
              Notes
            </button>
            <button
              className={'bg-slate-500 my-1 py-2 px-4 rounded-lg text-white uppercase text-xs font-medium hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-400'}
              onClick={toExit}
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Config