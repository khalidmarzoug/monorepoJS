import { useState } from "react";

export default function PwdPattern() {
  const [pwd, setPwd] = useState("");

  const numbers_validation = /\d/.test(pwd);
  const uppercase_validation = /[A-Z]/.test(pwd);
  const lowercase_validation = /[a-z]/.test(pwd);
  const specialChar_validation = /[^a-zA-Z0-9\-\/ ]/.test(pwd);
  const length_validation = pwd.length >= 6;

  const validations = [length_validation, lowercase_validation, uppercase_validation, numbers_validation, specialChar_validation];
  const filtredValidation = validations.filter((v) => v);
  const filtredValidationV2 = validations.filter((v) => !v);

  return (
    <div className="w-full md:w-1/3 flex flex-col items-start justify-center h-full">
      <div className="flex mb-2 w-full">
        <div className="flex-1">
          <input
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 outline-none"
            placeholder="Enter password"
          />
          <div className="flex gap-1 p-2 mt-2 w-full">
            {filtredValidation.map((valid, index) => (
              <div key={index} className={`h-2 w-1/5 rounded-md bg-green-500`}></div>
            ))}
            {filtredValidationV2.map((valid, index) => (
              <div key={index} className={`h-2 w-1/5 rounded-md bg-gray-500`}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center px-4">
        <h4 className="py-2 text-lg font-semibold text-gray-800">Your password must contain:</h4>
        <ul className="text-lg text-gray-500 w-full">
          <li className={`flex items-center gap-x-2 ${length_validation ? "text-green-600" : "text-gray-700"}`}>
            {length_validation ? "✔" : "✖"} Minimum number of characters is 6.
          </li>
          <li className={`flex items-center gap-x-2 ${lowercase_validation ? "text-green-600" : "text-gray-700"}`}>
            {lowercase_validation ? "✔" : "✖"} Should contain lowercase letters.
          </li>
          <li className={`flex items-center gap-x-2 ${uppercase_validation ? "text-green-600" : "text-gray-700"}`}>
            {uppercase_validation ? "✔" : "✖"} Should contain uppercase letters.
          </li>
          <li className={`flex items-center gap-x-2 ${numbers_validation ? "text-green-600" : "text-gray-700"}`}>
            {numbers_validation ? "✔" : "✖"} Should contain numbers.
          </li>
          <li className={`flex items-center gap-x-2 ${specialChar_validation ? "text-green-600" : "text-gray-700"}`}>
            {specialChar_validation ? "✔" : "✖"} Should contain special characters.
          </li>
        </ul>
      </div>
    </div>
  );
}
