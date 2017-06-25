import { Podcast } from './podcast';

export const PODCASTS: Podcast[] = [
  {
    id: 1,
    name: 'The Joe Rogan Experience',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/425/425')
  },
  {
    id: 2,
    name: 'The Morning Stream',
    feed: new URL('http://podcast.domain/rss'),
    artwork: null
  },
  {
    id: 3,
    name: 'Current Geek',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/275/275')
  },
  {
    id: 4,
    name: 'Coverville',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/325/325')
  },
  {
    id: 5,
    name: 'Film Sack',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/200/200')
  },
  {
    id: 6,
    name: 'Radio Lab',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/400/400')
  },
  {
    id: 7,
    name: 'Snap Judgement',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/300/300')
  },
  {
    id: 8,
    name: 'Crimetown',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/350/350')
  },
  {
    id: 9,
    name: 'Monstercat',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/375/375')
  },
  {
    id: 10,
    name: 'This American Life',
    feed: new URL('http://podcast.domain/rss'),
    artwork: new URL('http://placecage.com/250/250')
  }
];
