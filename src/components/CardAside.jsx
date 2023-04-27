import placeholder from '../assets/avatar-placeholder.png'

export default function CardAside({ photo, address, phone, email }) {
  return (
    <aside
      className="bg-gray-300 p-7 flex flex-col gap-6"
      style={{ gridArea: 'aside' }}
    >
      <img
        src={photo || placeholder}
        alt="user avatar"
        className="rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h3 className="border-b text-blue-900 border-gray-400 text-2xl font-semibold capitalize">
          personal details
        </h3>
        <h4 className="capitalize text-lg font-semibold text-gray-800">
          address
          <p className="text-base normal-case font-normal">{address}</p>
        </h4>
        <h4 className="capitalize text-lg font-semibold text-gray-800">
          phone number
          <p className="text-base normal-case font-normal">{phone}</p>
        </h4>
        <h4 className="capitalize text-lg font-semibold text-gray-800">
          email
          <p className="text-base normal-case font-normal">{email}</p>
        </h4>
      </div>
    </aside>
  )
}
