import {Tags} from '../../Tags';
import {Player} from '../../../Player';
import {PreludeCard} from '../../prelude/PreludeCard';
import {CardName} from '../../../CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class SmeltingPlantRebalanced extends PreludeCard {
  constructor() {
    super({
      name: CardName.SMELTING_PLANT_REBALANCED,
      tags: [Tags.BUILDING],

      metadata: {
        cardNumber: 'P30',
        renderData: CardRenderer.builder((b) => {
          b.oxygen(2).br;
          b.steel(6);
        }),
        description: 'Raise oxygen 2 steps. Gain 6 steel.',
      },
    });
  }
  public play(player: Player) {
    player.steel += 6;
    return player.game.increaseOxygenLevel(player, 2);
  }
}
