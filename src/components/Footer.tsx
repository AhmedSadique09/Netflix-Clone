export default function Footer() {
  return (
    <footer id="footer" className="footer bg-black text-gray-400 text-[16px]">
      <div className="container mx-auto px-4 py-10">
        <div className="border-b border-gray-700 pb-10">
          <div className="text-2xl mb-6">Questions? Contact us.</div>

          {/* Responsive Grid Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xl">
            <ul className="space-y-3">
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Account</li>
              <li>Media Center</li>
              <li>Invester Relations</li>
            </ul>
            <ul className="space-y-3">
              <li>Jobs</li>
              <li>Ways to Watch</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
            </ul>
            <ul className="space-y-3">
              <li>Corporate Information</li>
              <li>Contact Us</li>
              <li>Speed Test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li>
            </ul>
          </div>

          {/* Language Selector */}
          <div className="mt-6">
            <select className="text-white bg-transparent border border-gray-500 py-2 px-4 rounded text-xl w-full sm:w-[250px]">
              <option className="text-black" value="English">English</option>
              <option className="text-black" value="Arabic">Arabic</option>
            </select>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-xl">
          <div>Netflix Pakistan</div>
          <div className="text-[18px] pt-6">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="text-blue-500 underline"> Learn more</span>.
          </div>
        </div>
      </div>
    </footer>
  );
}
