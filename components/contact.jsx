export function Contact() {
  return (
    <section className="w-full">
      <section className="bg-gray-10">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h1 className="text-center text-black  mb-8 bold-40">Contact Us</h1>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=23.728206191244418,90.42161294975648&hl=es;z=14&amp;output=embed"
                  width="100%"
                  height="480"
                  //   style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Sara Tower, House # 5, Road # 21/1(2nd Floor), Nikunja-2,
                      Khelkhet, Dhaka- 1228.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9am - 5pm
                    </p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Contact
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Email: atctechltdbd@gmail.com
                    </p>
                    <p className="mt-1 text-gray-600">Phone: +8802 9562844</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
