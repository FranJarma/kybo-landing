type InputMessageProps = {
  message: string;
};

export function InputMessage({ message }: InputMessageProps) {
  return <p className="text-kybo-orange pt-4 leading-7">{message}</p>;
}
