import { type CompleteMenu, FilterCategories } from './types.ts';

import biryaniRice from './assets/foods/indian-food.jpg';
import suco from './assets/drinks/drink.jpg';
import sliceChoc from './assets/foods/slice-choc.jpg';

import biryani from './assets/foods/biryani.jpg';
import margheritaPizza from './assets/foods/margherita-pizza.jpg';
import steakFrites from './assets/foods/steak-frites.jpg';
import chickenCurry from './assets/foods/chicken-curry.jpg';
import misoRamen from './assets/foods/miso-ramen.jpg';
import beefTacos from './assets/foods/beef-tacos.jpg';
import caesarSalad from './assets/foods/caesar-salad.jpg';
import spaghettiCarbonara from './assets/foods/spaghetti-carbonara.jpg';
import sushiRollPlatter from './assets/foods/sushi-roll-platter.jpg';
import veganBuddhaBowl from './assets/foods/vegan-buddha-bowl.jpg';
import seafoodPaella from './assets/foods/seafood-paella.jpg';
import lobsterBisque from './assets/foods/lobster-bisque.jpg';
import mushroomRisotto from './assets/foods/mushroom-risotto.jpg';

import chocolateBrownie from './assets/desserts/chocolate-brownie.jpg';
import lemonCheesecake from './assets/desserts/lemon-cheesecake.jpg';
import burntBasque from './assets/desserts/burnt-basque.jpg';
import pancakeStack from './assets/desserts/pancake-stack.jpg';
import pudim from './assets/desserts/pudim.jpg';

import orangeJuice from './assets/drinks/orange-juice.jpg';
import strawberryJuice from './assets/drinks/strawberry-juice.jpg';
import lemonade from './assets/drinks/lemonade.jpg';
import refriCola from './assets/drinks/refrigerante-cola.jpg';

export const foodOptions = [
  {
    title: 'Pratos',
    image: biryaniRice,
    alt: 'Prato indiano',
  },
  {
    title: 'Bebidas',
    image: suco,
    alt: 'Suco de Laranja',
  },
  {
    title: 'Sobremesas',
    image: sliceChoc,
    alt: 'Bolo de chocolate',
  },
];

export const allCategories: FilterCategories[] = [
  { categ: 'all', label: 'Todos' },
  { categ: 'dish', label: 'Pratos' },
  { categ: 'drink', label: 'Bebidas' },
  { categ: 'dessert', label: 'Sobremesas' },
];

export const menuHome = [
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    price: 34.99,
    description:
      'Uma pizza clássica com mussarela fresca, tomate e manjericão em uma crosta fina e crocante.',
    image: margheritaPizza,
  },
  {
    id: 'steak-frites',
    name: 'Steak Frites',
    price: 32.99,
    description:
      'Suculento bife preparado a seu gosto, servido com batatas fritas crocantes e douradas e manteiga de ervas.',
    image: steakFrites,
  },
  {
    id: 'chicken-curry',
    name: 'Chicken Curry',
    price: 32.99,
    description:
      'Deliciosos pedaços de frango cozidos em um rico e aromático molho de curry, servidos com arroz basmati.',
    image: chickenCurry,
  },
  {
    id: 'miso-ramen',
    name: 'Miso Ramen',
    price: 29.99,
    description:
      'Uma tigela quente de ramen com caldo de missô, carne de porco tenra, ovo cozido e cebolinha.',
    image: misoRamen,
  },
  {
    id: 'beef-tacos',
    name: 'Beef Tacos',
    price: 26.99,
    description:
      'Três tortilhas macias recheadas com carne temperada, molho fresco, queijo e creme de leite.',
    image: beefTacos,
  },
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Brownie',
    price: 15.99,
    description:
      'Um brownie rico e cremoso, coberto com uma bola de sorvete de baunilha e calda de chocolate.',
    image: chocolateBrownie,
  },
];

