import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'


const Anniversary: NextPage = () => {

  return (
    <div className={'flex w-screen h-screen justify-center items-center flex-col bg-orange-300 bg-lith2 backdrop-blur-sm'}>
      <Head>
        <title>Tu & yo</title>
      </Head>
      <div className={'flex w-screen h-screen justify-center items-center flex-col backdrop-blur-md'}>
        <div className={'bg-white p-4 sm:h-5/6 h-5/6 sm:w-8/12 rounded-md shadow-lg w-11/12'}>
          <div className={'border-l-4 border-red-500 p-2 shadow-md'}>

            <h1 className={'text-red-500 text-2xl font-semibold flex items-center justify-center flex-col'}>
              <Image
                src={'/anniversary-ico.png'}
                alt={'you image'}
                width={50}
                height={50}
              />
              <span className={'ml-3'}>Feliz Aniversario Cariño mío</span>
              <span className={'uppercase font-bold'}>🎉 💑 👫 💏Lithney & Gustavo 💑 👫 💏🎉</span> </h1>
          </div>

          <div className={'mt-3 md:h-4/6 h-4/6 overflow-y-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'}>

            <div className={'flex border-l-4 border-red-300 p-2 shadow-md m-2 flex-row flex-wrap justify-around items-center'}>
              <Image
                src={'/bg1.jpg'}
                alt={'first'}
                width={250}
                height={150}
              />
              <Image
                src={'/bg2.jpg'}
                alt={'first'}
                width={250}
                height={150}
              />
              <Image
                src={'/bg3.jpg'}
                alt={'first'}
                width={250}
                height={150}
              />
            </div>

            <div className={'flex border-l-4 border-red-300 p-2 shadow-md m-2 justify-center'}>
              <p className={'text-orange-500 text-xl flex flex-col '}>
                Cariño mio.<br/>
                Espero estes teniendo un bello día.<br />
                Hoy es un día recontraespecial pues un día como hoy todo cambio,<br />
                mi corazón se llena de alegría al recordar cada bello momento que pasamos juntos,<br />
                pido a Dios en oración que esto que siento sea para bien y para su obra, cada día que pasa siento cosas lindas por ti.<br />
                Tu alegría, tu simpatía, tu empatía, tus gestos me enamoran mas y mas, tan linda y dulce eres Cariño que me siento muy privilegiado al estar a tu lado.<br />
                Agradezco el favor del padre por estos días y sigo y seguire orando para que Dios nos dirija.<br />
                <span className={'italic text-orange-700 text-center'}>TE QUIERO MUCHO CARIÑO MÍO</span>
                Estoy seguro de que en este sendero estamos segun su voluntad 
                <span className={'font-bold text-md text-center'}> ❤️AMOR MÍO ❤️</span>
                <span className={'font-bold text-md text-center'}><a href='https://drive.google.com/file/d/1klgFLDfJmm8NVrDH0gbFyZA3SSwQ_Fts/view?usp=sharing' target='blank'> ❤️Click ❤️</a></span>
              </p>
            </div>

            <div className={'flex border-l-4 border-green-500 p-2 shadow-md m-2 justify-center'}>
              <p className={'text-green-500 text-xl flex flex-col text-center'}>
                Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto
                <span className={'font-bold text-md text-center'}>Colosenses 3:14</span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Anniversary