// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header background opacity on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const scrollTop = window.pageYOffset;
  
  if (scrollTop > 100) {
    header.style.background = 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,0,0,0.85))';
  } else {
    header.style.background = 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))';
  }
});

// Category navigation function
function navigateToCategory(category) {
  // Create category pages dynamically
  const categoryPages = {
    'birthday-cakes': {
      title: 'Birthday Cakes',
      description: 'Celebrate every birthday with our delicious and beautifully designed birthday cakes.',
      products: [
        { name: 'Chocolate Birthday Cake', price: '₹499', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/BhPQf2DexG.png' },
        { name: 'Vanilla Birthday Cake', price: '₹549', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/BhPQf2DexG.png' },
        { name: 'Strawberry Birthday Cake', price: '₹599', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/BhPQf2DexG.png' }
      ]
    },
    'anniversary-cakes': {
      title: 'Anniversary Cakes',
      description: 'Celebrate your special moments with our romantic anniversary cakes.',
      products: [
        { name: 'Red Velvet Anniversary Cake', price: '₹699', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Av44Gw7D91.png' },
        { name: 'Heart Shaped Anniversary Cake', price: '₹799', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Av44Gw7D91.png' },
        { name: 'Photo Anniversary Cake', price: '₹899', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/Av44Gw7D91.png' }
      ]
    },
    'wedding-cakes': {
      title: 'Wedding Cakes',
      description: 'Make your special day even more memorable with our elegant wedding cakes.',
      products: [
        { name: 'Multi-tier Wedding Cake', price: '₹2999', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/k1Z6TuzRPo.png' },
        { name: 'Floral Wedding Cake', price: '₹3499', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/k1Z6TuzRPo.png' },
        { name: 'Classic White Wedding Cake', price: '₹2799', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/k1Z6TuzRPo.png' }
      ]
    },
    'kids-special': {
      title: 'Kids Special',
      description: 'Fun and colorful cakes that will make every child smile.',
      products: [
        { name: 'Cartoon Character Cake', price: '₹799', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/tnXdQyvJbX.png' },
        { name: 'Rainbow Cake', price: '₹699', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/tnXdQyvJbX.png' },
        { name: 'Unicorn Cake', price: '₹899', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/tnXdQyvJbX.png' }
      ]
    },
    'premium-cakes': {
      title: 'Premium Cakes',
      description: 'Luxurious cakes made with the finest ingredients for special occasions.',
      products: [
        { name: 'Gold Leaf Cake', price: '₹1999', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/QRcFRkSSEA.png' },
        { name: 'Truffle Premium Cake', price: '₹1799', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/QRcFRkSSEA.png' },
        { name: 'Designer Premium Cake', price: '₹2199', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/QRcFRkSSEA.png' }
      ]
    },
    'eggless-sugarless': {
      title: 'Eggless & Sugarless',
      description: 'Healthy and delicious cakes for those with dietary restrictions.',
      products: [
        { name: 'Eggless Chocolate Cake', price: '₹649', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/LWVFGh2hSy.png' },
        { name: 'Sugar-free Vanilla Cake', price: '₹699', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/LWVFGh2hSy.png' },
        { name: 'Vegan Fruit Cake', price: '₹749', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/LWVFGh2hSy.png' }
      ]
    },
    'french-cakes': {
      title: 'French Cakes',
      description: 'Authentic French pastries and cakes with traditional flavors.',
      products: [
        { name: 'French Opera Cake', price: '₹1299', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/1yo0WnpesS.png' },
        { name: 'Mille-feuille', price: '₹999', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/1yo0WnpesS.png' },
        { name: 'French Macarons Tower', price: '₹1499', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/1yo0WnpesS.png' }
      ]
    },
    'rolls-jars': {
      title: 'Rolls, Jars Specials',
      description: 'Individual treats perfect for personal indulgence or gifts.',
      products: [
        { name: 'Chocolate Roll', price: '₹299', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/we1am20KFy.png' },
        { name: 'Tiramisu Jar', price: '₹199', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/we1am20KFy.png' },
        { name: 'Fruit Trifle Jar', price: '₹249', image: 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-19/we1am20KFy.png' }
      ]
    }
  };

  const categoryData = categoryPages[category];
  if (categoryData) {
    // Create and show category page
    createCategoryPage(categoryData);
  }
}

// Create category page dynamically
function createCategoryPage(categoryData) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'category-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;

  // Create category page content
  const categoryPage = document.createElement('div');
  categoryPage.className = 'category-page';
  categoryPage.style.cssText = `
    background: white;
    border-radius: 20px;
    padding: 40px;
    max-width: 1000px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
  `;

  categoryPage.innerHTML = `
    <button class="close-btn" style="
      position: absolute;
      top: 20px;
      right: 20px;
      background: #D20000;
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    ">&times;</button>
    
    <h2 style="
      font-family: 'Marck Script', cursive;
      font-size: 48px;
      color: #D20000;
      margin-bottom: 20px;
      text-align: center;
    ">${categoryData.title}</h2>
    
    <p style="
      font-family: 'Istok Web', sans-serif;
      font-size: 18px;
      color: #666;
      text-align: center;
      margin-bottom: 40px;
      line-height: 1.6;
    ">${categoryData.description}</p>
    
    <div class="products-grid" style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    ">
      ${categoryData.products.map(product => `
        <div class="product-card" style="
          background: white;
          border-radius: 15px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          text-align: center;
          transition: transform 0.3s ease;
        ">
          <img src="${product.image}" alt="${product.name}" style="
            width: 100%;
            height: 200px;
            object-fit: cover;
          ">
          <div style="padding: 20px;">
            <h3 style="
              font-family: 'Questrial', sans-serif;
              font-size: 18px;
              color: #333;
              margin-bottom: 10px;
            ">${product.name}</h3>
            <p style="
              font-family: 'Questrial', sans-serif;
              font-size: 16px;
              color: #D20000;
              font-weight: bold;
              margin-bottom: 15px;
            ">${product.price}</p>
            <button onclick="orderProduct('${product.name}')" style="
              background: #D20000;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 20px;
              font-family: 'Questrial', sans-serif;
              font-size: 14px;
              cursor: pointer;
              transition: background 0.3s ease;
            ">Order Now</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  overlay.appendChild(categoryPage);
  document.body.appendChild(overlay);

  // Close button functionality
  const closeBtn = categoryPage.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  // Add hover effects to product cards
  const productCards = categoryPage.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}

// Order product function
function orderProduct(productName) {
  alert(`Thank you for your interest in ${productName}! Please call us at +91 234567891 or fill out the contact form to place your order.`);
}

// Contact form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const number = formData.get('number');
  
  // Create mailto link with form data
  const subject = encodeURIComponent('Cake Order Inquiry from My Cakes Website');
  const body = encodeURIComponent(`Hello My Cakes Team,

I am interested in placing an order. Here are my details:

Name: ${name}
Phone Number: ${number}

Please contact me to discuss my cake requirements.

Thank you!`);
  
  const mailtoLink = `mailto:mybakesmannarkad@gmail.com?subject=${subject}&body=${body}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Show success message
  showSuccessMessage();
  
  // Reset form
  event.target.reset();
}

// Show success message
function showSuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #4CAF50;
    color: white;
    padding: 20px 40px;
    border-radius: 10px;
    font-family: 'Istok Web', sans-serif;
    font-size: 18px;
    z-index: 3000;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  `;
  successMessage.textContent = 'Thank you! Your email client will open shortly.';
  
  document.body.appendChild(successMessage);
  
  setTimeout(() => {
    document.body.removeChild(successMessage);
  }, 3000);
}

// Search functionality
document.querySelector('.search-input').addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  if (searchTerm.length > 2) {
    // Simple search implementation
    const categories = document.querySelectorAll('.category-card');
    categories.forEach(category => {
      const categoryName = category.querySelector('h3').textContent.toLowerCase();
      if (categoryName.includes(searchTerm)) {
        category.style.display = 'block';
        category.style.border = '2px solid #D20000';
      } else {
        category.style.display = 'none';
      }
    });
  } else {
    // Reset search
    const categories = document.querySelectorAll('.category-card');
    categories.forEach(category => {
      category.style.display = 'block';
      category.style.border = '1px solid #E1E1E1';
    });
  }
});

// Add loading animation
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.category-card, .feature, .about-content, .founder-content');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
