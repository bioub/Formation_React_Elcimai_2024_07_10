import classNames from 'classnames';
import styles from './Select.module.css';
import { forwardRef, ReactNode, useEffect, useImperativeHandle, useRef, useState } from 'react';

type Props = {
  items: string[];
  value: string;
  onValueChange(val: string): void;
  renderItem?(val: string): ReactNode;
};

export type SelectRefApi = {
  openMenu(): void;
}

const Select = forwardRef<SelectRefApi, Props>(function Select({ items, value, onValueChange, renderItem }: Props, ref) {
  const [showMenu, setShowMenu] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    openMenu() {
      setShowMenu(true);
    }
  }))

  useEffect(() => {
    const callback = (event: MouseEvent) => {
      if (!divRef.current?.contains(event.target as HTMLElement)) {
        setShowMenu(false);
      }
    };
    window.addEventListener('click', callback, { capture: true })
    return () => {
      window.removeEventListener('click', callback, { capture: true })
    }
  }, []);

  return (
    <div ref={divRef} className="Select" onClick={() => setShowMenu(!showMenu)}>
      <div className={styles.selected}>{value}</div>
      {showMenu && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div
              key={item}
              className={classNames(styles.item, { [styles.active]: item === value })}
              onClick={() => onValueChange(item)}
            >
              {renderItem ? renderItem(item) : item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
})

export default Select;
