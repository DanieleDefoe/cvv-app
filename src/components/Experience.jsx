export default function Experience({ position, company, city, from, to }) {
  return (
    <div className="flex gap-12">
      <p className="text-xl font-semibold">
        {from} - {to}
      </p>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold">{position}</h4>
        <p className="text-xl">
          {company}, {city}
        </p>
      </div>
    </div>
  )
}
