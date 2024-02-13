const data = [
  "Associate Software Engineer",
  "Sr. Software Engineer",
  "Network Engineer",
  "Database Engineer",
  "Intern Engineer",
  "SQA Engineer",
];
export function Career() {
  return (
    <section className="w-full">
      <h1 className="text-center text-black  mb-8 bold-40">Career At ATC</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((c, idx) => {
          return (
            <div
              className="border border-solid px-4 py-4 rounded-md shadow-sm hover:font-bold hover:text-[17px] border-b hover: text-[#0F79B9] transition-all"
              key={idx}
            >
              {c}
            </div>
          );
        })}
      </div>
    </section>
  );
}
