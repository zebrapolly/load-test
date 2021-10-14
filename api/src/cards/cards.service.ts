import { Injectable } from '@nestjs/common';

@Injectable()
export class CardsService {
    private cards: Map<string, { [key:string]: number }> = new Map();

    addProduct(userId: string, productId: string) {
        let card;
        if (!this.cards.has(userId)) {
            this.cards.set(userId, { [ productId ] : 0 } )
        }
        card = this.cards.get(userId);
        if (card[productId]) {
            card[productId] = card[productId] + 1
        } else {
            card[productId] = 1;
        }
        return card;
    }

    get(userId: string) {
        return this.cards.get(userId);
    }
}
