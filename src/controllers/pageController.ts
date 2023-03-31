import { Request, Response } from "express";

import {Pet} from '../models/pet';

import {createMenuObjects} from '../helpers/createMenuObjects';

export const home = (req: Request, res: Response) => {
   let list = Pet.getALL();

    res.render('pages/page', {
        menu: createMenuObjects(''),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromtype('dog')

    res.render('pages/page', {
        menu: createMenuObjects('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromtype('cat')
    
    res.render('pages/page', {
        menu: createMenuObjects('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromtype('fish')
   
    res.render('pages/page', {
        menu: createMenuObjects('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}