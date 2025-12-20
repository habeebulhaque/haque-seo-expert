import Link from "next/link";
import { ArrowRight, BarChart, Globe, Search, CheckCircle, TrendingUp, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image with Light Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block mb-8 animate-fade-in-up">
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-bold border-b-2 border-primary pb-2">
              Premium SEO Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-slate-900 font-serif leading-tight tracking-tight animate-fade-in-up delay-100">
            Driving Revenue & <br />
            <span className="text-primary italic">Brand Visibility</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-slate-600 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            I help ambitious businesses dominate search results and turn traffic into tangible revenue through data-driven SEO strategies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-300">
            <Link href="/contact" className="bg-primary hover:bg-black hover:text-white text-white px-10 py-4 rounded-sm font-bold transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Get a Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-4 rounded-sm font-bold transition-all uppercase tracking-wider text-sm flex items-center justify-center hover:-translate-y-1">
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
            {[
              { label: 'Revenue Generated', value: '275K AED' },
              { label: 'Keywords Ranked', value: '5k+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Years Experience', value: '7+' },
            ].map((stat, index) => (
              <div key={index} className="px-4">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 font-serif">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200 my-10"></div>

      {/* About Section (Personal Brand) */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                {/* Profile Image */}
                <img
                  src="/habeebul-haque.png"
                  alt="Habeebul Haque"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gold Frame Effect */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary z-0 hidden lg:block pointer-events-none"></div>
              </div>
              <div className="absolute bottom-8 left-8 bg-white p-6 shadow-xl max-w-xs z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl font-bold text-primary font-serif">10+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 leading-tight">Years of<br />Excellence</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">About Me</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
                Habeebul Haque: <br />
                Driving <span className="text-primary italic">Revenue Growth</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I am not just an SEO expert; I am a strategic partner in your business growth. With a background in data analytics and consumer psychology, I build campaigns that do more than just rank—they sell.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My approach is bespoke, transparent, and relentlessly focused on ROI. Whether you are a local business or a global enterprise, I craft the roadmap to your digital dominance.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Data-Driven Strategies',
                  'White-Hat Techniques',
                  'Transparent Reporting',
                  'ROI Focused'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="inline-flex items-center gap-2 text-black font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors uppercase tracking-wider text-sm">
                Read My Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200 my-10"></div>

      {/* Services Section */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-serif">Digital Marketing <br /><span className="italic text-gray-500">That Delivers Results</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'SEO Visibility',
                desc: 'Dominate search results with long-term SEO strategies tailored to your market.',
                href: '/services/seo'
              },
              {
                icon: BarChart,
                title: 'PPC Advertising',
                desc: 'Immediate traffic and leads through highly targeted Google Ads campaigns.',
                href: '/services/ppc'
              },
              {
                icon: TrendingUp,
                title: 'Social Media',
                desc: 'Build brand loyalty and engage your audience with compelling social content.',
                href: '/services/social-media'
              },
              {
                icon: Globe,
                title: 'Content Marketing',
                desc: 'Authority-building content that attracts, educates, and converts your ideal customers.',
                href: '/services/content-marketing'
              },
              {
                icon: Mail,
                title: 'Email Marketing',
                desc: 'Nurture leads and drive repeat business with personalized email automation.',
                href: '/services/email-marketing'
              },
              {
                icon: MapPin,
                title: 'Local SEO',
                desc: 'Capture local market share and drive foot traffic to your physical location.',
                href: '/services/seo'
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-10 border border-gray-100 hover:border-primary/30 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-2 duration-300 rounded-sm">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors rounded-full">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-base">
                  {service.desc}
                </p>
                <Link href={service.href} className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200 my-10"></div>

      {/* CTA / Contact Section */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Get Started</div>
              <h2 className="text-4xl font-bold mb-6 font-serif relative z-10">Unlock Your Website&apos;s <br /><span className="italic text-gray-400">Full Potential</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
                Don&apos;t let your competitors steal your customers. Schedule a free strategy session today and let&apos;s discuss how we can scale your business.
              </p>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-primary" /> Free 30-Minute Consultation
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-primary" /> Comprehensive Site Audit
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-primary" /> Custom Growth Roadmap
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 p-12 lg:p-16 bg-white">
              <h3 className="text-2xl font-bold mb-6 text-black font-serif">Get Your Free Audit</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label htmlFor="website" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Website</label>
                  <input type="url" id="website" className="w-full bg-gray-50 border border-gray-200 p-4 text-black focus:outline-none focus:border-primary transition-colors" placeholder="https://example.com" />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-black hover:text-white text-black font-bold py-4 uppercase tracking-wider transition-all">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
