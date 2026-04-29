import './Blog.css';

function Blog() {

  const blogPosts = [
    {
      id: 1,
      title: "OOP Concepts in Java: A Simple Beginner's Guide",
      snippet: "An easy-to-understand introduction to Object-Oriented Programming (OOP) concepts in Java, perfect for those just starting out.",
      date: "Recent",
      image: "https://cdn-images-1.medium.com/max/600/1*rwOgeSscIAmXlnWZIob4Rw.png",
      link: "https://medium.com/@dinujachamodi/oop-concepts-in-java-a-simple-beginners-guide-0bf0f7819e89"
    },
    {
      id: 2,
      title: "DevOps Essentials: What Every Beginner Should Know",
      snippet: "Discover the fundamental concepts and practices of DevOps, and why bridging the gap between development and operations is crucial.",
      date: "Recent",
      image: "https://cdn-images-1.medium.com/max/996/1*0P3Bwt7TS4QXxAxx84LUeg.jpeg",
      link: "https://medium.com/@dinujachamodi/devops-essentials-what-every-beginner-should-know-f36fd48c6220"
    },
    {
      id: 3,
      title: "A Beginner's Guide to Understanding Software Licenses",
      snippet: "Learn what software licenses are, why they matter, and how to navigate the complex world of open-source and proprietary code.",
      date: "Recent",
      image: "https://cdn-images-1.medium.com/max/740/1*BwGvgo2jkJNukC7dw6jeCw.jpeg",
      link: "https://medium.com/@dinujachamodi/a-beginners-guide-to-understanding-software-licenses-what-they-are-and-why-they-matter-26a6ede76f1e"
    },
    {
      id: 4,
      title: "CIA Triad in Cyber Security",
      snippet: "Exploring Confidentiality, Integrity, and Availability,the core principles that form the foundation of any robust cybersecurity strategy.",
      date: "Recent",
      image: "https://cdn-images-1.medium.com/max/1024/1*BsLvNlEjUEfdRQXS69t9pA.jpeg",
      link: "https://medium.com/@dinujachamodi/cia-triad-in-cyber-security-8678a0a221e1"
    }
  ];

  return (
    <section id="blogs" className="blog-section">
      <div className="blog-container">
        <h2 className="section-title">My Blog</h2>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-card fade-in-up" key={post.id}>
              <div className="blog-image-container">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-snippet">{post.snippet}</p>
                <span className="blog-read-more">Read on Medium ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
