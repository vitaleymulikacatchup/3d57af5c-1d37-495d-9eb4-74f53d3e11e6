"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Flame, Skateboard, Sparkles, Star, ThumbsUp, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="SHRED"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Skate Your Way"
          description="Premium skateboards for the streets. Built by skaters, for skaters. Get your perfect setup and unleash your style."
          tag="New Drops"
          tagIcon={Zap}
          buttons={[
            {
              text: "Shop Boards",
              href: "products"
            },
            {
              text: "Watch Videos",
              href: "https://youtube.com"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/8609350/pexels-photo-8609350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Built Different"
          description="Every board is crafted with precision and tested by real skaters on real streets."
          features={[
            {
              id: "01",
              title: "Premium Maple Wood",
              description: "7-ply Canadian maple construction for maximum pop and durability",
              imageSrc: "https://images.pexels.com/photos/9724682/pexels-photo-9724682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "02",
              title: "Pro-Level Components",
              description: "High-grade trucks, wheels, and bearings that pros actually use",
              imageSrc: "https://images.pexels.com/photos/1134162/pexels-photo-1134162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "03",
              title: "Street-Tested",
              description: "Every design is tested by our team riders in real street conditions",
              imageSrc: "https://images.pexels.com/photos/10950880/pexels-photo-10950880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Fresh Setups"
          description="Complete boards ready to ride, or build your own custom setup."
          tag="Hot Sellers"
          tagIcon={Flame}
          products={[
            {
              id: "1",
              brand: "SHRED",
              name: "Street King Complete",
              price: "$159.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/5029052/pexels-photo-5029052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              brand: "SHRED",
              name: "Urban Cruiser",
              price: "$139.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/5387266/pexels-photo-5387266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              brand: "SHRED",
              name: "Longboard Classic",
              price: "$189.99",
              rating: 4,
              reviewCount: "967",
              imageSrc: "https://images.pexels.com/photos/7335425/pexels-photo-7335425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              brand: "SHRED",
              name: "Pro Deck Only",
              price: "$79.99",
              rating: 5,
              reviewCount: "3.2k",
              imageSrc: "https://images.pexels.com/photos/5029052/pexels-photo-5029052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Real Riders, Real Reviews"
          description="See what skaters are saying about their SHRED setups."
          testimonials={[
            {
              id: "1",
              name: "Jake Martinez",
              role: "Street Skater",
              testimonial: "This board has sick pop and the grip is insane. Been landing tricks I never thought possible.",
              imageSrc: "https://images.pexels.com/photos/4816771/pexels-photo-4816771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Sparkles
            },
            {
              id: "2",
              name: "Maya Chen",
              role: "Park Rider",
              testimonial: "The quality is unreal for the price. My setup feels like it cost twice as much.",
              imageSrc: "https://images.pexels.com/photos/457496/pexels-photo-457496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Star
            },
            {
              id: "3",
              name: "Tyler Brooks",
              role: "Bowl Skater",
              testimonial: "Fast shipping, perfect setup. These guys know what skaters actually want.",
              imageSrc: "https://images.pexels.com/photos/4816771/pexels-photo-4816771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: ThumbsUp
            },
            {
              id: "4",
              name: "Alex Rivera",
              role: "Street Rider",
              testimonial: "Been skating for 8 years and this is hands down the best complete I've owned.",
              imageSrc: "https://images.pexels.com/photos/4816771/pexels-photo-4816771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by the Scene"
          description="Partnered with the brands that matter in skateboarding."
          logos={[
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6692038/pexels-photo-6692038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6205236/pexels-photo-6205236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2314407/pexels-photo-2314407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3383885/pexels-photo-3383885.png?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Questions? We Got You"
          sideDescription="Everything you need to know about skating with SHRED."
          faqs={[
            {
              id: "1",
              title: "What size board should I get?",
              content: "Board width depends on your shoe size and style. 7.5-8\" for street, 8-8.5\" for all-around, 8.5\"+  for bowls and transition."
            },
            {
              id: "2",
              title: "Do you ship complete setups ready to ride?",
              content: "Yes! All complete boards come fully assembled with grip tape applied. Just unbox and skate."
            },
            {
              id: "3",
              title: "What's your return policy?",
              content: "30-day returns on unused items. If you break it skating, that's on you - but we offer crash replacement discounts."
            },
            {
              id: "4",
              title: "Can I customize my setup?",
              content: "Absolutely. Choose your deck, trucks, wheels, and bearings. We'll build it exactly how you want it."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          tagIcon={Skateboard}
          title="Get the Latest Drops"
          description="Be the first to know about new boards, team videos, and exclusive discounts. No spam, just skate content."
          inputPlaceholder="Your email"
          buttonText="Join the Crew"
          termsText="By joining, you agree to receive updates about new products and skate content. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/8609350/pexels-photo-8609350.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Shop",
              items: [
                {
                  label: "Complete Boards",
                  href: "products"
                },
                {
                  label: "Decks",
                  href: "decks"
                },
                {
                  label: "Parts",
                  href: "parts"
                },
                {
                  label: "Accessories",
                  href: "accessories"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Size Guide",
                  href: "size-guide"
                },
                {
                  label: "Shipping Info",
                  href: "shipping"
                },
                {
                  label: "Returns",
                  href: "returns"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Community",
              items: [
                {
                  label: "Instagram",
                  href: "https://instagram.com"
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com"
                },
                {
                  label: "TikTok",
                  href: "https://tiktok.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | SHRED Skateboarding"
        />
      </div>
    </ThemeProvider>
  );
}