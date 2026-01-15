const Blogs = [
  {
    "id": 1,
    "title": "Understanding JavaScript Closures",
    "desc": "A simple guide to understanding closures in JavaScript with real-world intuition.",
    "coverImg": "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    "content": "JavaScript closures are one of the most powerful yet confusing concepts for beginners. A closure is created when a function remembers variables from its outer scope even after the outer function has finished executing. This allows developers to create private variables, maintain state, and build cleaner logic. Closures are commonly used in event handlers, callbacks, and functional programming patterns. For example, when a function returns another function that uses variables defined outside it, those variables stay alive in memory. Understanding closures helps you write better asynchronous code, avoid global variables, and build more secure applications. Once mastered, closures make JavaScript feel predictable and expressive.",
    "authorName": "John Doe",
    "authorImg": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    "authorDesc": "Frontend Developer"
  },
  {
    "id": 2,
    "title": "CSS Flexbox Made Easy",
    "desc": "Learn how Flexbox simplifies layout building in modern web development.",
    "coverImg": "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    "content": "Flexbox is a layout model in CSS designed to make alignment and spacing easier. Instead of using floats or positioning hacks, Flexbox allows elements to adjust automatically based on screen size. It works in one direction at a time, either row or column, making it ideal for navigation bars, cards, and centering content. Properties like justify-content, align-items, and gap give precise control over layouts. Flexbox also improves responsiveness without media queries in many cases. Once you understand the main axis and cross axis concept, building complex layouts becomes faster and more intuitive.",
    "authorName": "Jane Smith",
    "authorImg": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    "authorDesc": "UI Engineer"
  },
  {
    "id": 3,
    "title": "Why React Uses Virtual DOM",
    "desc": "Explore how the Virtual DOM improves performance in React applications.",
    "coverImg": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    "content": "React uses a Virtual DOM to optimize UI updates and improve performance. Instead of updating the real DOM directly, React first updates a lightweight copy called the Virtual DOM. It then compares the previous and new versions using a process called reconciliation. Only the minimal required changes are applied to the real DOM. This reduces expensive DOM operations and makes applications faster. The Virtual DOM also simplifies state-driven UI updates, allowing developers to focus on logic instead of manual DOM manipulation. This approach is one of the reasons React scales well for large applications.",
    "authorName": "Alex Brown",
    "authorImg": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "authorDesc": "React Developer"
  },
  {
    "id": 4,
    "title": "Introduction to REST APIs",
    "desc": "Understand how REST APIs enable communication between frontend and backend.",
    "coverImg": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    "content": "REST APIs allow different systems to communicate over the internet using standard HTTP methods. Common methods include GET for fetching data, POST for creating data, PUT for updating, and DELETE for removing resources. REST follows principles like statelessness, uniform interfaces, and resource-based URLs. APIs usually exchange data in JSON format, making them easy to integrate with frontend applications. Understanding REST APIs is essential for full stack development, as they form the bridge between user interfaces and databases. Well-designed APIs improve scalability, maintainability, and developer experience.",
    "authorName": "Emily Clark",
    "authorImg": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    "authorDesc": "Backend Developer"
  },
  {
    "id": 5,
    "title": "Git Basics Every Developer Must Know",
    "desc": "A beginner-friendly overview of essential Git commands and concepts.",
    "coverImg": "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    "content": "Git is a version control system that helps developers track changes in code. It allows teams to collaborate without overwriting each other’s work. Basic concepts include repositories, commits, branches, and merges. Commands like git clone, git add, git commit, and git push are used daily. Branching allows developers to work on features independently before merging them into the main codebase. Learning Git early prevents code loss, improves collaboration, and builds confidence while working on real-world projects. It is an essential skill for every software developer.",
    "authorName": "Rahul Mehta",
    "authorImg": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    "authorDesc": "Software Engineer"
  },
  {
    "id": 6,
    "title": "What is Asynchronous JavaScript?",
    "desc": "Learn how JavaScript handles async tasks like API calls and timers.",
    "coverImg": "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    "content": "Asynchronous JavaScript allows long-running tasks to execute without blocking the main thread. Operations like API requests, timers, and file loading run asynchronously. JavaScript achieves this using callbacks, promises, and async-await syntax. Without async behavior, the UI would freeze while waiting for responses. Promises provide a cleaner way to handle async results, while async-await makes code look synchronous and readable. Understanding asynchronous JavaScript is critical for building responsive applications and handling real-time data efficiently.",
    "authorName": "Neha Sharma",
    "authorImg": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    "authorDesc": "JavaScript Developer"
  },
  {
    "id": 7,
    "title": "Getting Started with MongoDB",
    "desc": "An overview of MongoDB and why it is popular in modern applications.",
    "coverImg": "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    "content": "MongoDB is a NoSQL database that stores data in flexible JSON-like documents. Unlike relational databases, it does not require fixed schemas, making it ideal for evolving applications. MongoDB scales easily and handles large amounts of unstructured data efficiently. It is commonly used with Node.js and Express in MERN stack projects. Collections and documents replace tables and rows, simplifying data modeling. MongoDB is widely adopted due to its flexibility, performance, and ease of integration with modern JavaScript applications.",
    "authorName": "Amit Verma",
    "authorImg": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    "authorDesc": "Full Stack Developer"
  },
  {
    "id": 8,
    "title": "Importance of Clean Code",
    "desc": "Why writing clean and readable code matters in the long run.",
    "coverImg": "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    "content": "Clean code is easy to read, understand, and maintain. It uses meaningful variable names, consistent formatting, and simple logic. Writing clean code reduces bugs and makes collaboration smoother. Future developers, including yourself, will spend more time reading code than writing it. Practices like small functions, comments where necessary, and avoiding duplication improve code quality. Clean code also helps during debugging and scaling applications. Investing time in writing clean code saves effort and frustration in the long term.",
    "authorName": "Sarah Lee",
    "authorImg": "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg",
    "authorDesc": "Tech Lead"
  },
  {
    "id": 9,
    "title": "Basics of Web Accessibility",
    "desc": "Learn how to make websites usable for everyone.",
    "coverImg": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    "content": "Web accessibility ensures that websites can be used by people with disabilities. This includes proper semantic HTML, keyboard navigation, screen reader support, and sufficient color contrast. Attributes like aria-label improve accessibility for assistive technologies. Accessible websites are not only inclusive but also better for SEO and usability. Many accessibility improvements are simple to implement yet highly impactful. By following accessibility best practices, developers create products that reach a wider audience and comply with global standards.",
    "authorName": "Daniel Wilson",
    "authorImg": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "authorDesc": "Accessibility Advocate"
  },
  {
    "id": 10,
    "title": "How to Stay Consistent While Learning to Code",
    "desc": "Practical tips to build consistency in your coding journey.",
    "coverImg": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    "content": "Consistency is more important than intensity when learning to code. Studying a little every day builds habits and long-term understanding. Setting small achievable goals prevents burnout and boosts confidence. Practicing through projects reinforces concepts better than passive learning. Tracking progress and revisiting old topics strengthens memory. Taking breaks and avoiding comparison with others helps maintain motivation. With discipline and patience, consistent effort leads to noticeable improvement and mastery over time.",
    "authorName": "Karan Patel",
    "authorImg": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    "authorDesc": "Coding Mentor"
  }
]

export default Blogs;
