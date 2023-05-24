export default function Skills() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            My skills
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Web Development CSS, HTML, JavaScript, React, Node.js, Express,
            MongoDB, and more!.
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Video editing, Adobe Premiere Pro and After Effects.
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Graphic design, Adobe Illustrator and Photoshop.
          </p>
        </div>
        <div className="ml-4 mt-4 flex-shrink-0">
          {/* <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create new job
          </button> */}
        </div>
      </div>
    </div>
  );
}
