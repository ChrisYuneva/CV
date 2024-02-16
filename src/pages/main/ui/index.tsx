import About from 'widgets/about/ui'  ;
import Avatar from 'widgets/avatar/ui';
import Cases from 'widgets/cases/ui';
import ExperienceWork from 'widgets/experienceWork/ui';
import Header from 'widgets/header/ui';
import Skills from 'features/skills/ui';

function MainPage() {
  return (
    <main>
      <Header />
      <Avatar />
      <Skills />
      <Cases />
      <ExperienceWork />
      <About />
    </main>
  );
}

export default MainPage;
