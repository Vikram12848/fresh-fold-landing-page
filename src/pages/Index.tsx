import { Star, Phone, MessageCircle, Truck, Leaf, Clock, Sparkles, Shirt, Droplets, Shield, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-laundry.jpg';

const Index = () => {
  const phoneNumber = "+1234567890"; // Replace with actual phone number
  const whatsappMessage = encodeURIComponent("Hi, I'd like to try The Laundry Bag service!");
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}?text=${whatsappMessage}`;

  const services = [
    { name: "Wash & Fold", icon: Shirt, description: "Professional washing and careful folding" },
    { name: "Dry Cleaning", icon: Sparkles, description: "Premium dry cleaning for delicate items" },
    { name: "Stain Removal", icon: Droplets, description: "Expert treatment for tough stains" },
    { name: "Express Delivery", icon: Truck, description: "Same-day service when you need it fast" }
  ];

  const features = [
    { name: "Eco-Friendly Detergents", icon: Leaf },
    { name: "24-Hour Turnaround", icon: Clock },
    { name: "Free Pickup & Delivery", icon: Truck }
  ];

  const steps = [
    { 
      number: "01",
      title: "Schedule Pickup",
      description: "Visit our store, call us, or message on WhatsApp to schedule your pickup time.",
      icon: Phone
    },
    { 
      number: "02",
      title: "We Clean & Care",
      description: "Our experts handle your clothes with premium care using eco-friendly products.",
      icon: Shield
    },
    { 
      number: "03",
      title: "Doorstep Delivery",
      description: "Fresh, clean clothes delivered right to your door within 24 hours.",
      icon: Truck
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The Laundry Bag saved me so much time! Their service is impeccable and my clothes have never looked better.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "Fast, reliable, and eco-friendly. I've been using their service for 6 months and couldn't be happier!",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "The convenience of pickup and delivery is amazing. Plus, they removed a stubborn stain I thought was permanent!",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Pay Per Load",
      price: "$12",
      unit: "per kg",
      features: ["Wash & Fold", "Free Pickup & Delivery", "24-Hour Turnaround"]
    },
    {
      name: "Weekly Plan",
      price: "$85",
      unit: "per week",
      features: ["Up to 8kg", "Priority Service", "Free Stain Treatment", "Same-Day Express Available"],
      popular: true
    },
    {
      name: "Monthly Subscription",
      price: "$280",
      unit: "per month",
      features: ["Unlimited Loads", "Premium Care", "Dry Cleaning Included", "Dedicated Account Manager"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/23bfce5b-23ca-478a-9252-ad0e924eecff.png" alt="LB Logo" className="h-10 w-10" />
            <div className="text-2xl font-bold text-logo-blue">The Laundry Bag</div>
          </div>
          <div className="flex gap-4">
            <Button asChild size="sm" className="hidden md:inline-flex">
              <a href={`tel:${phoneNumber}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button asChild size="sm" variant="secondary">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-logo-blue/20 to-logo-fresh/20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-logo-blue-light/20 text-logo-blue font-semibold border border-logo-blue/30">
            Limited-Time Discount for First-Time Customers!
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Fresh, Fast & <br />
            <span className="bg-gradient-to-r from-logo-blue to-logo-blue-light bg-clip-text text-transparent">
              Hassle-Free
            </span> <br />
            Laundry Services!
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            We Wash, Dry, Fold & Deliver—So You Don't Have To!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-logo-blue hover:bg-white/90 text-lg px-8 py-6 shadow-floating">
              <a href={`tel:${phoneNumber}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {phoneNumber}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-logo-accent hover:bg-logo-accent/90 text-white text-lg px-8 py-6 shadow-floating">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-logo-fresh">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Premium Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional laundry care with attention to every detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="text-center bg-card shadow-card border-0 hover:shadow-floating transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-logo-blue-light/20 px-6 py-3 rounded-full border border-logo-blue/30">
                <feature.icon className="w-5 h-5 text-logo-blue" />
                <span className="font-medium text-logo-blue">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple 3-step process to fresh, clean clothes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-soft">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-logo-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-logo-fresh">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-logo-blue shadow-floating' : 'shadow-card'} border-0 bg-card`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-logo-blue text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-logo-blue">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-logo-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-logo-blue hover:bg-logo-blue-dark' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Join thousands of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-logo-fresh">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the convenience of premium laundry service. Contact us today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-logo-blue hover:bg-logo-blue-dark text-lg px-8 py-6 shadow-soft">
              <a href={`tel:${phoneNumber}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {phoneNumber}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-logo-accent hover:bg-logo-accent/90 text-white text-lg px-8 py-6 shadow-soft">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-card max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Visit Our Store</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-logo-blue" />
                <span>123 Clean Street, Fresh City, FC 12345</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-logo-blue" />
                <span>Mon-Sat: 7AM-8PM, Sun: 9AM-6PM</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-logo-blue" />
                <span>hello@thelaundryBag.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/lovable-uploads/23bfce5b-23ca-478a-9252-ad0e924eecff.png" alt="LB Logo" className="h-8 w-8" />
                <h3 className="text-2xl font-bold text-logo-blue">The Laundry Bag</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Premium laundry services with eco-friendly care. We make your life easier with fresh, clean clothes delivered to your door.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-logo-blue rounded-full flex items-center justify-center hover:bg-logo-blue-light transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-logo-blue rounded-full flex items-center justify-center hover:bg-logo-blue-light transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Wash & Fold</li>
                <li>Dry Cleaning</li>
                <li>Stain Removal</li>
                <li>Express Delivery</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {phoneNumber}
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  hello@thelaundryBag.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  123 Clean Street, Fresh City
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 The Laundry Bag. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          asChild 
          size="lg" 
          className="rounded-full w-16 h-16 bg-logo-accent hover:bg-logo-accent/90 shadow-floating animate-pulse hover:animate-none"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-8 h-8" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;