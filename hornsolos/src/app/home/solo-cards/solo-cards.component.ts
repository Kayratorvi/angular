import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo-cards',
  templateUrl: './solo-cards.component.html',
  styleUrls: ['./solo-cards.component.sass']
})
export class SoloCardsComponent implements OnInit {

  hornSolos = [{
    songTitle: "Sonata for Horn and Piano",
    composer: "Ludwig van Beethoven",
    recording: "https://youtu.be/mlKJ9CjSv_U?t=161",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEp3HNXH45CemAVHsY?e=iBbOQT",
    png: "./assets/images/beethoven_sonata.png",
    divId: 0,
    txt: "./assets/txt_files/beethoven_sonata.txt"
},{
    songTitle: "Concerto for Horn and Strings",
    composer: "Gordon Jacob",
    recording: "https://youtu.be/v7Gp7hWRMrg",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzOQkc3rfTnLm7R2?e=comdpb",
    png: "./assets/images/jacob_concerto.png",
    divId: 1,
    txt: "./assets/txt_files/jacob_concerto.txt"
},{
    songTitle: "Concerto Op. 8",
    composer: "Franz Strauss",
    recording: "https://youtu.be/LPkiSzUqAgM",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzt-NWEItdaI1wkv?e=gKRIZu",
    png: "./assets/images/franz_strauss_concerto.png",
    divId: 2,
    txt: "./assets/txt_files/franz_strauss_concerto.txt"
},{
    songTitle: "Concerto no. 1 in Eb Major",
    composer: "Richard Strauss",
    recording: "https://youtu.be/s68W8KDp5eM",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzmVw41GSqtiBx-Z?e=qQtVUE",
    png: "./assets/images/richard_strauss_concerto_no1.png",
    divId: 3,
    txt: "./assets/txt_files/richard_strauss_concerto_no1.txt"
},{
    songTitle: "Concerto no. 2 in Eb Major",
    composer: "Richard Strauss",
    recording: "https://youtu.be/QWI8xrbbOQk",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrE50CGnV8fpdIY1aiP?e=snqJ6e",
    png: "./assets/images/richard_strauss_concerto_no2.png",
    divId: 4,
    txt: "./assets/txt_files/richard_strauss_concerto_no2.txt"
},{
    songTitle: "Sonata for Horn and Piano",
    composer: "Paul Hindemith",
    recording: "https://youtu.be/dghhzQ6pV5g",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEywfOz2SNx7Jf_y11?e=o9N9X5",
    png: "./assets/images/hindemith_sonata.png",
    divId: 5,
    txt: "./assets/txt_files/hindemith_sonata.txt"
},{
    songTitle: "Concerto no. 1 in D Major",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/hQ0X44TuCnc?t=5",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzSpI-7X16ftJRwy?e=0BWKeV",
    png: "./assets/images/mozart_concerto_1.png",
    divId: 6,
    txt: "./assets/txt_files/mozart_concerto_1.txt"
},{
    songTitle: "Concerto no. 2 in Eb Major",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/hQ0X44TuCnc?t=755",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzW8lCcx_YsHeVy7?e=w9wBR5",
    png: "./assets/images/mozart_concerto_2.png",
    divId: 7,
    txt: "./assets/txt_files/mozart_concerto_2.txt"
},{
    songTitle: "Concerto no. 3 in Eb Major",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/hQ0X44TuCnc?t=1553",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzaRTez_VwvcVmxg?e=dlPS09",
    png: "./assets/images/mozart_concerto_3.png",
    divId: 8,
    txt: "./assets/txt_files/mozart_concerto_3.txt"
},{
    songTitle: "Concerto no. 4 in Eb Major",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/hQ0X44TuCnc?t=2430",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzenTQSsA3v-fpcB?e=nuoQqh",
    png: "./assets/images/mozart_concerto_4.png",
    divId: 9,
    txt: "./assets/txt_files/mozart_concerto_4.txt"
},{
    songTitle: "Horn Quintet: Rondo",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/dFw4YWJ-pIc?t=522",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrE3WFq7P-dd0VQZ0Af?e=smCs47",
    png: "./assets/images/mozart_quintet_rondo.png",
    divId: 10,
    txt: "./assets/txt_files/mozart_quintet_rondo.txt"
},{
    songTitle: "Horn-lokk",
    composer: "Sigurd Berge",
    recording: "https://youtu.be/XF2q3PqK_LU",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEgehRnM_BQdtDmmylaQ?e=VeSuOr",
    png: "./assets/images/horn-lokk.png",
    divId: 11,
    txt: "./assets/txt_files/horn-lokk.txt"
},{
    songTitle: "Intrada for Solo Horn",
    composer: "Otto Ketting",
    recording: "https://youtu.be/UVcCBOJu748",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEsiq6XrbRCYw0y-7l?e=pq8Edj",
    png: "./assets/images/intrada.png",
    divId: 12,
    txt: "./assets/txt_files/intrada.txt"
},{
    songTitle: "Morceau de Concert",
    composer: "Camille Saint-Saens",
    recording: "https://youtu.be/hT-rV9UmTnA",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEsiuNHhVgZT8J3ojp?e=inK8wY",
    png: "./assets/images/morceau_de_concert.png",
    divId: 13,
    txt: "./assets/txt_files/morceau_de_concert.txt"
},{
    songTitle: "Parable VIII for Solo Horn",
    composer: "Vincent Persichetti",
    recording: "https://youtu.be/ViEjfDcfd8g",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEywkv1hGtxHlL_Z-L?e=cmFW6B",
    png: "./assets/images/parable.png",
    divId: 14,
    txt: "./assets/txt_files/parable.txt"
},{
    songTitle: "Suite in F Major for Two Horns",
    composer: "Georg Philipp Telemann",
    recording: "https://youtu.be/1RW_A_43nKs",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEywin5J4etVZXCFUJ?e=r4GCcf",
    png: "./assets/images/suite_duet_in_f.png",
    divId: 15,
    txt: "./assets/txt_files/suite_duet_in_f.txt"
},{
    songTitle: "Villanelle",
    composer: "Paul Dukas",
    recording: "https://youtu.be/FKQbfOEDPVo",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzrGKbFOEiWHIzWG?e=tKmwwp",
    png: "./assets/images/villanelle.png",
    divId: 16,
    txt: "./assets/txt_files/villanelle.txt"
}];

  constructor() { }

  ngOnInit(): void {
  }

}