export const menuDishes: CompleteMenu[] = [
  {
    id: 'biryani-rice',
    name: 'Biryani Rice',
    price: 35.99,
    alt: 'Biryani é um prato de arroz típico da Índia, com batatas, cebola, alho e gengibre esmagados, com carne de frango.',
    image: biryani,
    category: 'dish',
  },
  {
    id: 'steak-frites',
    name: 'Steak Frites',
    price: 32.99,
    alt: 'Suculento bife servido com batatas fritas crocantes e douradas e manteiga de ervas.',
    image: steakFrites,
    category: 'dish',
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    price: 34.99,
    alt: 'Uma pizza com mussarela fresca, tomate e manjericão em uma crosta fina e crocante.',
    image: margheritaPizza,
    category: 'dish',
  },
  {
    id: 'chicken-curry',
    name: 'Chicken Curry',
    price: 32.99,
    alt: 'Deliciosos pedaços de frango cozidos em um rico e aromático molho de curry, servidos com arroz basmati.',
    image: chickenCurry,
    category: 'dish',
  },
  {
    id: 'miso-ramen',
    name: 'Miso Ramen',
    price: 29.99,
    alt: 'Uma tigela quente de ramen com caldo de missô, carne de porco tenra, ovo cozido e cebolinha.',
    image: misoRamen,
    category: 'dish',
  },
  {
    id: 'beef-tacos',
    name: 'Beef Tacos',
    price: 26.99,
    alt: 'Três tortilhas macias recheadas com carne temperada, molho fresco, queijo e creme de leite.',
    image: beefTacos,
    category: 'dish',
  },
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    price: 17.99,
    alt: 'Alface romana temperada com molho César, coberta com croutons e lascas de parmesão.',
    image: caesarSalad,
    category: 'dish',
  },
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    price: 20.99,
    alt: 'Espaguete Al dente com molho cremoso feito de gema de ovo, queijo pecorino, pancetta e pimenta.',
    image: spaghettiCarbonara,
    category: 'dish',
  },
  {
    id: 'sushi-roll-platter',
    name: 'Sushi Roll Platter',
    price: 24.99,
    alt: 'Uma variedade de rolos de sushi frescos, incluindo Califórnia, Atum Picante e Abacate de Enguia.',
    image: sushiRollPlatter,
    category: 'dish',
  },
  {
    id: 'vegan-buddha-bowl',
    name: 'Vegan Buddha Bowl',
    price: 27.99,
    alt: 'Uma tigela farta cheia de quinoa, vegetais assados, abacate e molho de tahine.',
    image: veganBuddhaBowl,
    category: 'dish',
  },
  {
    id: 'seafood-paella',
    name: 'Seafood Paella',
    price: 39.99,
    alt: 'Uma iguaria Espanhola recheada com arroz com infusão de açafrão, camarão, mexilhões e chouriço.',
    image: seafoodPaella,
    category: 'dish',
  },
  {
    id: 'lobster-bisque',
    name: 'Lobster Bisque',
    price: 30.99,
    alt: 'Uma sopa cremosa feita com caldo de lagosta, vegetais aromáticos e um toque de conhaque.',
    image: lobsterBisque,
    category: 'dish',
  },
  {
    id: 'mushroom-risotto',
    name: 'Mushroom Risotto',
    price: 33.99,
    alt: 'Arroz Arborio cremoso cozido com uma mistura de cogumelos selvagens e finalizado com parmesão.',
    image: mushroomRisotto,
    category: 'dish',
  },
  {
    id: 'lemon-cheesecake',
    name: 'Lemon Cheesecake',
    price: 13.99,
    alt: 'Um cheesecake cremoso com sabor picante de limão, servido sobre uma base de biscoito quebradiço.',
    image: lemonCheesecake,
    category: 'dessert',
  },
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Brownie',
    price: 15.99,
    alt: 'Um brownie rico e cremoso, coberto com uma bola de sorvete de baunilha e calda de chocolate.',
    image: chocolateBrownie,
    category: 'dessert',
  },
  {
    id: 'burnt-basque',
    name: 'Burnt Basque',
    price: 15.99,
    alt: 'Burnt Basque cheesecake',
    image: burntBasque,
    category: 'dessert',
  },
  {
    id: 'pancake-stack',
    name: 'Pancake Stack',
    price: 30.99,
    alt: 'Panquecas fofas empilhadas, regadas com xarope de bordo e cobertas com frutas frescas e mel.',
    image: pancakeStack,
    category: 'dessert',
  },
  {
    id: 'pudim',
    name: 'Pudim',
    price: 25.99,
    alt: 'Pudim delicioso',
    image: pudim,
    category: 'dessert',
  },
  {
    id: 'suco-laranja',
    name: 'Suco de Laranja',
    price: 7.99,
    alt: 'Suco de laranja',
    image: orangeJuice,
    category: 'drink',
  },
  {
    id: 'suco-morango',
    name: 'Suco de Morango',
    price: 7.99,
    alt: 'Suco de Morango',
    image: strawberryJuice,
    category: 'drink',
  },

  {
    id: 'limonada',
    name: 'Limonada',
    price: 8.99,
    alt: 'Limonada',
    image: lemonade,
    category: 'drink',
  },
  {
    id: 'refri-cola',
    name: 'Refrigerante Cola',
    price: 10.99,
    alt: 'Refrigerante sabor Cola',
    image: refriCola,
    category: 'drink',
  },
];
