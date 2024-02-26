import { RefObject, useRef, useState } from 'react';
import About from 'widgets/about/ui'  ;
import Avatar from 'widgets/avatar/ui';
import Cases from 'widgets/cases/ui';
import Contacts from 'widgets/contacts/ui';
import ExperienceWork from 'widgets/experienceWork/ui';
import Header from 'widgets/header/ui';
import Skills from 'features/skills/ui';

function MainPage() {
  const [blockRef] = useState([useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]);

  function handleClick(ref: RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    // ref.current?.scrollIntoView({ behavior: 'smooth', block: "start", inline: 'center' });
  }

  function scrollTo(num: number) {
    if (num < blockRef.length) {
      handleClick(blockRef[num]);
    }
  }

  return (
    <main>
      <Header scrollTo={scrollTo}/>
      <Avatar />
      <Skills ref={blockRef[0]}/>
      <Cases ref={blockRef[1]}/>
      <ExperienceWork ref={blockRef[2]}/>
      <About ref={blockRef[3]}/>
      <Contacts ref={blockRef[4]}/>
    </main>
  );
}

export default MainPage;
