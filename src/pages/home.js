import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import AnimationCard from '../containers/AnimationCard';

import tv from '../assets/tv.png';
import mobile from '../assets/mobile.jpg';
import devicePile from '../assets/device-pile-in.png';
import child from '../assets/children.png';
import videoTv from '../assets/video-tv-in-0819.m4v';
import videoDevicePile from '../assets/video-devices-in.m4v';
import downloadIcon from '../assets/download-icon.gif';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <div className="main-content">
      <section className="enjoy-on-tv-section">
        <AnimationCard
          title="Enjoy on your TV."
          subtitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          image={tv}
          imageAlt="tv"
          videoTv={videoTv}
        />
      </section>
      <section className="download-your-shows-section">
        <AnimationCard
          title="Download your shows to watch offline."
          subtitle="Save your favourites easily and always have something to watch."
          image={mobile}
          imageAlt="mobile"
          downloadIcon={downloadIcon}
        />
      </section>
      <section className="watch-everywhere-section">
        <AnimationCard
          title="Watch everywhere."
          subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image={devicePile}
          imageAlt="device pile in"
          videoDevicePile={videoDevicePile}
        />
      </section>
      <section className="children-section">
        <AnimationCard
          title="Create profiles for children."
          subtitle="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          image={child}
          imageAlt="children"
        />
      </section>
    </div>
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
