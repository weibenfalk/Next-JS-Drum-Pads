import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
// Components
import Drum from './components/Drum';

const drumTypes = [
  {
    type: 'kick',
    sound: '/sounds/kick.mp3'
  },
  {
    type: 'snare',
    sound: '/sounds/snare.mp3'
  },
  {
    type: 'hihat',
    sound: '/sounds/hihat.mp3'
  },
  {
    type: 'tom',
    sound: '/sounds/tom.mp3'
  },
  {
    type: 'cymbal',
    sound: '/sounds/cymbal.mp3'
  },
  {
    type: 'cowBell',
    sound: '/sounds/cowbell.mp3'
  }
];

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PadsWrapper = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Home: React.FC = () => {
  const [drums] = useState(drumTypes);

  const handlePlayDrum = (sound: string): void => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <Wrapper>
      <Head>
        <title>Next JS Drum Machine</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PadsWrapper>
        {drums.map(drum => (
          <Drum
            key={drum.type}
            drumType={drum.type}
            onClick={() => handlePlayDrum(drum.sound)}
          />
        ))}
      </PadsWrapper>
    </Wrapper>
  );
};

export default Home;
