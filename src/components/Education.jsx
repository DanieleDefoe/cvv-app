export default function Education({
  name = 'University name',
  city = 'City',
  degree = 'Degree',
  subject = 'Subject',
  from = 'From',
  to = 'To',
}) {
  return (
    <div className="flex gap-12">
      <p className="text-xl font-semibold w-44">
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
