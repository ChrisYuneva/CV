import Avatar from 'widgets/avatar/ui';
import Cases from 'widgets/cases/ui';
import Header from 'widgets/header/ui';
import Skills from 'features/skills/ui';

function MainPage() {
  return (
    <main>
      <Header />
      <Avatar />
      <Skills />
      <Cases />
    </main>
  );
}

export default MainPage;
