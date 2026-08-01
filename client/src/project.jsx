import library from "./assets/library.webp";
import todo from "./assets/todo.webp";
import shopping from "./assets/shopping.webp";

export default function Project() {
    return (
    <div>
        <h1>Projects</h1>
     <div class="flexbox">
        <div class="card">
            <img src={library} alt="Project 1" style={{ width: "100%" }} />
            <div class="container">
                <h3>Online Library Management System</h3>
                <p>I developed a web-based library management system that allows users to log available, borrowed, and overdue books.</p>
            </div>
        </div>
        <div class="card">
            <img src={todo} alt="Project 2" style={{ width: "100%" }} />
            <div class="container">
                <h3>Task Board</h3>
                <p>I developed a web-based task board system that allows users to create tasks and update their status.</p>
            </div>
        </div>
        <div class="card">
            <img src={shopping} alt="Project 3" style={{ width: "100%" }} />
            <div class="container">
                <h3>Online Shopping List</h3>
                <p>I developed a web-based shopping list application that allows users to create and manage their shopping lists.</p>
            </div>
        </div>
     </div>
    </div>);
}