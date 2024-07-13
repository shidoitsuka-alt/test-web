import * as React from 'react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import { setTheme } from '@/reducers/ui/ui.reducer';

/**
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const HomePage: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.ui);

  const change = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
    console.log(theme);
  };

  React.useEffect(() => {
    setMode(theme);
  }, [theme]);

  return (
    <>
      <section className="bg-white">
        <div className="layout relative flex py-12 text-center">
          <h1 className="mt-4">Hello!</h1>
          <button onClick={change}>change from {mode}</button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
