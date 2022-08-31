import * as React from 'react';
import { Input } from '@/components/index';
import { calcTotal } from 'src/utils';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
//=======================
export const InputList: React.FC<{
  inputFieldsAmount: number;
  label: string;
  total?: any;
  setTotal: (prvState: any) => void;
  i: number;
}> = ({ inputFieldsAmount, label, i, setTotal }) => {
  const [fieldValues, setFieldValues] = React.useState({ 0: undefined });
  const [fields, setFields] = React.useState(inputFieldsAmount);
  React.useEffect(() => {
    setTotal((prvState) => {
      return {
        ...prvState,
        [i]: calcTotal(fieldValues),
      };
    });
  }, [fieldValues, fields]);
  //======================================return
  return (
    <Accordion allowMultiple defaultIndex={[]}>
      <AccordionItem className="w-full border-none">
        <AccordionButton
          className={`flex justify-between px-2 rounded-lg ${
            i !== 5 ? 'bg-sky-400' : 'bg-slate-500'
          } hover:shadow-lg focus:outline-none press-effect-1`}
          _hover={{}}
          _focus={{}}
        >
          <h2 className={`${i !== 5 ? 'text-sky-800' : 'text-slate-800'}`}>
            {label}
            <span>
              -{Object.values(fieldValues).filter((v) => v > 0).length}
            </span>
          </h2>
          <span className="text-white">{calcTotal(fieldValues)}</span>
        </AccordionButton>
        <AccordionPanel>
          <div className="flex flex-col mb-4 gap-y-1">
            {new Array(fields).fill(0).map((v, i) => (
              <Input
                key={i}
                i={i}
                value={fieldValues[i]}
                setValue={setFieldValues}
              />
            ))}
          </div>
          <div className="flex gap-x-2">
            <button
              className="flex-grow py-1 font-bold text-orange-500 rounded bg-slate-100 focus:ring-1 focus:outline-none press-effect-1 disabled:text-slate-300 disabled:cursor-not-allowed"
              disabled={fields === 0}
              onClick={() =>
                setFields((fields) => {
                  delete fieldValues[fields - 1];
                  return fields - 1;
                })
              }
            >
              -
            </button>
            <button
              className="flex-grow py-1 font-bold rounded bg-slate-100 text-sky-500 focus:ring-1 focus:outline-none press-effect-1"
              onClick={() => setFields((fields) => fields + 1)}
              disabled={fields > 100}
            >
              +
            </button>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
