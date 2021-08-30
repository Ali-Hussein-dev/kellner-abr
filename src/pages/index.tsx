/* eslint-disable react/no-children-prop */
import * as React from 'react';
import { ListsContainer } from '@/components/index';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

//=======================
export const Pair: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex justify-between w-full mb-2">
      <span>{label} </span>
      <span>{value.toFixed(2)} </span>
    </div>
  );
};
//=======================
const HomePage: React.FC = () => {
  const [umsatz, setUmsatz] = React.useState<number | undefined>();
  const [totalCredit, setTotalCredit] = React.useState(0);
  return (
    <main className="flex flex-col items-center w-full min-h-screen px-2 py-3 text-blueGray-500">
      <title>Gastro-Abr</title>
      <section className="flex flex-col w-full mb-8 md:w-[650px] gap-y-2">
        <ListsContainer
          totalCredit={totalCredit}
          setTotalCredit={setTotalCredit}
        />
      </section>
      <section className="md:w-[650px] w-full">
        <InputGroup className="mb-4 border rounded focus-within:ring-blue-400 focus-within:ring-2 border-blueGray-200">
          <div className="grid w-3/12 h-10 font-semibold bg-blueGray-100 place-items-center">
            Umsatz
          </div>
          <input
            placeholder="0"
            type="number"
            value={umsatz}
            onChange={(e) => setUmsatz(+e.target.value ?? 0)}
            className="w-full h-10 border-none rounded-r focus:outline-none focus:ring-0"
          />
        </InputGroup>
        <div className="px-4 py-2 mb-8 rounded-lg bg-blueGray-200">
          <Pair label="Bargeld " value={(umsatz ?? 0) - totalCredit} />
          <Pair
            label="Bargeld + K "
            value={
              (umsatz ?? 0) - totalCredit + Math.ceil((umsatz ?? 0) * 0.015)
            }
          />
          <Pair
            label="Küche Tips 1.5%"
            value={Math.ceil((umsatz ?? 0) * 0.015)}
          />
          <Pair
            label="Runner Tips 0.5%"
            value={Math.ceil((umsatz ?? 0) * 0.005)}
          />
        </div>
      </section>
    </main>
  );
};
export default HomePage;
