export default function Home() {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
      <div className="grid lg:grid-cols-3 gap-5 mb-12">
        <div className="rounded-sm bg-white h-40 shadow-sm">
          <div class="px-6 py-4 font-bold text-xl text-center items-center mt-6 text-gray-500">
            Balance
            <div>$0.0</div>
          </div>
        </div>
        <div className="rounded bg-white h-40 shadow-sm">
          <div class="px-6 py-4 font-bold text-xl text-center items-center mt-6 text-gray-500">
            Equity
            <div>$0.0</div>
          </div>
        </div>
        <div className="rounded bg-white h-40 shadow-sm">
          <div class="px-6 py-4 font-bold text-xl text-center items-center mt-6 text-gray-500">
            Profit / Day
            <div>$0.0</div>
          </div>
        </div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm mb-10"></div>
    </>
  );
}
