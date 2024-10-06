import Labelsearch from "./Labelsearch"
function Navbar(){
    return <>
        <div className="flex justify-between pr-4 pl-5">
            <svg aria-hidden="true" className="swoosh-svg size-20" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
            <div className="flex justify-center items-center space-x-3 ml-24 font-semibold text-lg">
                <button className="group relative w-max">
                    <span className="">New</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                </button>
                <button className="group relative w-max">
                    <span className="">Men</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                </button>
                <button className="group relative w-max">
                    <span className="">Women</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                </button>
                <button className="group relative w-max">
                    <span className="">Kids</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                </button>
                <button className="group relative w-max">
                    <span className="">Jordan</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                </button>
                <button className="group relative w-max">
                    <span className="">Sale</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-black group-hover:w-3/6"></span>
                </button>
            </div>
            <div className="flex justify-center items-center space-x-3">
                <Labelsearch></Labelsearch>
                <button className="rounded-full hover:bg-gray-300 p-2 active:bg-white"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg></button>
                <button className="rounded-full hover:bg-gray-300 p-2 active:bg-white"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg></button>
            </div>
        </div>
    </>
} 
export default Navbar