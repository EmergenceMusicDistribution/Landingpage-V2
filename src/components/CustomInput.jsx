import { useField } from "formik"

export const CustomInput = ({label,styles, ...props}) => {
    const [field, meta,helpers] = useField(props)
      
  return (
    <div className="flex flex-col ">
        <label className="text-gray-400 mb-1.5" htmlFor="">{label}</label>
        <input className={`${meta.touched && meta.error ? "border-2 border-red-500 " : ""} bg-[#1e1f26]  border rounded-md py-4 px-2 text-white ${styles}`} {...field} {...props} />
        {meta.touched && meta.error ? <p className="text-red-500 text-sm">{meta.error}</p> : ""}
    </div>
  )
}
