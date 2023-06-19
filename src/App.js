import { Routes, Route } from 'react-router-dom';

import About from './components/pages/About/About';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import NotFound from './components/pages/NotFound/NotFound';
import SinglePost from './components/features/SinglePost/SinglePost';
import Home from './components/pages/Home/Home';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <main>
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Container>
    </main>
  );
};
export default App;
