import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter, Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      }
    ]
  }

]);

function App() {
  return (
    <Provider store={store}>
      <div >
        <BrowserRouter>
          <Header />
          {/* <Routes>
            <Route exact path="/" element={<MainContainer />} />
            <Route exact path="/watch" element={<WatchPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes> */}
        </BrowserRouter>

        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;