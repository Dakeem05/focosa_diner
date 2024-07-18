interface IWrapper {
  children: React.ReactNode;
}

export default function Wrapper({ children }: IWrapper) {
  return <div className="max-w-[1170px] mx-auto px-5">{children}</div>;
}
