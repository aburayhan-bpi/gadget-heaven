const Contact = () => {
  document.title = "Contact | GadgetHeaven";
  return (
    <div className="">
      <div className="">
        <div className="bg-violet-500 text-center space-y-6 mx-auto mt-1 py-10">
          <div className="px-4">
            <h2 className="text-center mb-8 text-3xl font-bold text-white">
              How Can We Help You?
            </h2>
            <label className="input input-bordered flex items-center gap-2 max-w-xl mx-auto ">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        {/* contact main content below */}
        <div className="container w-10/12 mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20 bg-white rounded-xl p-5">
            <div className="">
              <img src="assets/contact.png" alt="contact-image" />
            </div>
            <div className="">
              <form action="">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
                  {/* First Name */}
                  <div className="relative mb-6">
                    <label
                      htmlFor="first-name"
                      className="mb-2 text-gray-600 text-sm font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="block w-full h-11 px-5 py-2.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative mb-6">
                    <label
                      htmlFor="last-name"
                      className="mb-2 text-gray-600 text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="block w-full h-11 px-5 py-2.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 text-gray-600 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full h-11 px-5 py-2.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                    placeholder="name@domain.com"
                    required
                  />
                </div>

                {/* Message */}
                <div className="relative mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 text-gray-600 text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="block w-full h-40 px-4 py-2.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
                    placeholder="Write a message..."
                    required
                  ></textarea>
                </div>

                {/* Privacy Policy Agreement */}
                <div className="flex items-center my-6">
                  <input
                    id="checkbox-policy"
                    type="checkbox"
                    className="w-5 h-5 border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 focus:ring-0"
                  />
                  <label
                    htmlFor="checkbox-policy"
                    className="text-sm text-gray-600"
                  >
                    You agree to our{" "}
                    <a href="#" className="underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                  type="submit"
                  className="w-52 h-12 bg-indigo-600 hover:bg-indigo-800 transition duration-300 rounded-full text-white text-base font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* FAQ */}
          <div className="mt-28">
            <h2 className="text-left font-bold text-4xl mb-8">
              Your FAQ Query?
            </h2>
            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                1. What types of gadgets do you sell?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a wide variety of tech products, including
                  smartphones, laptops, wearable devices, gaming accessories,
                  smart home devices, and more. Our collection is curated to
                  bring you the latest and greatest in technology!
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                2. How can I track my order?
              </div>
              <div className="collapse-content">
                <p>
                  Once your order has been shipped, you will receive a tracking
                  number via email. You can use this number on the courier’s
                  website to track your order status.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                3. Do you offer international shipping?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we provide international shipping to most countries.
                  Please check the shipping section during checkout to confirm
                  if we deliver to your location.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                4. What is your return policy?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a 30-day return policy. If you're not satisfied with
                  your purchase, simply return the item in its original
                  condition for a full refund. Some restrictions apply; please
                  see our return policy page for more details.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                5. How do I cancel my order?
              </div>
              <div className="collapse-content">
                <p>
                  To cancel an order, please contact our customer support team
                  within 24 hours of placing the order. Once the order has been
                  processed or shipped, it cannot be canceled.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                6. What payment methods do you accept?
              </div>
              <div className="collapse-content">
                <p>
                  We accept a variety of payment methods, including credit/debit
                  cards (Visa, MasterCard, etc.), PayPal, and other secure
                  payment gateways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
