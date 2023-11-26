import { FaPlus } from 'react-icons/fa6';

export default function App() {
  return (
    <main className="w-96 max-w-3xl">
      <h1 className="text-center text-2xl font-semibold">Accordion</h1>

      <div className="bg-gray-50 p-5">
        <div className="relative after:content[''] after:w-2 after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:rounded-tl after:rounded-bl">
          <header class="flex p-2.5 gap-2">
            <FaPlus />
            <h3 class="accordion__title">When and how should it be used?</h3>
          </header>

          <div>
            <p class="p-2 text-sm">
              It should be used when users only need a few key concepts or descriptions of the content on a single page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
