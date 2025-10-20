import React from "react";
import { Clock, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  const { t } = useTranslation();
  const offices = [
    {
      title: "Romania Office HQ",
      address:
        "Municipiul Ploieşti, Strada MIHAI BRAVU, Nr. 239, Bloc C4, Ap. 71, Judet Prahova",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.0421850710136!2d26.083187876096478!3d44.9428103680756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b235ee6192a277%3A0x638b818d90fe42de!2sBloc%20C4%2C%20Ap.%2071%2C%20Strada%20Mihai%20Bravu%20239%2C%20Ploie%C8%99ti%20100410%2C%20Romania!5e0!3m2!1sen!2sbd!4v1747725603564!5m2!1sen!2sbd",
      hours: "8:00 AM – 4:00 PM",
    },
    {
      title: "New Zealand Office",
      address: "Level 1/3 Johnsonville Road, Johnsonville, Wellington 6037",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.844826053323!2d174.80450477623276!3d-41.225151936599566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38adc84ed527ed%3A0xe75c513a82f3c33a!2sLevel%201%2F3%20Johnsonville%20Road%2C%20Johnsonville%2C%20Wellington%206037%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1747725844128!5m2!1sen!2sbd",
      hours: "8:00 AM – 4:00 PM",
    },
    {
      title: "Australia Office",
      address: "Level 25, 108 St Georges Terrace, Perth WA 6000",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2416664982293!2d115.85465307578193!3d-31.954339922463557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5de6852c1%3A0x2b092f23904c0a!2s100%20St%20Georges%20Terrace%2C%2025%2F108%20St%20Georges%20Terrace%2C%20Perth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1747725932198!5m2!1sen!2sbd",
      hours: "8:00 AM – 4:00 PM",
    },
    {
      title: "Croatia Office",
      address: "Ul. Hrvoja Macanovića 44A, 10000, Zagreb, Croatia",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.033613464289!2d15.925821375473554!3d45.78935821168599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6af0454f1b1%3A0xa4887f3451e4362d!2sUl.%20Hrvoja%20Macanovi%C4%87a%2044%2C%2010000%2C%20Zagreb%2C%20Croatia!5e1!3m2!1sen!2sbd!4v1755352386306!5m2!1sen!2sbd",
      hours: "8:00 AM – 4:00 PM",
      phone: "‪+385 91 7831 699",
    },
    {
      title: "North Macedonia",
      address:
        "'Novoproektirana' bb, 1000, Vladimir Komarov 11a, Skopje 1000, North Macedonia",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335853.17511073046!2d21.395943937411328!3d41.9515666694422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541595f05fe855%3A0x10bd292c79fe4898!2z0JHQuNC30L3QuNGBLdGG0LXQvdGC0LDRgCDQodC40L3QtdGA0LPQuNGY0LA!5e1!3m2!1sen!2sbd!4v1759242254428!5m2!1sen!2sbd",
      hours: "8:00 AM – 4:00 PM",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        {t("contact.locationh")}
        <span className="text-[#652D90]">{t("contact.locationhh")}</span>
        {t("contact.locationhl")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offices.map((office, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl"
          >
            <div className="h-64 w-full relative">
              <iframe
                src={office.mapUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full"
                title={`Map of ${office.title}`}
              />
            </div>

            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {office.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{office.address}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Business Hours</p>
                    <p className="text-gray-600">Monday – Friday</p>
                    <p className="text-gray-600">{office.hours}</p>
                  </div>
                </div>
                {office.phone && (
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaPhone className="text-blue-500 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
