"use client";

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        If you have any questions or need support, please reach out to us.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows={5}
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled
          className="cursor-not-allowed w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;