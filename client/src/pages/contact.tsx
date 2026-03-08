import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateInquiry } from "@/hooks/use-inquiries";

// Use identical schema for frontend validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { mutate: createInquiry, isPending } = useCreateInquiry();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    createInquiry(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="flex flex-col w-full">
      {/* contact hero office or clean building */}
      <Hero 
        title="Contact Us" 
        description="We're here to help. Reach out for a free quote, schedule an inspection, or ask a question."
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Don't let pests take over your space. Contact our dedicated team today for prompt, professional service.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Office</h4>
                    <p className="text-muted-foreground">123 Pestco Blvd, Suite 100<br/>Metropolis, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground">1-800-PEST-CONTROL<br/>(1-800-737-8266)</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">info@pestco.com<br/>support@pestco.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Hours of Operation</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM<br/>Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-10 rounded-3xl shadow-xl border border-border/50">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" type="tel" className="h-12 rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your pest issue or service needs..." 
                            className="min-h-[150px] rounded-xl bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-colors resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    size="xl" 
                    className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all font-bold"
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : "Submit Request"}
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
