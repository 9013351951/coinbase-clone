import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaCircleImg from "@/assets/cta-circle.png";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="bg-primary rounded-3xl p-12 md:p-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground tracking-tight">
              Take control of your money.
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/80">
              Start your portfolio today and{" "}
              <a href="#" className="font-bold underline inline-flex items-center gap-1 text-primary-foreground">
                get up to $2,000 in crypto¹
                <ArrowRight className="w-4 h-4" />
              </a>
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 text-base font-semibold h-12"
              >
                Sign up
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src={ctaCircleImg}
              alt="Crypto coins circle"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
