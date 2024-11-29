import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Contact() {

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80"
            alt="Kontaktoni Me Ne"
            className="h-full w-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="mb-6 font-serif text-5xl font-bold">
              Na kontaktoni
            </h1>
            <p className="text-xl">
              Ne do të donim të dëgjonim nga ju. Dërgoni një mesazh dhe ne do të
              përgjigjemi sa më shpejt të jetë e mundur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Informacioni i Kontaktit */}
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-gray-900">
                Kontaktoni Me Ne
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="mt-1 h-6 w-6 text-rose-600" />
                  <div className="ml-4">
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      Telefoni
                    </h3>
                    <p className="text-gray-600">+355 67 400 4072</p>
                    <p className="text-gray-600">+355 69 874 3912</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mt-1 h-6 w-6 text-rose-600" />
                  <div className="ml-4">
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      Email
                    </h3>
                    <a
                      href="mailto:info@pasticerilika.al"
                      className="text-gray-600 hover:text-rose-600"
                    >
                      info@pasticerilika.al
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mt-1 h-6 w-6 text-rose-600" />
                  <div className="ml-4">
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">
                      Lokacionet
                    </h3>
                    <p className="text-gray-600">Rruga e Durrësit, Tiranë</p>
                    <p className="text-gray-600">Pallatet Çabej, Tiranë</p>
                    <p className="text-gray-600">Rruga Xhanfize Keko, Tiranë</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Orari i Punës
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>E Hënë - E Premte</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>E Shtunë</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>E Diel</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Forma e Kontaktit */}
            <div className="flex flex-col items-end">
              <div className="mx-auto w-full rounded-2xl bg-white p-8 shadow-xl md:max-w-md lg:mx-0">
                <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900">
                  Dërgoni një Mesazh
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
