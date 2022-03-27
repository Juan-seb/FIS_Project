const LayoutAdmin = ({ children }) => {

  return (
    <main className="grid place-items-center items-stretch h-screen scroll sm:py-2 sm:px-4">
      <section className="flex flex-col relative w-full h-full max-w-md rounded-md shadow-xl shadow-slate-600 bg-slate-100 overflow-hidden sm:max-w-full">
        <header className="w-full h-min bg-red-800 rounded-t-md">
          <h2 className="h-full text-xl my-1 p-2 font-semibold text-white">Administrativo Project FIS</h2>
        </header>
        {children}
      </section>
    </main>
  )
}

export default LayoutAdmin

