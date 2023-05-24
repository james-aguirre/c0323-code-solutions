import { useState } from 'react';

export default function Accordian({ topics }) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div>
      {/* {topics.map((topic) => {
        return (
          <Panel
          key={topic.id}
          title={topic.name}
          content={topic.txt}
          isActive={activeIndex === topic.id}
          onShow= {() => setActiveIndex(topic.id)}
      )} */}
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
    </div>
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
