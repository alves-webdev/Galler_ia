import React from 'react'

function FormField({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">{labelName}
        </label>
        
      {isSurpriseMe && (
        <button
          type="button"
          className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-md text-black transition duration-200 ease-in-out transform
          hover:bg-[#D1D1D6] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6469FF]"
          onClick={handleSurpriseMe}
        >
           Me surpreenda!
        </button>
      )}
      </div>
      <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="mt-1 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-[#6469FF] 
          focus:border-[#6469FF] outline-none block w-full p-3"
        />
    </div>
  )
}

export default FormField