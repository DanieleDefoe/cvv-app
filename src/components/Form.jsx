import Fieldset from './Fieldset'
import Input from './Input'
import Button from './Button'

import { experienceData, educationData } from '../utils/constants'

export default function Form({
  states,
  handleResetClick,
  handleChange,
  handleAddClick,
  handlePDFclick,
}) {
  return (
    <form
      name="cv"
      className="w-full max-w-6xl bg-gray-200 rounded-xl shadow-lg p-7 font-sans flex flex-col gap-14"
    >
      <Fieldset key={'first'} title="personal information">
        <Input
          handleChange={handleChange}
          key={0}
          type="text"
          data={states.name}
          setter={states.setName}
          placeholder="First name"
        />
        <Input
          handleChange={handleChange}
          key={1}
          type="text"
          data={states.surname}
          setter={states.setSurname}
          placeholder="Last name"
        />
        <Input
          handleChange={handleChange}
          key={2}
          type="text"
          data={states.title}
          setter={states.setTitle}
          placeholder="Title"
        />
        <Input
          handleChange={handleChange}
          key={3}
          type="url"
          data={states.image}
          setter={states.setImage}
          placeholder="Your photo"
        />
        <Input
          handleChange={handleChange}
          key={4}
          type="text"
          data={states.address}
          setter={states.setAddress}
          placeholder="Address"
        />
        <Input
          handleChange={handleChange}
          key={5}
          type="tel"
          data={states.number}
          setter={states.setNumber}
          placeholder="Phone number"
        />
        <Input
          handleChange={handleChange}
          key={6}
          type="email"
          data={states.email}
          setter={states.setEmail}
          placeholder="Email"
        />
        <Input
          handleChange={handleChange}
          key={7}
          type="text"
          data={states.description}
          setter={states.setDescription}
          placeholder="Description"
        />
      </Fieldset>

      <Fieldset key={'second'} title="experience">
        {states.experiences}
        <Button
          text="add"
          handleClick={(e) =>
            handleAddClick(e, experienceData, states.setExperiences)
          }
        />
      </Fieldset>

      <Fieldset key={'third'} title="education">
        {states.education}
        <Button
          text="add"
          handleClick={(e) =>
            handleAddClick(e, educationData, states.setEducation)
          }
        />
      </Fieldset>

      <div className="flex flex-col gap-5">
        <Button
          type="reset"
          text="reset"
          bg="bg-red-700"
          handleClick={handleResetClick}
        />

        <Button
          type="button"
          handleClick={handlePDFclick}
          text="generate PDF"
          bg="bg-green-800"
        />
      </div>
    </form>
  )
}
