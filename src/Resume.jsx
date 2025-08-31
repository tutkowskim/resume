import Header from './Header';
import Experience from './Experience';
import Eduction from './Education';
import Skills from './Skills';
import Summary from './Summary';

function Resume() {
  return (
    <article className="resume">
      <Header />
      <div className="resume-content">
        <section className="main-content">
          <Summary />
          <Experience />
          <Skills />
          <Eduction />
        </section>
      </div>
    </article>
  )
}

export default Resume;
