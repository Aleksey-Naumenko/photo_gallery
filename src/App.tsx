import React, { FC, useEffect, useState } from 'react';

import Input from './components/Input';
import PhotoCard from './components/PhotoCard';
import Button from './components/Button';

import './App.css';

import { IPhoto } from './interfaces';

const App: FC = () => {
  const [photosList, setPhotosList] = useState<IPhoto[]>([]);
  const [searchedPhotosList, setSearchedPhotosList] = useState<IPhoto[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [itemsLimit] = useState<number>(6);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getPhotos = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${itemsLimit}`
      );
      const data = await response.json();
      setPhotosList([...photosList, ...data]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos(page);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const searchedList = photosList.filter((photo) => photo.title.includes(inputValue));
      setSearchedPhotosList(searchedList);
    }, 500);
  }, [inputValue]);

  const onInputChange = (e: React.ChangeEvent<{ value: string }>) => {
    setInputValue(e.target.value);
  };

  const onPhotoCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const onButtonClick = () => {
    const newPage = page + 1;
    getPhotos(newPage);
    setPage(newPage);
    setInputValue('');
  };

  const renderList = () => {
    if (inputValue) {
      if (!searchedPhotosList.length) {
        return <div>No results</div>;
      }
      return searchedPhotosList.map((photo) => (
        <PhotoCard key={photo.id} {...photo} onClick={onPhotoCardClick} />
      ));
    }
    return photosList.map((photo) => (
      <PhotoCard key={photo.id} {...photo} onClick={onPhotoCardClick} />
    ));
  };

  return (
    <div className="page">
      <header className="header">Logo</header>
      <main className="main">
        <h1>Photos</h1>
        <Input value={inputValue} placeholder="Search..." onChange={onInputChange} />
        <div className="photosContainer">{renderList()}</div>
        {photosList.length % 2 === 0 && (
          <Button title="Show more" onClick={onButtonClick} isLoading={isLoading} />
        )}
      </main>
    </div>
  );
};

export default App;
