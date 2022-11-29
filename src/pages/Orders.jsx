import Info from '../components/Info'

export default function Orders() {
  return (
    <main className="px-14 py-10">
      <section className="min-h-[calc(100vh_-_45vh)]">
        <div className="mb-16 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Мои заказы</h1>
        </div>

        <div className="mx-auto flex min-h-[calc(100vh_-_65vh)] max-w-[285px] flex-col items-center justify-center">
          <Info
            img={'/img/sad-smile-2.png'}
            title="У вас нет заказов"
            text="Оформите хотя бы один заказ"
            alt="Грустный смайл"
            titleLink="На главную"
            to="/"
          />
        </div>
        {/* {!items.length ? (
          <div className="mx-auto flex h-1/2 max-w-[285px] flex-col items-center justify-center">
            <Info
              img={'/img/sad-smile-2.png'}
              title="У вас нет заказов"
              text="Оформите хотя бы один заказ"
              alt="Грустный смайл"
              to="На главную"
            />
          </div>
        ) : (
          <div className="flex flex-wrap gap-10">
            {items.map((item) => (
              <Card
                {...item}
                key={item.itemID}
                onAddItem={onAddItem}
                onFavoriteItem={onFavoriteItem}
                taggedFavorite
              />
            ))}
          </div>
        )} */}
      </section>
    </main>
  )
}
