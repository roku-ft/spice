import { useRef, useEffect } from "react";

interface IUseResizeObserver {
   targetRef: React.RefObject<HTMLElement>;
   callback: (entry: Element) => void;
   debounce: number;
   dependencies?: any[];
}

/**
 * @param callback (entry: Element) => void;
 */
export const useResizeObserver = ({
   targetRef,
   callback,
   debounce,
   dependencies = [],
}: IUseResizeObserver) => {
   /*===============================================
	set resizeObserver, but prevent when first rendering
	===============================================*/
   const timeoutID = useRef<NodeJS.Timeout | number>(0);
   const isFirst = useRef(true);
   useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
         clearTimeout(timeoutID.current);
         timeoutID.current = setTimeout(() => {
            if (isFirst.current) {
               isFirst.current = false;
               return;
            }
            callback(entries[0].target);
         }, debounce);
      });
      const targetElm = targetRef.current;
      if (!targetElm) {
         return;
      }
      resizeObserver.observe(targetElm);
      return () => {
         resizeObserver.unobserve(targetElm);
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);
};
