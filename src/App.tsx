import { Footer, Header, Main } from './views';

function App() {
  return (
    <div className={app}>
      <Header />
      <div className={wrapper}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

const app = `
  min-h-screen
  bg-gray-100
`

const wrapper = `
  flex
  justify-center
`
