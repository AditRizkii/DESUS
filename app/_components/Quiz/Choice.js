import React from "react";

const Choice = ({ name, question, onChange }) => {
  return (
    <div>
      <h3 class="mb-4 font-Poppins md:text-lg font-normal text-dark dark:text-white sm:text-base lg:text-start sm:text-justify">
        {question}
      </h3>
      <ul class="items-center lg:w-11/12 sm:w-full sm:ml-0 ml-10 mx-auto font-Poppins text-center font-medium text-slate-900 bg-white/70 border border-krim rounded-full sm:flex">
        <li class="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`tidakpernah-${name}`}
              type="radio"
              value="tidakpernah"
              required
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
            />
            <label
              htmlFor={`tidakpernah-${name}`}
              class="w-full py-3 lg:ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sm:text-xs"
            >
              Tidak Pernah
            </label>
          </div>
        </li>
        <li class="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`jarang-${name}`}
              type="radio"
              value="jarang"
              required
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:focus:ring-merah dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor={`jarang-${name}`}
              class="w-full py-3 lg:ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sm:text-xs"
            >
              Jarang
            </label>
          </div>
        </li>
        <li class="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`sering-${name}`}
              type="radio"
              value="sering"
              required
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:focus:ring-merah dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor={`sering-${name}`}
              class="w-full py-3 lg:ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sm:text-xs"
            >
              Sering
            </label>
          </div>
        </li>
        <li class="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id={`selalu-${name}`}
              type="radio"
              value="selalu"
              required
              name={name}
              onChange={onChange}
              class="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:focus:ring-merah dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor={`selalu-${name}`}
              class="w-full py-3 lg:ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sm:text-xs"
            >
              Selalu
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Choice;
