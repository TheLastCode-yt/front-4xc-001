'use client';
import { useState } from 'react';
import ButtonOrLink from './ButtonOrLink';
import Image from 'next/image';
import ArrowSvg from './layout/ArrowSvg';

const AchievementsSection = () => {
  const achievementItems = [
    { title: '', subtitle: '', text: '', carouselText: '' },
  ];
  return (
    <section>
      <div className="container mx-auto"></div>
    </section>
  );
};

const AchievementsCard = ({ title, subtitle, text, carouselText }) => {};

export default AchievementsSection;
