type Props = {
  onClick: () => void;
  children: React.ReactNode;
};
export default function GradientContainer({ children, onClick }: Props) {
  return (
    <div className=" rounded-full bg-gradient-to-r  from-[#903AFF] via-[#D43AFF]  to-[#FE34B9]  p-0.5 self-end">
      <div
        className="flex rounded-full  items-center justify-center bg-secondary p-0.5"
        onClick={onClick}
      >
        {children}
      </div>
    </div>
  );
}
