import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'


const Birthday: NextPage = () => {
  const router = useRouter()

  const toNotes = () => router.push('note')

  return (
    <div className={'flex w-screen h-screen justify-center items-center flex-col bg-orange-300 bg-lith2 backdrop-blur-sm'}>
      <Head>
        <title>Lithney Birthday | Day</title>
      </Head>
      <div className={'flex w-screen h-screen justify-center items-center flex-col backdrop-blur-md'}>
        <div className={'bg-white p-4 sm:h-4/6 h-screen sm:w-8/12 rounded-md shadow-lg w-11/12'}>
          <div className={'border-l-4 border-red-500 p-2 shadow-md'}>
            <button
              className={'absolute float-right bg-orange-500 my-3 p-2 rounded-full text-white uppercase text-l font-medium hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-400'}
              title={'Puedes gestionar notitas Lithney'}
              onClick={toNotes}
            >
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="12" y1="18" x2="12" y2="12" />  <line x1="9" y1="15" x2="15" y2="15" /></svg>
            </button>
            <h1 className={'text-red-500 text-2xl font-semibold flex items-center justify-center flex-col'}>
              <Image
                src={'/lith1-modified.png'}
                alt={'you image'}
                width={50}
                height={50}
              />
              <span className={'ml-3'}>Feliz cumpleaños</span>
              <span className={'uppercase font-bold'}>🎉🎂😉Lithney😉🎂🎉</span> </h1>
          </div>

          <div className={'mt-3 md:h-4/6 h-5/6 overflow-y-auto scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'}>

            <div className={'flex border-l-4 border-green-500 p-2 shadow-md m-2 justify-center'}>
              <p className={'text-green-500 text-xl flex flex-col text-center'}>
                ¡El Señor mismo te cuida!
                El Señor está a tu lado como tu sombra protectora.
                <span className={'font-bold text-md text-center'}>Salmos 121:5</span>
              </p>
            </div>

            <div className={'flex border-l-4 border-green-500 p-2 shadow-md m-2 justify-center'}>
              <p className={'text-green-500 text-xl flex flex-col text-center'}>
                Pues a sus ángeles mandará acerca de ti,
                Que te guarden en todos tus caminos.
                En las manos te llevarán,
                Para que tu pie no tropiece en piedra.
                <span className={'font-bold text-md text-center'}>Salmos 91:11-12</span>
              </p>
            </div>

            <div className={'flex border-l-4 border-green-500 p-2 shadow-md m-2 justify-center'}>
              <p className={'text-green-500 text-xl flex flex-col text-center'}>
                El temor de Jehová es el principio de la sabiduría,
                Y el conocimiento del Santísimo es la inteligencia.
                Porque por mí se aumentarán tus días,
                Y años de vida se te añadirán.
                <span className={'font-bold text-md text-center'}>Proverbios 9:10-11</span>
              </p>
            </div>

            <div className={'flex border-l-4 border-green-500 p-2 shadow-md m-2 justify-center'}>
              <p className={'text-green-500 text-xl flex flex-col text-center'}>
                No temas, porque yo estoy contigo; no te desalientes, porque yo soy tu Dios. Te fortaleceré, ciertamente te ayudaré, sí, te sostendré con la diestra de mi justicia.
                <span className={'font-bold text-md text-center'}>Isaías 41:10</span>
              </p>
            </div>

            <div className={'flex border-l-4 border-green-500 p-2 shadow-md m-2 justify-center'}>
              <p className={'text-green-500 text-xl flex flex-col text-center'}>
                Porque yo Jehová soy tu Dios, quien te sostiene de tu mano derecha, y te dice: No temas, yo te ayudo.
                <span className={'font-bold text-md text-center'}>Isaías 41:13</span>
              </p>
            </div>

          </div>

        </div>
      </div>
      <div className={'absolute bottom-2 right-2'}>
        <button className={'bg-gray-500 my-1 p-2 rounded-full text-white uppercase text-xs font-medium hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400'}>
          <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6-6a6 6 0 0 1 -8 -8l3.5 3.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Birthday