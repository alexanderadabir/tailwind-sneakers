import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'

import Card from '../components/Card'
import Info from '../components/Info'

export default function Favorites({ onFavoriteItem, onAddItem, items }) {
  return (
    <main
      className={`flex min-h-[calc(100vh_-_175px)] items-center sm:min-h-[calc(100vh_-_133px)] xl:min-h-[calc(100vh_-_45vh)] ${
        !items.length ? 'justify-center' : 'justify-start'
      } px-14 py-10`}
    >
      <section className="h-full">
        {!items.length ? (
          <div className="mx-auto flex h-full max-w-[285px] flex-col items-center justify-center">
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
          <>
            <div className="mb-16 flex items-center">
              <Link to="/" title="На главную">
                <img
                  className="mr-5"
                  src="/img/arrow-back.svg"
                  alt="Вернуться назад"
                />
              </Link>
              <h1 className="text-xl font-bold sm:text-3xl">Мои закладки</h1>
            </div>
            <div className="flex flex-wrap gap-10">
              {items.map((item) => (
                <Card
                  {...item}
                  key={uuid()}
                  onAddItem={onAddItem}
                  onFavoriteItem={onFavoriteItem}
                  taggedFavorite
                />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  )
}
