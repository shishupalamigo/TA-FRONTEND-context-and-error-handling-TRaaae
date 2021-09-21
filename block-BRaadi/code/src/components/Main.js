import Location from './Location';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import ErrorBoundary from './ErrorBoundry';

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ErrorBoundary render={() => <h2>Something went wrong! Reload the page</h2>}>
          <SectionOne />
        </ErrorBoundary>
        <ErrorBoundary render={() => <h2>An Error Occured!</h2>}>
          <SectionTwo />
        </ErrorBoundary>
        <ErrorBoundary render={() => <h2>Something went wrong!</h2>}>
          <Location />
        </ErrorBoundary>
      </div>
    </section>
  );
}

export default Main;
