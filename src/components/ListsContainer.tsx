import * as React from 'react';
import { InputList } from '@/components/index';
import { calcTotal } from 'src/utils';

interface ListsContainerProps {
  totalCredit?: number;
  setTotalCredit: (prvState: number) => void;
}

//=======================
export const ListsContainer: React.FC<ListsContainerProps> = ({
  setTotalCredit,
}) => {
  //--------------------------------------hooks
  const [total, setTotal] = React.useState({ 0: 0 });
  const [onlyCreditTotal, setOnlyCreditTotal] = React.useState(total);
  React.useEffect(() => {
    setTotalCredit(calcTotal(total));
    setOnlyCreditTotal(() => {
      // set Auslagern key to zero
      return { ...total, 5: 0 };
    });
  }, [total]);
  //======================================return
  return (
    <div className="flex flex-col gap-y-3">
      {[
        { label: 'Giro', inputFieldsAmount: 18 },
        { label: 'MasterCard', inputFieldsAmount: 5 },
        { label: 'VisaCard', inputFieldsAmount: 5 },
        { label: 'AmericanExpress', inputFieldsAmount: 1 },
        { label: 'Sonstiges', inputFieldsAmount: 3 },
        { label: 'Auslagen', inputFieldsAmount: 1 },
      ].map((o, i) => {
        return (
          <InputList
            key={i}
            total={total}
            label={o.label}
            inputFieldsAmount={o.inputFieldsAmount}
            i={i}
            setTotal={setTotal}
          />
        );
      })}
      <h2 className="py-1 pl-4 font-semibold text-orange-800 bg-slate-200">
        Gesamt ohne Auslagen: {calcTotal(onlyCreditTotal).toFixed(2)}
      </h2>
    </div>
  );
};
