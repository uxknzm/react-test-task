import React from 'react';
import axios from 'axios'
import s from './Home.module.css'

type DataPost = [{
  post: {
    id: number
    title: string
    body: string
  },
  user: {
    name: string
    company: {
      name: string
    }
  },
  photo: {
    thumbnailUrl: string
  }
}]

const getData = (type: string) => axios.get(`https://jsonplaceholder.typicode.com/${type}`).then(r => r.data);
const Home: React.FC = () => {
  const [data, setData] = React.useState<DataPost>([{ post: { id: 0, title: '', body: '' }, user: { name: '', company: { name: '' } }, photo: { thumbnailUrl: '' } }]);
  React.useEffect(() => {
    Promise
      .all(['posts', 'users', 'photos'].map(getData))
      .then(([posts, users, photos]) => {
        const usersObj = Object.fromEntries(users.map((n: any) => [n.id, n]));
        const photosObj = Object.fromEntries(photos.map((n: any) => [n.id, n]));
        setData(posts.map((n: any) => ({
          photo: photosObj[n.userId],
          post: n,
          user: usersObj[n.userId],
        })));
      })
  }, []);
  return (
    <div className={s.home__conteiner}>
      {data.map(({ post, user, photo }) => (
        <div className={s.home__item} key={post.id}>
          <div className={s.company__autor}>
            <div className={s.home__img}>
              <img src={photo.thumbnailUrl} alt="" />
            </div>
            <div>
              <p>Autor: {user.name}</p>
              <p>Company: {user.company.name}</p>
            </div>
          </div>
          <p>Title: {post.title}</p>
          <p className={s.home__body}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;