function Labelsearch(){
    return <div className="">
        <label className="px-16 items-center bg-gray-100 rounded-full flex m-0 py-1 pr-3 pl-0 hover:bg-gray-200" >
            <div className="p-2 bg-gray-100 hover:bg-white rounded-full">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </div>
            <input className="bg-transparent focus:outline-none p-0 pl-1 text-black" placeholder="Search"/>
        </label>
    </div>
}
export default Labelsearch