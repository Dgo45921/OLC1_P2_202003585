import Editor from "@monaco-editor/react"

function InputArea() {

  return (
      <div>
        <Editor
            height={"800px"}
            width={"100%"}
            theme={"vs-dark"}
            defaultLanguage={"java"}
        />

      </div>
  )
}

export default InputArea
