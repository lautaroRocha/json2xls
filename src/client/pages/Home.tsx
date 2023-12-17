import { useState } from "react"
import { Button } from "../components"
import mock from "../mocks/mockJSON.json"
import { useNavigate } from "react-router-dom"
import Editor from '@monaco-editor/react'

interface JSON2Convert {
  title: string
  data: Array<object>
}

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [apiResponse, setApiResponse] = useState<string>("")
  const [requestBody, setRequestBody] = useState<JSON2Convert>(mock)

  const navigate = useNavigate()


  const readTheDocs = () => {
    navigate("/docs")
  }

  const tryApi = async (data: JSON2Convert) => {
    setLoading(true)
    try {
      const res = await fetch("/api/excel", {
        method: "POST",
        body: JSON.stringify(data)
      })
      const blob = await res.blob()
      const url = window.URL.createObjectURL(new Blob([blob], { type: "aplication/vnd.ms-excel" }))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", data.title + ".xls")
      document.body.appendChild(link)
      link.click()
      link.parentNode?.removeChild(link)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const monacoOptions = {
    minimap: {
      enabled: false
    }
  }
  return (
    <>
      <main>
        <h1>JSON to XLS</h1>
        <p>A web service to turn your JSON data to a XLS file.</p>
        <div className="actions">
          <Button
            label="Try it"
            onClick={() => {
              tryApi(requestBody)
            }}
          />
          <Button label="Read the docs" onClick={readTheDocs} />
        </div>
      </main>
      <section>
        <Editor 
          width={'50vw'}
          height={'400px'}
          options={monacoOptions}
          defaultLanguage="json"
          defaultValue={JSON.stringify(mock, null, 2)}
          theme="vs-dark"
          onChange={(val)=> {val && setRequestBody(JSON.parse(val))}}
          />
      </section>
    </>
  )
}

export default Home
