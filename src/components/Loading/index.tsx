interface IProps {
    title?: string;
    message?: string;
}

const Loading = ({
    title = "Loading",
    message = "Please wait while the data is being loaded..."
}: IProps) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[12rem] text-gray-600">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
            <h3 className="text-gray-700 text-lg font-medium mb-1">{title}</h3>
            <p className="text-gray-500 text-sm text-center max-w-xs">{message}</p>
        </div>
    );
};

export default Loading;
