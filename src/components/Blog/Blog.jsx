import './Blog.css';

function Blog() {

  const blogPosts = [
    {
      id: 1,
      title: "OOP Concepts in Java: A Simple Beginner's Guide",
      snippet: "An easy-to-understand introduction to Object-Oriented Programming (OOP) concepts in Java, perfect for those just starting out.",
      image: "https://cdn-images-1.medium.com/max/600/1*rwOgeSscIAmXlnWZIob4Rw.png",
      link: "https://medium.com/@dinujachamodi/oop-concepts-in-java-a-simple-beginners-guide-0bf0f7819e89"
    },
    {
      id: 2,
      title: "DevOps Essentials: What Every Beginner Should Know",
      snippet: "Discover the fundamental concepts and practices of DevOps, and why bridging the gap between development and operations is crucial.",
      image: "https://cdn-images-1.medium.com/max/996/1*0P3Bwt7TS4QXxAxx84LUeg.jpeg",
      link: "https://medium.com/@dinujachamodi/devops-essentials-what-every-beginner-should-know-f36fd48c6220"
    },
    {
      id: 3,
      title: "CIA Triad in Cyber Security",
      snippet: "Exploring Confidentiality, Integrity, and Availability, the core principles that form the foundation of any robust cybersecurity strategy.",
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
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-snippet">{post.snippet}</p>
                <span className="blog-read-more">Read on Medium ↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className="blog-footer fade-in-up">
          <a 
            href="https://medium.com/@dinujachamodi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="read-more-btn"
          >
            Read More Articles on Medium
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
