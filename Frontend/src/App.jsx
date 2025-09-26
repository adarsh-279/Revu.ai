import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import { useEffect } from "react"

const App = () => {

  useEffect(() => {
    prism.highlightAll()
  },)
  
  return (
    <>
      <main className="h-screen w-full bg-black p-5 gap-4 overflow-hidden">
        <h1 className="text-white text-center text-5xl font-semibold">
          Revu.ai
        </h1>
        <div className="conatiner p-5 h-[95%] w-full flex gap-8">
          <div className="left h-full w-[50%] relative">
            <div className="code h-full w-full">
              <pre className="rounded-2xl h-full w-full">
                <code className="language-javascript">{`function sum(){
                return 1+1
                }`}</code>
              </pre>
            </div>
            <button className="absolute select-none bg-[#f2f0ef94] px-5 py-2 rounded-lg bottom-8 right-8">
              Review
            </button>
          </div>
          <div className="right h-full w-[50%] bg-zinc-800 rounded-2xl m-[0.5em] pt-[1em] pb-[1em]"></div>
        </div>
      </main>
    </>
  );
}

export default App