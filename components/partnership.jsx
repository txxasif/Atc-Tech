////
const data = [
  "Natco Fashion (PTE) Ltd.",
  "PGN Global (PTE) Ltd.",
  "Bengal Management & Consultancy (PTE) Ltd",
  "SGB Engineering & Trading (PTE) Ltd",
];
export function Partnership() {
  return (
    <section className="w-full pb-14">
      <h1 className="text-center mb-8 bold-40">Partnership</h1>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
        {data.map((item, i) => {
          return (
            <li key={i}>
              <figure class=" rounded-2xl bg-white p-6 text-center shadow-xl shadow-slate-900/10">
                <figcaption class="text-center">
                  <div class="font-display text-slate-900"> {item}</div>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
<section
  id="comparison"
  aria-label="QuickEdit vs traditional editor"
  class="bg-slate-50 py-20 sm:py-32"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <ul
      role="list"
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
    >
      <li>
        <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure class="relative rounded-2xl bg-white p-6 text-center shadow-xl shadow-slate-900/10">
              <blockquote class="relative p-3">
                <p class="text-6xl font-bold tracking-tight text-slate-900">
                  98%
                </p>
              </blockquote>
              <figcaption class="text-center">
                <div class="font-display text-slate-900">
                  {" "}
                  ✅ faster than a traditional editor{" "}
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
      <li>
        <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure class="relative rounded-2xl bg-white p-6 text-center shadow-xl shadow-slate-900/10">
              <blockquote class="relative p-3">
                <p class="text-6xl font-bold tracking-tight text-slate-900">
                  85%
                </p>
              </blockquote>
              <figcaption class="text-center">
                <div class="font-display text-slate-900">
                  💰 more affordable than a traditional editor
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
      <li>
        <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
          <li>
            <figure class="relative rounded-2xl bg-white p-6 text-center shadow-xl shadow-slate-900/10">
              <blockquote class="relative p-3">
                <p class="text-6xl font-bold tracking-tight text-slate-900">
                  120%
                </p>
              </blockquote>
              <figcaption class="text-center">
                <div class="font-display text-slate-900">
                  😎 increased efficiency and features
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</section>;
