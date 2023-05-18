import "./App.css";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import { BlogHome } from "./BlogHome";
import { BlogDetails } from "./BlogDetails";
import { NotFound } from "./NotFound";
import { BlogHeader } from "./BlogHeader";

const data = {
  title: "MyBlogs",
  name: "Amos Mwongela",
  date: new Date().toDateString(),
  blogs: [
    {
      author: "John Doe",
      blogName: "The Daily Buzz",
      description:
        "Get your daily dose of news, opinions, and hot takes on current events from around the world.",
    },
    {
      author: "Jane Smith",
      blogName: "Travel Tales",
      description:
        "Join me on my adventures as I explore new destinations and share tips and tricks for making the most of your travels.",
    },
    {
      author: "David Lee",
      blogName: "Fitness Fanatic",
      description:
        "Discover the latest trends in fitness and health, and get tips and advice for staying in shape and living your best life.",
    },
    {
      author: "Samantha Jones",
      blogName: "Tech Talk",
      description:
        "Stay up-to-date on the latest technology news and trends, with insights and analysis from industry experts and thought leaders.",
    },
    {
      author: "Michael Johnson",
      blogName: "Foodie Finds",
      description:
        "Explore the world of cuisine with me, as I share recipes, restaurant reviews, and culinary adventures from around the globe.",
    },
  ],
};

function App() {
  return (
    <div className="body">
      <BlogHeader title={data.title}/>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<BlogHome data={data}/>}></Route>
          <Route  path="/blogs/details" element={<BlogDetails/>}></Route>
          <Route  path="*" element={<NotFound/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
