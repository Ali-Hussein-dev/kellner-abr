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
  const [fieldValues, setFieldValues] = React.useState({ 0: 0 });
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
    <Accordion allowMultiple allowToggle>
      <AccordionItem className="w-full">
        <AccordionButton
          className="flex justify-between px-2 rounded bg-lightBlue-400 hover:bg-lightBlue-500 focus:outline-none text-blueGray-700"
          _hover={{}}
          _focus={{}}
        >
          <h2 className="text-lightBlue-700">{label} </h2>
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
              className="flex-grow py-1 font-bold text-orange-500 rounded bg-blueGray-100 focus:ring-1 focus:outline-none press-effect-1"
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
              className="flex-grow py-1 font-bold rounded bg-blueGray-100 text-lightBlue-500 focus:ring-1 focus:outline-none press-effect-1"
              onClick={() => setFields((fields) => fields + 1)}
            >
              +
            </button>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};