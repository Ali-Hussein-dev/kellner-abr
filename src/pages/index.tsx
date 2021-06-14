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
  const [umsatz, setUmsatz] = React.useState(0);
  const [totalCredit, setTotalCredit] = React.useState(0);
  return (
    <main className="flex flex-col w-full min-h-screen px-2 py-3 text-blueGray-500">
      <title>Gastro-Abr</title>
      <section className="flex flex-col w-full mb-8 md:w-7/12 gap-y-2">
        <ListsContainer
          totalCredit={totalCredit}
          setTotalCredit={setTotalCredit}
        />
      </section>
      <InputGroup className="mb-2">
        <InputLeftAddon children="Umsatz" />
        <Input
          placeholder="0"
          type="number"
          value={umsatz}
          onChange={(e) => setUmsatz(+e.target.value)}
        />
      </InputGroup>
      <div className="px-4 pt-2 mb-8 rounded-lg bg-blueGray-200">
        <Pair
          label="Bargeld "
          value={umsatz < totalCredit ? 0 : umsatz - totalCredit}
        />
        <Pair
          label="Bargeld + K "
          value={
            (umsatz < totalCredit ? 0 : umsatz - totalCredit) +
            Math.ceil(umsatz * 0.015)
          }
        />
        <Pair label="Küche Tips 1.5%" value={Math.ceil(umsatz * 0.015)} />
        <Pair label="Runner Tips 0.5%" value={Math.ceil(umsatz * 0.005)} />
      </div>
    </main>
  );
};
export default HomePage;
