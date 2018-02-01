import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {

    items: CartItem[] = []

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }
    //primeiro eu faco um map pegando somente o valor,depois usa o reduce o previous e o valor atual somando os dois
    //value é uma funcao do objeto para pegar o preco
    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    }

}