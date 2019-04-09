import {decorate,observable,action} from "mobx";


class TortasStore{
    tortas = [{
        id     : 1,
        nombre : "Torta frita",
        imagen :"https://t1.rg.ltmcdn.com/es/images/5/7/0/img_tortas_fritas_con_levadura_61075_600_square.jpg",
    },{
        id     : 2,
        nombre : "Torta Dulce",
        imagen :"https://placeralplato.com/files/2016/09/Torta-helada-de-dulce-de-leche-receta-paso-a-paso-e1473344944813.jpg",
    }];

    agregarTortas = (torta)=>{
        this.tortas.push(torta)
    }
}


decorate(TortasStore,{
    tortas:observable,
    agregarTortas : action
}) ;

const tortasStore = new TortasStore();


export default tortasStore;