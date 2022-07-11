import { useMemo } from "react";
import { Remarkable } from "remarkable";

export const useRemarkable = () => {
  const md = useMemo(() => new Remarkable({}), []);

  const render = (markdown: string) => ({ __html: md.render(markdown) });

  return {
    render,
  };
};
