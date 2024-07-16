import Link from "next/link";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/3">
            <Link href="/">
              <div className="cursor-pointer mb-16 md:mb-16">
                <div>
                  <Image
                    className="rounded"
                    src="/pavasa.png"
                    alt="Logo"
                    width={100}
                    height={75}
                  />
                </div>
                <br />
                <span className=" text-xl italic ">
                  Your adventure starts with Pasava!
                </span>
              </div>
            </Link>
            <nav>
              <ul className="space-y-4 text-lg">
                <li>
                  <Link href="/about">
                    <span className="hover:underline cursor-pointer">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/destinations">
                    <span className="hover:underline cursor-pointer">
                      Destinations
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <span className="hover:underline cursor-pointer">News</span>
                  </Link>
                </li>

                <li>
                  <Link href="/blog">
                    <span className="hover:underline cursor-pointer">Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="hover:underline cursor-pointer">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="md:w-1/3">
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-lg font-bold">Address</h2>
                <p>Vulkanstraße 1, 10367 Berlin, Germany</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Work schedule</h2>
                <p>Monday - Saturday 09:00 - 19:00</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Telefon</h2>
                <p>+(49) 016 844 744</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">E-mail</h2>
                <p>Pasava@gmail.com</p>
              </div>
              <div className="w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4555.145098256289!2d13.483345035442095!3d52.52417839316671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e9ab16b3c6b%3A0x762910f63c9bc487!2sVulkanstra%C3%9Fe%201%2C%2010367%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1720992302644!5m2!1sen!2sus"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-8 h-8 fill-current hover:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.123v-3.622h3.123v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.142v3.24l-1.918.001c-1.504 0-1.796.714-1.796 1.76v2.311h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.352c0-.733-.592-1.325-1.325-1.325z" />
              </svg>
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-8 h-8 fill-current hover:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.092-.205-7.72-2.165-10.148-5.144-.424.726-.666 1.572-.666 2.473 0 1.707.869 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.698 4.374 3.95 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.088.626 1.953 2.444 3.377 4.6 3.417-1.684 1.32-3.809 2.107-6.114 2.107-.397 0-.788-.023-1.175-.069 2.179 1.396 4.768 2.209 7.548 2.209 9.056 0 14.012-7.502 14.012-14.012 0-.213-.004-.426-.014-.637.961-.694 1.8-1.56 2.462-2.549z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-8 h-8 fill-current hover:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.055 2.083.24 2.568.415a5.374 5.374 0 0 1 1.949 1.131 5.374 5.374 0 0 1 1.131 1.949c.175.485.36 1.362.415 2.568.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.206-.24 2.083-.415 2.568a5.374 5.374 0 0 1-1.131 1.949 5.374 5.374 0 0 1-1.949 1.131c-.485.175-1.362.36-2.568.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.055-2.083-.24-2.568-.415a5.374 5.374 0 0 1-1.949-1.131 5.374 5.374 0 0 1-1.131-1.949c-.175-.485-.36-1.362-.415-2.568-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.206.24-2.083.415-2.568a5.374 5.374 0 0 1 1.131-1.949 5.374 5.374 0 0 1 1.949-1.131c.485-.175 1.362-.36 2.568-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.292.061-2.186.27-2.952.57a7.32 7.32 0 0 0-2.68 1.682 7.32 7.32 0 0 0-1.682 2.68c-.3.766-.509 1.66-.57 2.952-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.061 1.292.27 2.186.57 2.952a7.32 7.32 0 0 0 1.682 2.68 7.32 7.32 0 0 0 2.68 1.682c.766.3 1.66.509 2.952.57 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.292-.061 2.186-.27 2.952-.57a7.32 7.32 0 0 0 2.68-1.682 7.32 7.32 0 0 0 1.682-2.68c.3-.766.509-1.66.57-2.952.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.061-1.292-.27-2.186-.57-2.952a7.32 7.32 0 0 0-1.682-2.68 7.32 7.32 0 0 0-2.68-1.682c-.766-.3-1.66-.509-2.952-.57-1.28-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.344-11.123a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/phone-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-8 h-8 fill-current hover:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 1.906.445 3.739 1.281 5.407L.07 23.927a.75.75 0 0 0 .848.92l6.399-1.205A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.775 17.322c-.312.877-1.537 1.612-2.121 1.719-.568.104-1.289.15-2.084-.132a17.18 17.18 0 0 1-2.658-1.148c-4.709-2.625-7.255-8.549-7.475-8.964-.21-.408-1.787-3.422-1.787-5.82 0-2.398 1.291-3.572 1.75-4.034C5.787 1.443 6.161 1.234 6.52 1.234c.338 0 .672.123.926.225.162.067.466.22.72.748.275.569.936 1.964 1.02 2.11.084.146.143.316.03.494-.156.25-.234.389-.45.62-.216.231-.325.345-.497.55-.155.186-.325.388-.495.622-.174.239-.335.49-.535.877-.316.641-.075 1.245.225 1.572.62.717 1.8 2.159 3.854 3.29.959.526 1.712.832 2.322 1.031.559.181 1.08.155 1.498.095.457-.067.874-.309 1.21-.605.264-.237.592-.613.868-1.028.26-.4.536-.86.838-1.347.148-.234.333-.353.588-.261.21.073 1.372.646 1.607.76.243.117.434.175.62.292.201.129.331.19.476.311.128.108.267.295.415.498.139.193.241.424.318.663z" />
              </svg>
            </Link>
          </div>
          <p>
            &copy; {new Date().getFullYear()} TravelSite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
