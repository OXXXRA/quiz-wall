import React from 'react'
import { Button, Input } from "../../ui"

interface Props {

}

const Post = (props: Props) => {
  return (
    <div className="container">
      <h1>Новая публикация</h1>


      <Input className="mb-2" label='Название публикации' placeholder="Мой заголовок" />

      <Input className="mb-2" placeholder="Описание публикации" label="Контент" component='textarea' rows="5" />


      <div className="d-flex justify-end">
        <Button className="mr-1" flat >Отменить</Button>
        <Button color="success">Опубликовать</Button>
      </div>
    </div>
  )
}

export default Post
