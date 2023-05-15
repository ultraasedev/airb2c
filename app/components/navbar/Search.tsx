'use client';

/*import { BiSearch } from "react-icons/bi";*/

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">
            N'importe Où
            </div>
            <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1">
            N'importe Quand
            </div>
   
      </div> 
    </div>
  );
};
export default Search;
