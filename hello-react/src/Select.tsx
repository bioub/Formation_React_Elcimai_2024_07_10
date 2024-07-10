import './Select.css';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

type Props = {
  items: string[];
  value: string;
  onValueChange(val: string): void;
};

const Select = forwardRef(function Select({ items, value, onValueChange }: Props, ref) {
  const [showMenu, setShowMenu] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    openMenu() {
      setShowMenu(true);
    }
  }))

  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (!divRef.current?.contains(event.target as HTMLElement)) {
        setShowMenu(false);
      }
    }, { capture: true })
  }, []);

  return (
    <div ref={divRef} className="Select" onClick={() => setShowMenu(!showMenu)}>
      <div className="selected">{value}</div>
      {showMenu && (
        <div className="menu">
          {items.map((item) => (
            <div
              key={item}
              className="item"
              onClick={() => onValueChange(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
})

export default Select;
