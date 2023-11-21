import React from "react";

const Choice = ({ ChoiceId, question, onChange }) => {
  return (
    <div>
      <h3 className="mb-4 font-Poppins md:text-lg font-normal text-black sm:text-base lg:text-start sm:text-justify">
        {`Apakah anda merasa ${question} ?`}
        {/* {question} */}
      </h3>
      <ul className="items-center lg:w-11/12 sm:w-full sm:ml-0 ml-10 mx-auto font-Poppins text-center font-medium text-slate-900 bg-white/70 border border-krim rounded-full sm:flex">
        <li className="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id={`tidak-${ChoiceId}`}
              type="radio"
              value={false}
              required
              name={ChoiceId}
              onChange={onChange}
              className="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"
            />
            <label
              htmlFor={`tidak-${ChoiceId}`}
              className="w-full py-3 lg:ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sm:text-xs"
            >
              Tidak
            </label>
          </div>
        </li>
        <li className="w-full border-b border-krim hover:bg-krimtua/20 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id={`ya-${ChoiceId}`}
              type="radio"
              value={true}
              required
              name={ChoiceId}
              onChange={onChange}
              className="w-4 h-4 text-merah bg-gray-100 border-gray-300 focus:ring-merahtua dark:focus:ring-merah dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor={`ya-${ChoiceId}`}
              className="w-full py-3 lg:ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sm:text-xs"
            >
              Ya
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Choice;
