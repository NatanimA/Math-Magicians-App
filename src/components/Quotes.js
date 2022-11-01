// eslint-disable-next-line
import React from 'react';

const Quotes = () => {
  const quotes = [
    {
      name: '`Dalai Lama`',
      quoted: '"The purpose of our lives is to be happy."',
    },
    {
      name: '`Dalai Lama`',
      quoted: '"The purpose of our lives is to be happy."',
    },

    {
      name: 'John Lennon',
      quoted: '"Life is what happens when you\'re busy making other plans."',
    },

    {
      name: 'Stephen King',
      quoted: '"Get busy living or get busy dying."',
    },

    {
      name: 'Mae West',
      quoted: '"You only live once, but if you do it right, once is enough."',
    },

    {
      name: 'Thomas A. Edison',
      quoted: '"Many of life’s failures are people who did not realize how close they were to success when they gave up."',
    },

    {
      name: 'Albert Einstein',
      quoted: '"If you want to live a happy life, tie it to a goal, not to people or things."',
    },

    {
      name: 'Babe Ruth',
      quoted: '"Never let the fear of striking out keep you from playing the game."',
    },

    {
      name: 'Marcus Tullius Cicero',
      quoted: '“A room without books is like a body without a soul.”',
    },

    {
      name: 'Bernard M. Baruch',
      quoted: '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
    },

    {
      name: 'William W. Purkey',
      quoted: `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
    },

    {
      name: 'Dr. Seuss',
      quoted: '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”',
    },

    {
      name: 'Marilyn Monroe',
      quoted: '"“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”"',
    },

    {
      name: ' Albert Einstein',
      quoted: '"“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”"',
    },

    {
      name: 'Will Smith',
      quoted: '"Money and success don’t change people; they merely amplify what is already there."',
    },

    {
      name: 'Frank Zappa',
      quoted: '"“So many books, so little time.”"',
    },
  ];

  const index = Math.floor(Math.random() * quotes.length);
  return (
        <div className="qotes-container">
            <h1>Welcome to quotes</h1>
            <div className="quotes-body">
                <p className="quote-message">{quotes[index].quoted}</p>
                <span className="quote-name">{quotes[index].name}</span>
            </div>
        </div>
  );
};

export default Quotes;