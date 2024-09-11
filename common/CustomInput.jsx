import { useField } from "formik"

export const CustomInput = ({label,styles, ...props}) => {
    const [field, meta,helpers] = useField(props)
      const {touched, error} = meta
  return (
    <div className="flex flex-col ">
        <label className="text-gray-400 mb-1.5" htmlFor="">{label}</label>
        <input  style={{borderColor:touched&&error?'red':'', opacity:'0.95'}} className={`${touched && error ? "border-2 border-red-500 " : ""} bg-[#1e1f26] w-full  border rounded-md py-4 px-2 text-white ${styles}`} {...field} {...props} />
        {meta.touched && meta.error ? <p style={{color:'red',opacity:'0.97'}} className="text-sm">{meta.error}</p> : ""}
    </div>
  )
}
