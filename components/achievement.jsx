const data = [];

export function Achievement() {
  return (
    <section className="w-full py-16">
      <h1 className="text-center text-black bold-40">Achievement</h1>
      <div className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-200/50 p-8">
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  150+
                </dd>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  Client Management Software
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                {/* <dt className="text-sm font-semibold leading-6 text-gray-600">
                  200+ ERP Solutions
                </dt> */}
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  200+
                </dd>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  ERP Solutions
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                {/* <dt className="text-sm font-semibold leading-6 text-gray-600">
                  400+ Clients
                </dt> */}
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  400+
                </dd>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  Clients
                </dd>
              </div>
              <div className="flex flex-col bg-gray-200/50 p-8">
                {/* <dt className="text-sm font-semibold leading-6 text-gray-600">
                  3 Countries
                </dt> */}
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  3 Countries
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
