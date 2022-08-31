import * as React from 'react';
//=======================
interface InputProps {
  i: number;
  value: number;
  setValue: (prvState: any) => void;
}
export const Input: React.FC<InputProps> = ({ i, value, setValue }) => {
  return (
    <input
      type="number"
      placeholder="0"
      value={value}
      onChange={(e) =>
        setValue((prvState) => {
          return { ...prvState, [i]: e.target.value ?? 0 };
        })
      }
      className="border-none rounded focus:ring-1 bg-slate-200"
    />
  );
};
