export default function Education({ name, city, degree, subject, from, to }) {
  return (
    <div className="flex gap-12">
      <p className="text-xl font-semibold">
        {from} - {to}
      </p>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold">
          {name}, {city}
        </h4>
        <p className="text-xl">Degree: {degree}</p>
        <p className="text-xl">Subject: {subject}</p>
      </div>
    </div>
  )
}
