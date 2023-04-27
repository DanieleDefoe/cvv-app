import Header from './components/Header'
import Form from './components/Form'
import Card from './components/Card'
import Footer from './components/Footer'
import Input from './components/Input'
import Button from './components/Button'

import { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

import { v4 } from 'uuid'

import './main.css'

function App() {
  const componentPDF = useRef()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const [experiences, setExperiences] = useState([])
  const [experState, setExperState] = useState([])

  const [education, setEducation] = useState([])
  const [eduState, setEduState] = useState([])

  function handleChange(event, changeState) {
    const { id, value, parentElement } = event.target
    changeState(value)

    if (parentElement.classList.contains('experience')) {
      setExperState((state) => {
        const newState = [...state]
        const idx = newState.findIndex((el) => el[0] === id)
        newState[idx][1] = value
        return newState
      })
    } else if (parentElement.classList.contains('education')) {
      setEduState((state) => {
        const newState = [...state]
        const idx = newState.findIndex((el) => el[0] === id)
        newState[idx][1] = value
        return newState
      })
    }
  }

  function handleAddClick(e, data, changeState) {
    const isExp = e.target.parentElement.classList.contains('experience')
    for (let i = 0; i < data.length; i += 1) {
      const { title, type } = data[i]
      const identifier = v4()
      changeState((state) =>
        state.concat(
          <Input
            key={identifier}
            id={identifier}
            type={type}
            handleChange={handleChange}
            placeholder={title}
          />,
        ),
      )
      if (isExp) {
        setExperState((state) => [...state, [identifier, '']])
      } else {
        setEduState((state) => [...state, [identifier, '']])
      }
    }
    changeState((state) =>
      state.concat(
        <Button
          text="delete"
          key={v4()}
          handleClick={() => {
            changeState((state) =>
              state.length === data.length + 1
                ? []
                : [
                    ...state.slice(0, experiences.length),
                    ...state.slice(experiences.length + data.length + 1),
                  ],
            )
            if (isExp) {
              setExperState((state) =>
                state.length === data.length
                  ? []
                  : [
                      ...state.slice(0, experState.length),
                      ...state.slice(experState.length + data.length),
                    ],
              )
            } else {
              setEduState((state) =>
                state.length === data.length
                  ? []
                  : [
                      ...state.slice(0, eduState.length),
                      ...state.slice(eduState.length + data.length),
                    ],
              )
            }
          }}
        />,
      ),
    )
  }

  const states = {
    name,
    setName,
    surname,
    setSurname,
    title,
    setTitle,
    image,
    setImage,
    address,
    setAddress,
    number,
    setNumber,
    email,
    setEmail,
    description,
    setDescription,
    experiences,
    setExperiences,
    setEducation,
    education,
    experState,
    eduState,
  }

  function handleResetClick() {
    for (const func in states) {
      if (typeof states[func] === 'function') {
        states[func]('')
      }
    }
    setExperiences([])
    setEducation([])
  }

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: 'Resume',
  })

  return (
    <div className="min-h-screen bg-gray-300 px-8 box-border flex flex-col items-center gap-12">
      <Header />
      <Form
        states={states}
        handleResetClick={handleResetClick}
        handleChange={handleChange}
        handleAddClick={handleAddClick}
        handlePDFclick={generatePDF}
      />
      <Card states={states} ref={componentPDF} />
      <Footer />
    </div>
  )
}

export default App
