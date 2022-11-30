import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquare } from 'react-icons/bs'

import Info from '../components/Info'
import Card from '../components/Card'

export default function Orders({ order }) {
  const items = order.map((obj) => obj.items).flat()

  return (
    <main
      className={`flex min-h-[calc(100vh_-_175px)] items-center sm:min-h-[calc(100vh_-_133px)] xl:min-h-[calc(100vh_-_45vh)] ${
        !items.length ? 'justify-center' : 'justify-start'
      } px-14 py-10`}
    >
      <section className="h-full">
        {!items.length ? (
          <div className="mx-auto flex h-full w-[285px] flex-col items-center justify-center">
            <Info
              img={'/img/sad-smile-2.png'}
              title="У вас нет заказов"
              text="Оформите хотя бы один заказ"
              alt="Грустный смайл"
              titleLink="На главную"
              to="/"
            />
          </div>
        ) : (
          <>
            <div className="mb-16 flex items-center">
              <Link to="/" title="На главную">
                <BsArrowLeftSquare className="mr-5 text-2xl text-[#d3d3d3] duration-300 hover:scale-150" />
              </Link>
              <h1 className="text-xl font-bold sm:text-3xl">Мои заказы</h1>
            </div>
            <div className="flex flex-wrap gap-10">
              {items.map((item) => (
                <Card {...item} key={uuid()} addKeys={false} taggedFavorite />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  )
}
