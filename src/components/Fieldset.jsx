export default function Fieldset({ title, children }) {
  return (
    <fieldset className={`flex flex-col gap-5 ${title}`}>
      <legend className="text-2xl font-semibold capitalize mb-7">
        {title}
      </legend>
      {children}
    </fieldset>
  )
}
