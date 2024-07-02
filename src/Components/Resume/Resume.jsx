export default function Resume() {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
        <div className="relative pb-16">
          <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Abdallh Noor Resume
              </h2>
            </div>
            <div className="w-full h-px bg-zinc-800 " />
            <iframe
              src="https://drive.google.com/file/d/1_NXZ2mTNvwSAdPyYoyIdGcJKHYgOVsCI/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="min-h-screen"
            ></iframe>
          </div>
        </div>
      </div>
      {/* <iframe
        src="https://drive.google.com/file/d/1_NXZ2mTNvwSAdPyYoyIdGcJKHYgOVsCI/preview"
        width="100%"
        height="100%"
        allow="autoplay"
        className="min-h-screen flex items-center justify-center"
      ></iframe> */}
    </>
  );
}
