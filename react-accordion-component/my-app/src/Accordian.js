import { useState } from 'react';

export default function Accordian({ topics }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        content={topics[0].txt}
        title={topics[0].name}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}></Panel>
      <Panel
        content={topics[1].txt}
        title={topics[1].name}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}></Panel>
      <Panel
        content={topics[2].txt}
        title={topics[2].name}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}></Panel>
    </>
  );
}

function Panel({ title, content, isActive, onShow }) {
  return (
    <section className="panel">
      <div onClick={onShow}>
        <h3>{title}</h3>
        {isActive ? <p>{content}</p> : <p></p>}
      </div>
    </section>
  );
}
