import axios from "axios"
import prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor";
import { useEffect, useState } from "react"
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github-dark.css';

const App = () => {

  const [code, setcode] = useState(`Enter your code here...`)
  const [review, setreview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  },)

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

  async function reviewcode(){
    const request = await axios.post(`${API_BASE}/ai/get-review`, { code })
    setreview(request.data)
  }
  
  return (
    <>
      <main className="h-screen w-full bg-black p-5 overflow-hidden">
        <h1 className="text-white text-center text-4xl font-semibold">
          Revu.ai
        </h1>
        <h1 className="text-white/50 text-center text-xl">
          Your AI Code Reviewer
        </h1>
        <div className="conatiner p-5 h-[95%] w-full flex gap-6">
          <div className="left h-full w-[50%] relative">
            <div className="code h-full w-full">
              <Editor
                value={code}
                onValueChange={(code) => setcode(code)}
                highlight={(code) =>
                  prism.highlight(
                    code,
                    prism.languages.javascript,
                    "javascript"
                  )
                }
                padding={10}
                className="bg-zinc-800 text-white rounded-2xl font-mono h-full w-full outline-none"
              />
            </div>
            <button
              onClick={reviewcode}
              className="absolute select-none bg-[#f2f0ef94] px-5 py-2 rounded-lg bottom-8 right-8"
            >
              Review
            </button>
          </div>
          <div className="right h-full w-[50%] bg-zinc-800 rounded-2xl text-white overflow-auto p-5 text-sm">
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {review}
            </Markdown>
          </div>
        </div>
      </main>
    </>
  );
}

export default App