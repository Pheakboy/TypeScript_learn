import { useState } from "react";
import {
  Check,
  X,
  Star,
  Crown,
  Shield,
  Truck,
  Headphones,
  Gift,
  ArrowRight,
  Users,
  Heart,
} from "lucide-react";
import { Plan } from "@/types/GetPriceType";
import { SavingsPlan } from "@/types/GetSavings";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Basic",
      icon: Users,
      color: "from-gray-500 to-slate-600",
      borderColor: "border-gray-200",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Perfect for casual shoppers",
      features: [
        "Free account creation",
        "Basic customer support",
        "Standard shipping rates",
        "Access to sales and discounts",
        "Order tracking",
        "Wishlist functionality",
      ],
      limitations: [
        "No premium support",
        "Standard return window",
        "No exclusive deals",
      ],
    },
    {
      name: "Premium",
      icon: Star,
      color: "from-blue-500 to-purple-600",
      borderColor: "border-blue-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      textColor: "text-gray-900",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      description: "Enhanced shopping experience",
      popular: true,
      features: [
        "Free shipping on all orders",
        "Priority customer support",
        "Extended 60-day returns",
        "Exclusive member discounts",
        "Early access to sales",
        "Premium gift wrapping",
        "Birthday rewards",
        "Monthly style guide",
      ],
      limitations: [],
    },
    {
      name: "VIP",
      icon: Crown,
      color: "from-amber-500 to-orange-600",
      borderColor: "border-amber-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      textColor: "text-gray-900",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      description: "Ultimate luxury shopping",
      features: [
        "Everything in Premium",
        "24/7 VIP support hotline",
        "Personal shopping assistant",
        "Same-day delivery (select cities)",
        "Exclusive VIP-only products",
        "Free premium gift wrapping",
        "Priority access to limited items",
        "Quarterly surprise box",
        "White-glove returns",
        "Price protection guarantee",
      ],
      limitations: [],
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "We offer a 30-day free trial for Premium and VIP plans. No credit card required to start.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, Apple Pay, and Google Pay.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. Cancel your subscription anytime with no cancellation fees or penalties.",
    },
  ];

  const getPrice = (plan: Plan): string => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return price === 0 ? "Free" : `$${price}`;
  };

  const getSavings = (plan: SavingsPlan): number | null => {
    if (plan.monthlyPrice === 0) return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.annualPrice;
    return Math.round(savings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Unlock premium features and elevate your shopping experience
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span
                className={`font-medium ${
                  !isAnnual ? "text-white" : "text-blue-200"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  isAnnual ? "bg-white" : "bg-white/30"
                }`}
              >
                <div
                  className={`absolute w-6 h-6 rounded-full bg-indigo-600 top-1 transition-transform ${
                    isAnnual
                      ? "transform translate-x-9"
                      : "transform translate-x-1"
                  }`}
                ></div>
              </button>
              <span
                className={`font-medium ${
                  isAnnual ? "text-white" : "text-blue-200"
                }`}
              >
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save up to 17%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.popular;
            const savings = getSavings(plan);

            return (
              <div
                key={index}
                className={`relative transform transition-all duration-300 ${
                  hoveredPlan === index ? "scale-105 z-10" : ""
                } ${isPopular ? "scale-105 z-10" : ""}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`${
                    plan.bgColor
                  } rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 ${
                    isPopular
                      ? plan.borderColor + " shadow-blue-500/20"
                      : plan.borderColor
                  } h-full`}
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${plan.color} text-white mb-4`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {getPrice(plan)}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-gray-600">
                          /{isAnnual ? "year" : "month"}
                        </span>
                      )}
                    </div>
                    {isAnnual && savings && (
                      <div className="text-green-600 font-medium mt-2">
                        Save ${savings}/year
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div
                        key={limitIndex}
                        className="flex items-center gap-3 opacity-60"
                      >
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                      isPopular
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                        : plan.monthlyPrice === 0
                        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        : "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800"
                    }`}
                  >
                    {plan.monthlyPrice === 0
                      ? "Get Started Free"
                      : "Start Free Trial"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Comparison */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Upgrade?
            </h2>
            <p className="text-xl text-gray-600">
              See what premium features can do for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "Save on every order with complimentary shipping",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Headphones,
                title: "Priority Support",
                description: "Get help faster with dedicated support channels",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Extended Returns",
                description: "More time to decide with 60-day return window",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Gift,
                title: "Exclusive Perks",
                description: "Member-only discounts and early access to sales",
                color: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 transform transition-transform group-hover:scale-110`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Upgrade Your Experience?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who've enhanced their shopping
            journey
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
