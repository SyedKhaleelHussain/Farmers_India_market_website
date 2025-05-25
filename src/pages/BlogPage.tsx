import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ChevronRight, Search } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

const BlogPage = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Essential Plant Care Tips for Beginners",
      excerpt: "Learn the basics of plant care to help your green friends thrive, even if you're just starting out.",
      content: "Plants are wonderful additions to any home, but they require proper care to thrive. In this guide, we'll cover the essential aspects of plant care for beginners, including watering, light requirements, soil selection, and common issues to watch out for...",
      author: "Priya Sharma",
      date: "June 12, 2023",
      image: "https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Plant Care",
      tags: ["beginners", "houseplants", "watering", "plant health"]
    },
    {
      id: 2,
      title: "Organic Gardening: A Sustainable Approach",
      excerpt: "Discover how organic gardening practices can benefit both your plants and the environment.",
      content: "Organic gardening is more than just avoiding synthetic chemicals; it's an approach to growing plants that works with nature rather than against it. In this comprehensive guide, we'll explore the principles of organic gardening, including soil health, natural pest control, composting, and crop rotation...",
      author: "Raj Patel",
      date: "May 28, 2023",
      image: "https://images.pexels.com/photos/6231804/pexels-photo-6231804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Sustainable Gardening",
      tags: ["organic", "sustainability", "compost", "natural pest control"]
    },
    {
      id: 3,
      title: "Natural Pest Control for Your Garden",
      excerpt: "Learn effective strategies to manage garden pests without harmful chemicals.",
      content: "Dealing with garden pests can be frustrating, but there are many natural and effective ways to keep them under control without resorting to harmful chemicals. In this article, we'll cover companion planting, beneficial insects, homemade organic sprays, and physical barriers to protect your plants...",
      author: "Meera Desai",
      date: "April 15, 2023",
      image: "https://images.pexels.com/photos/7728082/pexels-photo-7728082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Pest Control",
      tags: ["organic pest control", "beneficial insects", "companion planting", "garden health"]
    },
    {
      id: 4,
      title: "Choosing the Right Plants for Your Home and Garden",
      excerpt: "Tips for selecting plants that will thrive in your specific conditions and meet your gardening goals.",
      content: "Selecting the right plants for your space is crucial for gardening success. This guide will help you assess your growing conditions, understand plant needs, and make informed choices that match your gardening goals and lifestyle. We'll cover factors like light levels, climate considerations, soil type, and maintenance requirements...",
      author: "Amit Patel",
      date: "March 8, 2023",
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Plant Selection",
      tags: ["plant selection", "garden planning", "houseplants", "native plants"]
    }
  ];

  const categories = ["All", "Plant Care", "Sustainable Gardening", "Pest Control", "Plant Selection"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    // Filter by category
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory;
    
    // Filter by search term
    const searchMatch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#2a6a38] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-up">Our Blog</h1>
            <p className="body-lg mb-8 text-white/90 animate-fade-up animate-delay-100">
              Insights, tips, and stories from the world of gardening and plant care.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search Bar (Mobile Only) */}
              <div className="mb-8 lg:hidden">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-[#2a6a38] focus:border-[#2a6a38] outline-none transition-colors"
                  />
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              {/* Category Filter (Mobile Only) */}
              <div className="mb-8 lg:hidden">
                <label htmlFor="mobile-category" className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by Category
                </label>
                <select
                  id="mobile-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2a6a38] focus:border-[#2a6a38] outline-none transition-colors"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div className="space-y-12">
                  {filteredPosts.map(post => (
                    <article key={post.id} className="card overflow-hidden hover:shadow-lg transition-all duration-300">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-block bg-[#2a6a38]/10 text-[#2a6a38] px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-2xl font-semibold mb-3">
                          <Link to={`/blog/${post.id}`} className="hover:text-[#2a6a38] transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center mr-4">
                            <Calendar size={16} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User size={16} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="inline-flex items-center text-[#2a6a38] font-medium hover:underline"
                        >
                          Read More <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No blog posts found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search Bar */}
              <div className="hidden lg:block mb-8">
                <h3 className="text-xl font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-[#2a6a38] focus:border-[#2a6a38] outline-none transition-colors"
                  />
                  <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#1f642d]">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-[#2a6a38] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#1f642d]">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium line-clamp-2">
                          <Link to={`/blog/${post.id}`} className="hover:text-[#2a6a38] transition-colors">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1f642d]">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-black-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#629e6e]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest gardening tips, plant care advice, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#2a6a38] focus:border-[#2a6a38] outline-none"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
