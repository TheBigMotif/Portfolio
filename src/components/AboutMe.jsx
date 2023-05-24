export default function AboutMe() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img
              className="h-11"
              src="https://res.cloudinary.com/dm7phzl7a/image/upload/v1684968668/logo_aaronagraz_oztpy2.png"
              alt="Your Company"
            />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                For my video work go to.{" "}
                <a
                  href="https://www.behance.net/aaronagraz"
                  className="whitespace-nowrap font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Behance <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Hi! My name is Aaron Agraz. <br></br>I am a web developer and
              content creator.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I help businesses grow. I help businesses unleash their full
              potential by creating websites and content that will help them
              reach their goals, their customers, and their dreams.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/Contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact me
              </a>
              <a
                href="https://www.youtube.com/channel/UChz2qA0mmFXuz1r8PJZhHxw"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                My YouTube Channel <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://res.cloudinary.com/dm7phzl7a/image/upload/v1684969757/aaronportfolio_gcnyxn.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
