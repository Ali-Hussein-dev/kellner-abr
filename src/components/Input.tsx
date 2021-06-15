import * as React from 'react';
//=======================
interface InputProps {
  i: number;
  value: any;
  setValue: (prvState: any) => void;
}
export const Input: React.FC<InputProps> = ({ i, value, setValue }) => {
  return (
    <input
      type="number"
      value={value || 0}
      onChange={(e) =>
        setValue((prvState) => {
          return { ...prvState, [i]: e.target.value };
        })
      }
      className="border-none rounded focus:ring-1 bg-blueGray-200"
    />
  );
};
