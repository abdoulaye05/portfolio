import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaTimes, FaExpand, FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './ImageCarousel.module.scss';

export default function ImageCarousel({ images = [], autoPlay = true, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [showInfo, setShowInfo] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || !images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, images.length, interval]);

  const goToPrevious = () => {
    if (!images || images.length === 0) return;
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    if (!images || images.length === 0) return;
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const openZoom = (imageSrc, index) => {
    // Extraire le nom du fichier depuis le chemin et le rendre plus lisible
    const imageName = imageSrc.split('/').pop()
      .replace(/\.[^/.]+$/, "") // Enlever l'extension
      .replace(/[-_]/g, " ") // Remplacer tirets et underscores par des espaces
      .replace(/\b\w/g, l => l.toUpperCase()); // Capitaliser chaque mot
    
    setZoomedImage({ 
      src: imageSrc, 
      index: index + 1, 
      total: images.length,
      name: imageName
    });
    setIsPlaying(false); // Pause pendant le zoom
  };

  const closeZoom = () => {
    setZoomedImage(null);
    setShowInfo(true); // Réinitialiser l'affichage des infos
    setIsPlaying(autoPlay); // Reprendre l'autoplay si c'était activé
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  // Fermer avec Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && zoomedImage) {
        closeZoom();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage]);

  // Si pas d'images, ne rien afficher
  if (!images || images.length === 0) {
    return null;
  }

  // Si une seule image, affichage simple
  if (images.length === 1) {
    return (
      <div className={styles.carousel}>
        <div className={styles.singleImage}>
          <img src={images[0]} alt="Capture du projet" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        {/* Images principales */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img 
              src={images[currentIndex]} 
              alt={`Capture ${currentIndex + 1}`}
              className={styles.mainImage}
              onClick={() => openZoom(images[currentIndex], currentIndex)}
            />
            <button 
              className={styles.zoomButton}
              onClick={() => openZoom(images[currentIndex], currentIndex)}
              aria-label="Agrandir l'image"
            >
              <FaExpand />
            </button>
          </div>
          
          {/* Boutons navigation */}
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <FaChevronRight />
          </button>

          {/* Contrôle play/pause */}
          <button 
            className={styles.playPauseButton}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          {/* Indicateur image actuelle */}
          <div className={styles.imageCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Indicateurs dots */}
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnails pour navigation */}
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => goToSlide(index)}
              onDoubleClick={() => openZoom(image, index)}
            >
              <img src={image} alt={`Miniature ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Modal de zoom */}
      {zoomedImage && (
        <div className={styles.zoomModal} onClick={closeZoom}>
          <div className={styles.zoomModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeZoom}>
              <FaTimes />
            </button>
            <button className={styles.toggleInfoButton} onClick={toggleInfo}>
              {showInfo ? <FaEyeSlash /> : <FaEye />}
            </button>
            <div className={styles.zoomImageContainer}>
              <img 
                src={zoomedImage.src} 
                alt={`Image agrandie ${zoomedImage.index}`}
                className={styles.zoomedImage}
              />
            </div>
            {showInfo && (
              <div className={styles.zoomInfo} onClick={toggleInfo}>
                <div className={styles.imageName}>{zoomedImage.name}</div>
                <div className={styles.zoomImageCounter}>Image {zoomedImage.index} sur {zoomedImage.total}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
