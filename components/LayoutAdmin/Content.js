import { useState } from 'react'
import Link from 'next/link'
import ImageButtonMenu from 'components/Icons/ImageButtonMenu'
import ImageButtonClose from 'components/Icons/ImageButtonClose'

const Content = ({ children }) => {

  const [transition, setTransition] = useState(false)

  const handleTransitionNav = (e) => {
    setTransition(transition ? false : true)
  }

  const handleStopPropagation = (e) => { e.stopPropagation() }


  return (
    <article className="w-full flex-grow relative md:flex">
      <nav onClick={handleTransitionNav}
        className={`transition duration-500 ${transition ? "translate-x-0" : "-translate-x-full"} absolute w-full h-full rounded-b-md md:translate-x-0 md:w-72 md:relative md:top-0`}
      >
        <div
          onClick={handleStopPropagation}
          className="w-72 h-full py-2 px-4 bg-slate-100 bg-opacity-80 backdrop-blur-sm border-r-2 border-r-slate-300 md:w-full"
        >
          <p className="mb-2">Go to:</p>
          <Link href="/admin" passHref>
            <div onClick={handleTransitionNav}
              className="transition w-full h-8 px-2 mb-2 text-base hover:bg-red-400 rounded-md cursor-pointer border-b border-b-slate-300">
              <a className="leading-7">General rules</a>
            </div>
          </Link>
          <Link href="/admin/request-authors" passHref>
            <div onClick={handleTransitionNav}
              className="transition w-full h-8 px-2 mb-2 text-base hover:bg-red-400 rounded-md cursor-pointer border-b border-b-slate-300">
              <a className="leading-7">Request by authors</a>
            </div>
          </Link>
          <Link href="/admin/request-date" passHref>
            <div onClick={handleTransitionNav}
              className="transition w-full h-8 px-2 mb-2 text-base hover:bg-red-400 rounded-md cursor-pointer border-b border-b-slate-300">
              <a className="leading-7">Request by issue date</a>
            </div>
          </Link>
          <Link href="/admin/request-titles" passHref>
            <div onClick={handleTransitionNav}
              className="transition w-full h-8 px-2 mb-2 text-base hover:bg-red-400 rounded-md cursor-pointer border-b border-b-slate-300">
              <a className="leading-7">Request by titles</a>
            </div>
          </Link>
          <Link href="/admin/request-collection" passHref>
            <div onClick={handleTransitionNav}
              className="transition w-full h-8 px-2 mb-2 text-base hover:bg-red-400 rounded-md cursor-pointer border-b border-b-slate-300">
              <a className="leading-7">Request by collection</a>
            </div>
          </Link>
        </div>
      </nav>
      {children}
      <button onClick={handleTransitionNav} className="sticky float-right w-11 h-11 bottom-3 right-6 md:hidden">
        {transition ?
          <ImageButtonClose width={40} height={40} /> :
          <ImageButtonMenu width={40} height={40} />
        }
      </button>
    </article>
  )
}

export default Content