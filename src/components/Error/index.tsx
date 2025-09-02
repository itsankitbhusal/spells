interface IProps {
    message?: string;
}

const Error = ({ message = "Something went wrong" }: IProps) => {
    return (
        <div className="bg-red-50 border border-red-200 rounded-[0.8rem] p-4 m-4 min-h-[10rem] flex flex-col items-center justify-center gap-1">
            <h3 className="text-red-700 text-sm font-medium">Error</h3>
            <p className="text-red-600 text-sm">{message}</p>
        </div>
    );
};

export default Error;
