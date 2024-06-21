import Header from "./components/header/header";
import Tasks from "./components/tasks/tasks";
import './static/css/reset.css'
import './static/css/header.css'
import './static/css/main.css'
import './static/css/filters.css'
import './static/css/tasks.css'
import './static/css/add-task.css'

function App() {
  return (
    <div>
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
