import Header from './components/Header'
import Form from './components/Form'
import Card from './components/Card'
import Footer from './components/Footer'

import { useState } from 'react'

import { v4 } from 'uuid'

import Input from './components/Input'
import Button from './components/Button'

function App() {
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
      console.log(id, experState)
      // const idx = experState.findIndex((el) => el[0] === id)
      // console.log(idx)
    } else if (parentElement.classList.contains('education')) {
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
        setExperState((state) => [...state, [identifier, 'exper data']])
      } else {
        setEduState((state) => [...state, [identifier, 'edu data']])
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
                state.length === 5
                  ? []
                  : [
                      ...state.slice(0, experiences.length - 1),
                      ...state.slice(experiences.length + data.length),
                    ],
              )
            } else {
              setEduState((state) =>
                state.length === 6
                  ? []
                  : [
                      ...state.slice(0, experiences.length),
                      ...state.slice(experiences.length + data.length),
                    ],
              )
            }
          }}
        />,
      ),
    )
  }

  function handleResetClick() {
    setExperiences([])
    setEducation([])
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
    education,
    setEducation,
    experState,
    eduState,
  }

  return (
    <div className="min-h-screen bg-gray-300 px-8 box-border flex flex-col items-center gap-12">
      <Header />
      <Form
        states={states}
        handleResetClick={handleResetClick}
        handleChange={handleChange}
        handleAddClick={handleAddClick}
      />
      <Card states={states} />
      <Footer />
    </div>
  )
}

export default App
