import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot, MeshWobbleMaterial, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import "./SkinCare.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const productVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  hover: { 
    scale: 1.05, 
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 }
  }
};

const SkinCare = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const medicalProducts = [
    {
      id: 1,
      name: "Hydrating Retinol Serum",
      description: "Clinical-grade retinol formula that reduces fine lines while hydrating skin.",
      price: "$42.99",
      category: "Anti-Aging",
      image: "https://cdn.shopify.com/s/files/1/0552/1902/8026/files/Hyaluronic_Acid_Retinol_Can_You_Use_Them_Together.png?v=1739276001"
    },
    {
      id: 2,
      name: "Vitamin C Brightening Complex",
      description: "Medical-grade vitamin C to fade dark spots and improve skin radiance.",
      price: "$38.50",
      category: "Brightening",
      image: "https://avarelle.com/cdn/shop/files/vitaminc_banner-2.jpg?v=1697736396&width=1464"
    },
    {
      id: 3,
      name: "Hyaluronic Acid Intensive Moisturizer",
      description: "Dermatologist-formulated moisturizer with 3 types of hyaluronic acid.",
      price: "$45.00",
      category: "Hydration",
      image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c2322b47-cefc-4f7c-8dc0-0ffce9ed762a.__CR0,0,970,300_PT0_SX970_V1___.jpg"
    },
    {
      id: 4,
      name: "Niacinamide Pore Refining Solution",
      description: "Clinical strength niacinamide to reduce pores and regulate oil production.",
      price: "$36.75",
      category: "Pore Care",
      image: "https://st-images.honasa.in/niacinamide_mobile_r35_899_52359bb0da.jpg?format=auto&width=600&height=326&qualilty=auto"
    },
    {
      id: 5,
      name: "AHA/BHA Exfoliating Treatment",
      description: "Medical-grade acid complex that gently exfoliates for smoother skin.",
      price: "$48.99",
      category: "Exfoliation",
      image: "https://i0.wp.com/singaporebeautyproducts.com/wp-content/uploads/2015/01/Murad-AHA-BHA-Exfoliating-Cleanser.jpg?ssl=1"
    },
    {
      id: 6,
      name: "Peptide Firming Eye Cream",
      description: "Ophthalmologist-tested eye cream with peptides for firming and brightening.",
      price: "$52.50",
      category: "Eye Care",
      image: "https://images.squarespace-cdn.com/content/v1/5c641b18da50d324fa8e85f0/1da50729-f181-4680-8b1c-c8c45d8cc72e/10+anti-ageing+eye+creams+that+are+vegan%2C+for+every+budget.png"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(medicalProducts.map(product => product.category))];
  
  const filteredProducts = activeCategory === "All" 
    ? medicalProducts 
    : medicalProducts.filter(product => product.category === activeCategory);

  return (
    <div className="skin-care-container bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section with Enhanced 3D Background */}
      <header className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        <Canvas className="canvas absolute inset-0">
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <TorusKnot args={[1, 0.4, 100, 16]} scale={2.5} position={[0, 0, 0]}>
              <MeshWobbleMaterial 
                color="#FF6F61" 
                factor={0.6} 
                speed={1} 
                metalness={0.1}
                roughness={0.5}
              />
            </TorusKnot>
          </Float>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        <div className="hero-content relative z-10 text-center px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-lg mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-extrabold mb-4 text-pink-800 tracking-tight"
            >
              Radiant Skin Care 🌿
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 mb-8"
            >
              Your ultimate guide to healthy, glowing, and vibrant skin
            </motion.p>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:bg-pink-700 transition duration-300"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-pink-50 to-transparent"></div>
      </header>

      {/* Why Skin Care Matters */}
      <motion.section 
        className="section py-20 px-6 max-w-6xl mx-auto"
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-800">
          🌟 Why Skin Care Matters
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="text-4xl mb-4 text-pink-600">🛡️</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Protection</h3>
            <p className="text-gray-600">Your skin is the first line of defense against environmental threats. Proper care strengthens this barrier.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="text-4xl mb-4 text-pink-600">⏳</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Prevention</h3>
            <p className="text-gray-600">Regular skin care prevents premature aging, sun damage, and various skin conditions before they develop.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="text-4xl mb-4 text-pink-600">✨</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Confidence</h3>
            <p className="text-gray-600">Healthy skin boosts self-esteem and confidence, improving your overall mental wellbeing.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skin Care Tips with Enhanced Animation */}
      <motion.section 
        className="tips-section py-20 px-6 bg-pink-50"
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-800"
        >
          ✨ Essential Skin Care Tips
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "💦 Stay Hydrated", desc: "Drink 8 glasses of water daily to maintain skin elasticity and moisture." },
            { title: "🧴 Use Sunscreen", desc: "Apply SPF 30+ daily, even on cloudy days, to prevent premature aging." },
            { title: "🥗 Eat Healthy", desc: "Consume antioxidant-rich foods like berries, leafy greens, and nuts." },
            { title: "🛌 Quality Sleep", desc: "Get 7-9 hours of sleep to allow your skin's natural repair processes." },
            { title: "🧼 Gentle Cleansing", desc: "Use pH-balanced cleansers that don't strip natural oils." },
            { title: "🔄 Regular Exfoliation", desc: "Exfoliate 1-2 times weekly to remove dead skin cells." },
            { title: "😌 Stress Management", desc: "Practice meditation or yoga to reduce stress-related breakouts." },
            { title: "👩‍⚕️ See a Dermatologist", desc: "Schedule annual skin checks for professional assessment." }
          ].map((tip, index) => (
            <motion.div 
              key={index} 
              className="tip-card bg-white p-6 rounded-xl shadow-md"
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-pink-700">{tip.title}</h3>
              <p className="text-gray-600">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Medical Products Section */}
      <motion.section 
        className="products-section py-20 px-6 max-w-6xl mx-auto"
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-pink-800"
        >
          💊 Medical-Grade Products
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Dermatologist-recommended formulations for targeted skin concerns
        </motion.p>

        {/* Category Filter */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                activeCategory === category 
                  ? "bg-pink-600 text-white" 
                  : "bg-pink-100 text-pink-800 hover:bg-pink-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              className="product-card bg-white rounded-2xl overflow-hidden shadow-md"
              variants={productVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-3 right-3 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-pink-700">{product.price}</span>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="testimonials-section py-20 px-6 bg-gradient-to-br from-pink-100 to-white"
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-800">
            🌟 Customer Results
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                text: "The medical-grade products transformed my skin within weeks. My dermatologist is amazed at the improvement!",
                stars: 5
              },
              {
                name: "Michael T.",
                text: "After struggling with acne for years, this regimen finally gave me clear skin. The retinol serum is a game-changer.",
                stars: 5
              },
              {
                name: "Emma L.",
                text: "At 45, people think I'm in my early 30s! The peptide eye cream and vitamin C complex work wonders for anti-aging.",
                stars: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-pink-700">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Call to Action */}
      <motion.section 
        className="cta-section py-24 px-6 text-center bg-pink-700 text-white relative overflow-hidden"
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-600 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-800 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            🌼 Transform Your Skin Health Today
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-10 opacity-90"
          >
            Join thousands of satisfied customers who've discovered the science-backed path to radiant skin. Start your personalized skincare journey now!
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-700 py-3 px-8 rounded-full font-bold shadow-lg hover:bg-pink-50 transition duration-300"
            >
              Shop Products
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-bold hover:bg-white hover:bg-opacity-10 transition duration-300"
            >
              Free Skin Assessment
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Radiant Skin Care</h3>
            <p className="text-gray-300">Providing medical-grade skin solutions since 2010.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Products", "Skin Types", "Our Experts", "Blog"].map((item, i) => (
                <li key={i}><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQs", "Contact Us", "Shipping", "Returns"].map((item, i) => (
                <li key={i}><a href="#" className="text-gray-300 hover:text-pink-400 transition duration-300">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-4">Get skin care tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-r-lg transition duration-300">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Radiant Skin Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SkinCare;