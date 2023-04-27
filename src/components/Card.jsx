import CardHeader from './CardHeader'
import CardMain from './CardMain'
import CardAside from './CardAside'

import { forwardRef } from 'react'

const Card = forwardRef(function Card({ states }, ref) {
  return (
    <section ref={ref} className="w-full max-w-6xl grid shadow-2xl">
      <CardHeader
        firstName={states.name}
        lastName={states.surname}
        title={states.title}
      />
      <CardMain
        description={states.description}
        experience={states.experiences}
        education={states.education}
        experState={states.experState}
        eduState={states.eduState}
      />
      <CardAside
        photo={states.image}
        address={states.address}
        phone={states.number}
        email={states.email}
      />
    </section>
  )
})

export default Card
