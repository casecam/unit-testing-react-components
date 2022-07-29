import { Footer, Header, Main } from './views';

function App() {
  return (
    <div className={app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

const app = `
  flex
  flex-col
  justify-center
`