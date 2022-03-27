import EscudoUD from 'components/Icons/EscudoUD'
import Link from 'next/link'

const Layout = ({ children }) => {

  return (
    <main className="flex flex-col h-screen">
      <header className="flex justify-start items-center w-full h-min bg-red-800 p-2">
        <div className="w-20 border-r hidden sm:block">
          <EscudoUD width={50} height={77}/>
        </div>
        <h2 className='text-2xl text-slate-50 font-semibold px-2'>Repositorio Universidad Distrital.</h2>
        <Link href="/login" passHref>
          <h3 className="flex-grow mr-2 text-base text-slate-50 font-thin text-right cursor-pointer">Admin login</h3>
        </Link>
      </header>
      {children}
      <footer className="w-full h-min p-4 bg-red-800">
        <h2 className="text-xl text-slate-50 font-semibold text-center mb-1">Universidad Distrital Francisco José de Caldas - Biblioteca UDFJC</h2>
        <h3 className="text-base text-slate-50 font-thin text-center">Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional | Acuerdo de creación N° 10 de 1948 del</h3>
        <h3 className="text-base text-slate-50 font-thin text-center">Concejo de Bogotá  | Acreditación Institucional de Alta Calidad - Resolución N° 23096 del 15 de diciembre del 2016</h3>
        <h3 className="text-base text-slate-50 font-thin text-center">🗺 Calle 13 No. 31 - 75 Bogotá D.C. - República de Colombia | 📱 (+57 1) 3239300  | ⌚ Lunes a viernes de 8 a.m. a 5 p.m.</h3>
      </footer>
    </main>
  )

}

export default Layout