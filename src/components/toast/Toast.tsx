import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { ImCross } from 'react-icons/im';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import { colors } from '@/config/colors';
import { hideToast } from '@/reducers/ui/ui.reducer';

import useStyle from './Toast.styles';

export default function Toast() {
  const { classes } = useStyle();
  const { toast } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, toast.duration || 3000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  return (
    <div className="absolute top-0 z-10 w-full p-4">
      <AnimatePresence>
        <motion.div
          className={`flex items-center justify-between rounded p-4 ${classes.toastContainer}`}
          style={{
            y: -150,
            borderLeftColor: colors[(toast.type as 'success' | 'info' | 'error') || 'error'].main,
            color: colors[(toast.type as 'success' | 'info' | 'error') || 'error'].dark,
          }}
          animate={{ y: toast.show ? 0 : -150 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <p className={classes.toastMessage}>{toast.message}</p>
          </div>
          <div>
            <ImCross />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
