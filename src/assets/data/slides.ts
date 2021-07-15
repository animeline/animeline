import {Hello} from '../images/svg/hello';
import {Camping} from '../images/svg/camping';
import {LovingIt} from '../images/svg/loving-it';
import {Celebration} from '../images/svg/celebration';

export const slides = [
  {
    id: 1,
    title: 'Olá, seja\nBem-vindo!',
    description:
      'Obrigado(a) por baixar o Animeline. Aqui você vai poder assistir animes gratuitamente\nsem nenhum tipo de anúncios!',
    image: Hello,
    withButton: false,
  },
  {
    id: 2,
    title: 'Favorite seus\nAnimes!',
    description:
      'Que tal maratonar um Anime? Favorite ses Animes e\neconomize alguns clicks :3',
    image: LovingIt,
    withButton: false,
  },
  {
    id: 3,
    title: 'Assista em\nqualquer lugar!',
    description:
      'Bora dar aquela descontraida no meio do nada assistindo\num belo anime?!',
    image: Camping,
    withButton: false,
  },
  {
    id: 4,
    title: 'Bora assistir\num anime?',
    description: 'Não perca tempo,\nassista agora mesmo!',
    image: Celebration,
    withButton: true,
  },
];
