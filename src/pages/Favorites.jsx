import { useContext } from 'react'

import Card from '../components/Card'
import AppContext from '../AppContext'
import Info from '../components/Info'

export default function Favorites({ onFavoriteItem, onAddItem }) {
  const { favorites: items } = useContext(AppContext)
  return (
    <main className="px-14 py-10">
      <section className="min-h-[calc(100vh_-_45vh)]">
        <div className="mb-16 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Мои закладки</h1>
        </div>
        {!items.length ? (
          <div className="mx-auto flex min-h-[calc(100vh_-_65vh)] max-w-[285px] flex-col items-center justify-center">
            <Info
              img={'/img/sad-smile.png'}
              title="Закладок нет"
              text="Вы ничего не добавляли в закладки"
              alt="Грустный смайл"
              titleLink="На главную"
              to="/"
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
        )}
      </section>
    </main>
  )
}
