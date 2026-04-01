export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form className="grid gap-4 max-w-md">
        <input className="bg-white/5 p-3 rounded-lg outline-none" placeholder="Your Name" />
        <input className="bg-white/5 p-3 rounded-lg outline-none" placeholder="Your Email" />
        <textarea className="bg-white/5 p-3 rounded-lg outline-none" placeholder="Message" />
        <button className="bg-cyan-500 text-black py-3 rounded-lg font-medium">
          Send
        </button>
      </form>
    </section>
  )
}