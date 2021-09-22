import { Component } from '@angular/core';

@Component({
  selector: 'app-text-descriptions',
  templateUrl: './text-descriptions.component.html',
  styleUrls: ['./text-descriptions.component.sass']
})
export class TextDescriptionsComponent {

  text = [
    `Ludwig van Beethoven composed his Horn Sonata in F major, Op. 17 in 1800 for the virtuoso horn player Giovanni Punto. 
    It was premiered with Punto as the soloist, accompanied on the piano by Beethoven himself in Vienna on April 18, 1800. 
    This work was written for the natural horn and in the cor basse idiom, i.e. Beethoven incorporates rapid arpeggios in the first and third movement as well as use of the factitious low G below the second harmonic. 
    These were all traits of cor basse playing, the genre in which Punto specialised.`,

    `The Concerto for Horn and Strings is a concerto for horn and string orchestra in three movements by the English composer Gordon Jacob. 
    The work was composed in 1951 for soloist Dennis Brain and premiered on 8 May 1951, with Jacob conducting the Riddick String Orchestra in Wigmore Hall, London. 
    The piece has been regarded as one of the most popular horn concertos of the 20th century.`,

    `Written by Franz Strauss, horn virtuoso and father to Richard Strauss, another composer who has pieces on this site.`,

    `In 1882–3 Richard Strauss wrote his Horn Concerto No. 1 in E-flat major, Op. 11, in two versions, one for piano accompaniment and one with an orchestra. (The horn part is the same.) 
    The horn concerto has become the most frequently performed horn concerto written in the 19th century.
    The premiere with piano accompaniment was given in 1883 at Munich. The premiere with orchestral accompaniment in 1885 at Meiningen.`,

    `Richard Strauss composed his Horn Concerto No. 2 in E-flat major, (TrV 283) whilst living in Vienna in 1942. 
    The work was premiered in 1943 at the Salzburg Festival and was recorded in 1944, both with solo horn Gottfried von Freiberg. 
    The score was published by Boosey & Hawkes of London in 1950. It was taken up and popularised by the British horn player Dennis Brain. 
    It has since become the most performed and recorded horn concerto of the 20th century.
    The concerto is written in a conservative style that looks back to the musical world of his teenage years as represented by his first horn concerto, which was completed in 1883. 
    Strauss follows the typical fast-slow-fast structure of classical concerti, with the three movements in E-flat major, A-flat major, and E-flat major.`,

    `Written by Paul Hindemith. While this piece is very beautiful and quite unique, it is not generally considered part of a horn soloist's standard repertoire as much as the concertos by Mozart and Strauss.`,

    `Wolfgang Amadeus Mozart's Horn Concerto No. 1 in D major, K. (412+514)/386b was written in 1791. The work is in two movements. 
    The concerto is scored for solo horn, two oboes, two bassoons, and strings. 
    This is one of two horn concertos of Mozart to include bassoons (the other is K. 447), but in this one he "treats them indifferently in the first movement." 
    It is the only one of Mozart's horn concertos to be in D major (the rest are in E-flat major) and the only one to have just two movements instead of the usual three (with the exception of the incompletely scored horn concerto, K. 370b+371).
    
    Mozart's autograph score contains, arranged in strategic places throughout the sketch of the Rondo, a bizarre written narrative in Italian almost certainly directed to Leutgeb:
    For you, Mr. Donkey—Come on—quick—get on with it—like a good fellow—be brave—Are you finished yet?—for you—beast—oh what a dissonance—Oh!—Woe is me!!—Well done, poor chap—oh, pain in the balls!—Oh God, how fast!—you make me laugh—help—take a breather—go on, go on—that's a little better—still not finished?—you awful swine!—how charming you are!—dear one!—little donkey!—ha, ha, ha—take a breath!—But do play at least one note, you prick!—Aha! Bravo, bravo, hurrah!—You're going to bore me for the fourth time, and thank God it's the last—Oh finish now, I beg of you!—Confound it—also bravura?—Bravo!—oh, a sheep bleating—you're finished?—Thank heavens!—Enough, enough!`,

    `Wolfgang Amadeus Mozart's Horn Concerto No. 2 in E-flat major, K. 417 was completed in 1783.
    The concerto is scored for solo horn and an orchestra of two oboes, two horns, and strings. 
    This is one of two horn concerti of Mozart to omit bassoons. 
    It is also one of Mozart's two horn concerti to have ripieno horns (horns included in the orchestra besides the soloist), though in contrast to K. 495, the solo horn in this one does not duplicate the first ripieno horn's part in the tutti passages.
    Mozart's good-natured ribbing of his friend is evident in the manuscript inscription "W. A. Mozart took pity on Leitgeb, ass, ox and fool in Vienna on 27 May 1783."`,

    `Wolfgang Amadeus Mozart's Horn Concerto No. 3 in E-flat major, K. 447, was completed between 1784 and 1787, during the Vienna Period.
    The composition was written as a friendly gesture for the hornist Joseph Leutgeb (his name is mentioned few times in the score), and Mozart probably did not consider it as particularly important, since he failed to enter it to the autograph catalogue of his works. 
    The autograph score remained well preserved; it is stored in the British Library in London.
    In addition to the solo horn (in E♭), the concerto is scored for 2 clarinets in B♭ (unlike the oboes used in the other horn concertos), 2 bassoons, and strings. The piece has three movements.
    The main melody of the third movement is reminiscent of the theme from the rondo of Mozart's Piano Concerto No. 22 written in 1785.`,

    `Wolfgang Amadeus Mozart's Horn Concerto No. 4 in E-flat major, K. 495 was completed in 1786.
    The work is in three movements.
    The manuscript, written in red, green, blue, and black ink, was formerly considered as a jocular attempt to rattle the intended performer, Mozart's friend Joseph Leutgeb. 
    However, recently it was suggested that the multicolored score may also be a kind of "color code".
    The last movement is a "quite obvious" example of the hunt topic, "in which the intervallic construction, featuring prominent tonic and dominant triads in the main melody, was to some degree dictated by the capability of the horn, and so was more closely allied with the original 'pure' characteristics of the 'chasse' as an open-air hunting call."
    This concerto is one of Mozart's two horn concerti to have ripieno horns (horns included in the orchestra besides the soloist), though, in contrast to K. 417, the solo horn in this one duplicates the first ripieno horn's part in the tutti passages.`,

    `This piece is simply the last movement of Mozart's Horn Quintet, written for string quartet and horn. 
    This piece is unique due to its orchestration, and is playful and reminiscient of Mozart's Horn concertos.`,

    `Horn-Lokk by Sigurd Berge is the most contemporary piece on this list. Written in 1972, this piece is for solo unaccompanied horn. 
    This piece features experimentation with tonal qualities by focusing on unconventional sounds, such as stopped horn and unusual intervals. 
    This makes this piece difficult, as there is no accompaniment to fall back on and the soloist must know these unusual intervals by heart.`,

    `Written by Dutch composer, Otto Ketting, this piece is meant to be played unaccompanied by either a horn or trumpet. 
    Interestingly, the piece is not meant to be transposed depending on which instrument is performing it, allowing for two separate interpretations of it with each being in different keys. 
    This piece has a very forlorn sound, with an excited fanfare in the middle. To me, it gives the idea of an abandoned kingdom, which at one time was glorious and triumphant, but suffered a mysterious downfall.`,

    `This piece was written by <a href='https://en.wikipedia.org/wiki/Camille_Saint-Sa%C3%ABns'>Camille Saint-Saens</a>, a French composer who is well known for many of his other compositions. 
    This piece, which has three movements with no stops in between, is a technically challenging piece for the horn soloist, demonstrating fast passages and extreme ranges of notes on the horn.
    The last movement in particular is exceptionally difficult, and is often left out by younger students of the piece.`,

    `Written by American composer, Vincent Persichetti, this piece is one among many pieces he titled "Parable" for a solo instrument. 
    He wrote a corresponding Parable for almost every orchestral instrument.
    This piece has very wide intervals for the instrument, some spanning over an octave, which is very difficult to play without a glissando on the horn.`,

    `This piece, written by Georg Philipp Telemann, is a duet for two natural horns accompanied by piano. 
    There isn't much that I'm able to find informationally on this piece, and it isn't well known in the horn community.`,

    `Written by French professor Paul Dukas, this piece was written for his students with the intention to use it for educational purposes. 
    It uses a mix of natural and valved horn, and was likely meant to show how natural horn techniques could be used on modern instruments.`
  ];

