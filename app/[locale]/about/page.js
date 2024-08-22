
'use client'
import Link from "next/link";

const stats = [
  { id: 1, name: "Experience", value: "13 years" },
  { id: 2, name: "Destination", value: "123" },
  { id: 3, name: "Languages team spoken", value: "5" },
  { id: 4, name: "Travel experts", value: "50" },
  { id: 5, name: "Positive Feedback", value: "100,000+" },
  { id: 6, name: "New clients annually", value: "46,000" },
];


export default function AboutUs() {
  // const { t } = useTranslation();

  return (

    <div
      className="bg-gray-100 p-8"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255, 255, 255, 0.8), 
          rgba(255, 255, 255, 0.8)
        ), 
        url('')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-700 mt-24 mb-16">
          About Us
        </h1>
        <section className="mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            At Pavasa.Travel, we know how to make vacation planning enjoyable,
            and the anticipation of departure thrilling, whether you're
            traveling alone, with friends, as a couple, or with family. We value
            our clients' time and are ready to take care of all your travel
            needs: we'll select tours and excursions tailored to your needs and
            budget, provide transfers, arrange insurance, and explain how to use
            it, and we'll stay in touch throughout your vacation.
          </p>
        </section>
        <div className="bg-secondary rounded-lg py-16 sm:py-16">
          <h2 className="text-4xl font-semibold text-center text-gray-700 mb-16">
            Our mission
          </h2>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                >
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-700 sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mt-16 mb-8">
            Pavasa.Travel Today
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔ Dream, plan, or seize the moment - contact us anytime and
                anywhere!
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Do you want to relax in Greece and are waiting for the best
                prices in the season? Perhaps you have a vacation planned for
                specific dates and are ready to consider different destinations?
                Or maybe you're one of those travelers who are ready to pack
                their bags and embark on an adventure at any moment? Great! Come
                to our office, call, write on social networks, or leave a
                request on our site. Admiral.Travel has something to offer you!
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Booking and logistics have become easier!
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Thanks to our extensive network of trusted partners, we will
                take on the selection of the optimal accommodation offer for
                your requests and transfer options for you, be it a flight, a
                bus trip, travel by train, or even in your own car. We will
                share our invaluable experience, guide you on the required
                documents and insurance, and how to use them. Your safety
                throughout the journey is our priority!
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Creating the perfect route
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Considering your wishes and our experience, we will develop an
                individual route, where every detail, from accommodation and
                activities to restaurants and local attractions, will be
                carefully planned to create unforgettable memories. Want to look
                at Rome's landmarks and take a gondola ride in Venice during a
                week's vacation in Italy? We will organize! Or wish that a beach
                holiday in Greece starts with an unforgettable yacht cruise on
                the very first evening? You're in the right place! We are here
                to take the stress off your shoulders and you focus on pleasant
                excitement before the trip.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Enjoy, explore, and catch every moment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Everything is ready, it's time to go on a well-deserved
                vacation! Everything is taken care of, you just have to enjoy
                the journey. Immerse yourself in new cultures, savor culinary
                delights, and create unforgettable memories. Pasava.Travel,
                represented by one of our wonderful managers, will be in touch
                with you at every stage of the way, ensuring a hassle-free and
                extraordinary journey.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Your reviews help us get better!
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We value your opinion and strive for constant improvement. At
                the end of the trip, the manager will contact you to find out
                your impressions. Your experience and ideas, combined with the
                feedback of thousands of other satisfied travelers, help us
                better coordinate our work, select the most interesting resorts
                and cities to visit in dozens of countries, the best hotels, and
                carriers. Actively listening to our clients, we guarantee that
                every aspect of your future travels will be even more wonderful!
              </p>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-4">
            Contact us today!
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Trust and Reliability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For 13 years, Pavasa.Travel has demonstrated unwavering
                reliability in the face of pandemics, cataclysms, political
                crises, and force majeure circumstances. We stand by our
                customers in any situation, ensuring that their money is safe,
                and travel plans are smoothly executed.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Direct Partnership and Unbeatable Prices
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We work without intermediaries, and our direct contracts with
                hotels and airlines allow us to offer the best prices on the
                market. Our extensive network of partners includes
                well-recommended airlines such as Turkish Airlines, Emirates,
                Wizz Air, Ryanair, and a vast database of more than a million
                hotels guarantees a wide selection of competitive options.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Individual Creative Approach
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By contacting us, you will receive personalized attention and
                expert recommendations for planning a trip that meets your
                desires and exceeds your expectations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Current Hot Deals
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ✔Every day, our dedicated team formulates and posts the best hot
                deals on social networks. This means you will always have access
                to the latest and most attractive offers, making your travel
                planning easy and economical.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Expert Destination Knowledge
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our experienced team conducts regular on-site inspections,
                meticulously evaluating hotels, restaurants, cleanliness,
                beaches, and locations. You can be assured that your vacation
                will meet and exceed expectations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                ✔Personal Manager's Advice and Assistance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For every client that comes to us, we assign a personal manager
                who will do everything possible to anticipate your needs until
                the end of the journey. He will take care of reminding you about
                your flight in advance or informing you about the rescheduling,
                organize a transfer, or contact the hotel if you need to change
                the room.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Digital Experience
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pasava.Travel has turned into an online platform that allows you
                to access our services from anywhere in the world and at any
                time of the day. This convenient interface not only saves your
                precious time but also offers free travel tips from our experts.
                Booking the vacation of your dreams has never been so simple and
                secure – you can pay through Visa and MasterCard.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Visit us
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We invite you to come and meet us in person at our offices
                  during working hours.
                </p>
                <p className="text-blue-600">
                  <Link href="/contact">to the Contact page</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
