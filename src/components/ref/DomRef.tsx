import { useEffect, useRef } from "react";

export const DomRef = () => {
  //   const inputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current?.focus();

    // when inputRef is not null we know already by doing(null !) in useRef
    inputRef.current.focus();

    // console.log(inputRef);
    // console.log(inputRef.current);
    // console.log(inputRef.current?.focus);
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
