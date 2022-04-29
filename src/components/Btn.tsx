import React, { useCallback, useRef } from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  setFiles?: Function;
  max?: number;
}

export default function Btn(props: Props) {
  const { accept, children, max, className, setFiles } = props;

  const inputFileRef: React.MutableRefObject<null | HTMLInputElement> =
    useRef(null);
  const multiple = !!(max && max > 1);

  //
  const OnBtnImages = () => {
    if (inputFileRef && inputFileRef.current !== null)
      inputFileRef.current.click();
  };

  //
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.currentTarget.files;
    if (setFiles) {
      setFiles((prev: Obj) => {
        if (!result || !result.length) {
          return prev;
        }
        if (multiple) {
          let files = prev.files ? [...prev.files, ...result] : [...result];
          if (files.length >= max) files.splice(max);
          return { ...prev, files };
        }
        return { ...prev, files: [result[0]] };
      });
    }
  }, []);

  return (
    <>
      <input
        type="file"
        accept={accept || ".jpg,.jpeg"}
        multiple={multiple}
        name="files"
        ref={inputFileRef}
        onChange={onChange}
        style={style}
      />
      <button className={className} onClick={OnBtnImages} type="button">
        {children}
      </button>
    </>
  );
}

const style = {
  display: "none",
};
