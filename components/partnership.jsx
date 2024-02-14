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
              <figure className=" rounded-2xl bg-white p-6 text-center shadow-xl shadow-slate-900/10">
                <figcaption className="text-center">
                  <div className="font-display text-slate-900"> {item}</div>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
