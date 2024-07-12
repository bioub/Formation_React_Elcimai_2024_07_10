import { memo, ReactNode } from 'react';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
};

function List<T>({ items, renderItem }: Readonly<Props<T>>) {
  return <>{items.map((item) => renderItem(item))}</>;
}

// export default memo(List, (prevProps, nextProps) => prevProps.items === nextProps.items);
export default memo(List);