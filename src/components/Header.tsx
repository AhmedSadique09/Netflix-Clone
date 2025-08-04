export default function header() {
  return (
    <>
      <header className="bg-black">
        <div className="container py-5 text-white z-10">
          <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0">
            <img
              src="/bannerbg.jpg"
              alt="banner"
              className="w-full h-[1080px] object-cover"
            />
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-center">
              <div className="text-5xl font-bold text-red-600">NETFLIX</div>
              <button className="bg-red-600 px-6 py-2 rounded">Sign In</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
