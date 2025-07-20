import React, { useState } from 'react';
import { 
  Truck, 
  Shield, 
  Headphones, 
  RotateCcw, 
  CreditCard, 
  Gift, 
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders over $50. Express shipping available nationwide.",
      features: ["Orders over $50", "2-3 day delivery", "Real-time tracking", "Eco-friendly packaging"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Your transactions are protected with bank-level security and encryption.",
      features: ["SSL encryption", "PCI compliant", "Multiple payment methods", "Fraud protection"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service to help you with any questions or concerns.",
      features: ["Live chat support", "Email assistance", "Phone support", "Quick response time"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days. No questions asked guarantee.",
      features: ["30-day return policy", "Free return shipping", "Quick refunds", "Exchange options"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const additionalServices = [
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Buy now, pay later options available",
      stats: "4 interest-free installments"
    },
    {
      icon: Gift,
      title: "Gift Wrapping",
      description: "Professional gift wrapping service",
      stats: "Available for all items"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Curated products from trusted brands",
      stats: "99% customer satisfaction"
    },
    {
      icon: Award,
      title: "Loyalty Program",
      description: "Earn points with every purchase",
      stats: "Up to 5% cashback"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Incredible service! My order arrived faster than expected and the customer support was amazing.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "The return process was so smooth. They made it incredibly easy to exchange my item.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      text: "Love the free shipping and the packaging is always perfect. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Premium Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Experience exceptional service that goes beyond your expectations. We're here to make your shopping journey seamless and delightful.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Trusted by 100k+ customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5+ years of excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Award-winning support</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've built our reputation on delivering exceptional service at every step of your journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards */}
          <div className="space-y-6">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'transform scale-105'
                      : 'hover:transform hover:scale-102'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    activeService === index 
                      ? 'border-indigo-500 shadow-indigo-500/20' 
                      : 'border-transparent hover:border-gray-200'
                  }`}>
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white transform transition-transform group-hover:rotate-6`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="flex items-center text-indigo-600 font-medium">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${mainServices[activeService].color} text-white mb-6`}>
              {React.createElement(mainServices[activeService].icon, { className: "w-10 h-10" })}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{mainServices[activeService].title}</h3>
            <p className="text-gray-600 text-lg mb-8">{mainServices[activeService].description}</p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h4>
              {mainServices[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Extra benefits that make the difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-6 transform transition-transform group-hover:scale-110">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-indigo-600 font-semibold text-lg">{service.stats}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust us for their shopping needs
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;