  personal = [
    "I played this piece in March of 2020 in my Junior recital on F natural horn. It has three movements in total.",
    "I played this piece in my Junior year recital at Brigham Young University as the closing piece. It consists of three movements and is one of my favorite pieces to play!",
    "I played this solo in my senior year of high school at Timpview High School. I originally intended to use it as my audition piece for admission to Brigham Young University, but I elected later to play another piece instead.",
    "I played this piece in my senior recital at BYU as a last minute replacement due to health complications related to COVID-19. The frequent opportunities for breaths allowed me to play this piece despite poor breathing capabilities.",
    `I originally intended to perform this piece as part of my senior recital at BYU, but due to breathing problems caused by COVID-19, I could not play through the piece without stopping.
    I instead elected to play Strauss's first horn concerto instead.`,
    "This is the only piece on this list that I haven't played, but I hope to do so soon!",
    "I learned this piece in my freshman year at BYU.",
    "I learned this piece during my time at BYU, in my sophomore year.",
    "I learned this piece in my freshman year at BYU.",
    "I played this piece in my senior recital at BYU in March of 2021. It is the only piece from my originally planned repertoire that I actually played in performance that night.",
    "This was the very first piece I learned at BYU in my undergrad. I played it for my first end-of-semester performance review.",
    `I meant to play this piece in my senior recital at BYU, but couldn't because of the piece's unrelenting nature. My breathing trouble made it impossible to play without stopping. 
    I instead elected to play Intrada for Solo Horn.`,
    `I played this piece in my senior recital at BYU instead of Horn-Lokk, because this piece uses silence intentionally as part of the performance. 
    This gave my lungs a chance to recover after long and unrelenting passages of notes, which is standard for an unaccompanied horn solo.`,
    "I auditioned to BYU with this piece, and left out the third movement. It's still one of my favorite pieces to play of all time, and I revisit it more often than any other piece on this list.",
    "I played this piece in my junior recital at BYU. It is my favorite unaccompanied horn piece that I have gotten to play thus far.",
    "I have played this piece often with friends as it is simple to learn on modern instruments.",
    "I learned this in my sophomore year at BYU, and it was my introduction to natural horn technique. I later grew to love the sound of natural horn and went on to play natural horn in my junior recital."
  ];

  length = [15, 23, 13, 18, 20, 20, 10, 20, 15, 18, 6, 7, 4, 10, 7, 15, 7];

  constructor() { }

}
