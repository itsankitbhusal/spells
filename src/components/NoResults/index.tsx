interface IProps {
    title: string;
    message: string;
}

const NoResults = ({ title, message }: IProps) => {
    return (
        <div className="w-full bg-red-50 border border-red-200 rounded-[.8rem] p-4 my-4 flex items-center justify-center flex-col gap-2 min-h-[10rem]">
            <h3 className="text-gray-700 text-sm font-bold">{title}</h3>
            <p className="text-gray-600 text-sm">{message}</p>
        </div>
    )
}

export default NoResults;
