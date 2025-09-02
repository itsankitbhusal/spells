
const Info = () => {
    return (
        <div className="bg-blue-50 border border-blue-200 rounded-[.8rem] p-4 m-4 flex items-start flex-col gap-1 mx-4 max-w-[1400px] mx-auto">
            <p className="text-gray-700 text-sm font-medium ">Quick Tips</p>
            <ul className="text-gray-600 text-sm list-disc list-inside pl-2">
                <li>Double click on a spell to add it to favorites.</li>
                <li>Click on the spell title to view its details.</li>
            </ul>
        </div>
    )
}

export default Info