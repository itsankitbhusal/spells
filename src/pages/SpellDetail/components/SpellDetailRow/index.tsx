interface IProps {
  label: string;
  value?: string;
  children?: React.ReactNode;
}

const SpellDetailRow = ({ label, value, children }: IProps) => {
  return (
    <div className="flex items-start gap-2 ">
      <p className="font-semibold whitespace-nowrap">{label}:</p>
      {value ? <p>{value}</p> : null}
      {children ? <div className="flex gap-1">{children}</div> : null}
    </div>
  );
};

export default SpellDetailRow;
