

export default function Contact() {
  return (
    <main className="min-h-screen font-minecraft">
        <section className="text-white flex flex-col gap-4 w-11/12 mx-auto mt-20">
            <div className="text-3xl 2xl:text-5xl">Contact</div>
            <div>Let’s build something together!</div>
            <form className="flex flex-col gap-2 border w-1/2 mt-20 rounded-md p-10 text-sm" >
                <label htmlFor="name">Name</label>
                <input name="name" className="border p-3 text-xs rounded-md" placeholder="Your name..." type="text" />
                <label className="mt-4" htmlFor="email">E-mail</label>
                <input name="email" className="border p-3 text-xs rounded-md" placeholder="Your email here..." type="email" />
                <label className="mt-4" htmlFor="content">Message</label>
                <textarea placeholder="Enter message..." className="border rounded-md p-3 text-xs" name="content" ></textarea>
                <button className="mt-4 w-fit rounded-md px-2 py-2 bg-white text-neutral-700 cursor-pointer">Submit</button>
            </form>
        </section>
    </main>
  )
}
