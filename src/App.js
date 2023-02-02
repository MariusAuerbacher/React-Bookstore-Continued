import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import books from './books/history.json'
import BooksList from './components/BookList';




function App() {

  return (
   <div>
      <MyNav/>
      <Welcome/>
      <BooksList books={books}/>
      <Footer/>
   </div>
  );
}

export default App;
