import React, { FC } from 'react';

import { IPhoto } from '../../interfaces';

interface PhotoCardProps extends Omit<IPhoto, 'albumId' | 'id'> {
  onClick: (url: string) => void;
  albumId?: number;
  id?: number;
}

const PhotoCard: FC<PhotoCardProps> = ({ title, url, thumbnailUrl, onClick }: PhotoCardProps) => {
  return (
    <div className="photoCard" onClick={() => onClick(url)}>
      <img className="photoCard__img" src={thumbnailUrl} alt={title} />
      <div className="photoCard__title">
        <div>{title}</div>
      </div>
    </div>
  );
};

export default PhotoCard;
