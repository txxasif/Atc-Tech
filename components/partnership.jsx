////
const data = [
  "Natco Fashion (PTE) Ltd.",
  "PGN Global (PTE) Ltd.",
  "Bengal Management & Consultancy (PTE) Ltd",
  "SGB Engineering & Trading (PTE) Ltd",
];
export function Partnership() {
  return (
    <section className="w-full">
      <h1 className="text-center mb-8 bold-40">Partnership</h1>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8  mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {data.map((item, i) => {
              return (
                <a
                  key={i}
                  href="#"
                  className="flex justify-center items-center border"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
