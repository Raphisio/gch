import clsx from 'clsx';

export default function Button ({ style, className, children, type }) {
  const defaultClasses = "font-medium px-7 py-1 rounded-full transition duration-150 ease-in-out ";

  return (
    <button className={clsx(defaultClasses + className, {
      "bg-carrot text-very-dark": style === "primary",
      "border border-[#626160] py-2 hover:bg-[#626160]/10": style === "secondary",
    })}>
      <div className={clsx("flex flex-row items-center justify-center gap-3 transition duration-150", {"hover:scale-x-[102%]": type === "withIcon"})}>
        {children}
      </div>
    </button>
  )
}