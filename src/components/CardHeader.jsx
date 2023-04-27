export default function CardHeader({ firstName, lastName, title }) {
  return (
    <div
      className="bg-blue-900 flex flex-col justify-center gap-7 pl-10"
      style={{ gridArea: 'header' }}
    >
      <h2 className="text-5xl text-gray-50 font-bold">
        {firstName || 'Name'} {lastName}
      </h2>
      <p className="text-3xl text-gray-50 font-medium">{title || 'Title'}</p>
    </div>
  )
}
