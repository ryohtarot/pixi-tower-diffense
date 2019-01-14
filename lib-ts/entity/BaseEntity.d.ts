import AttackableEntity from 'entity/AttackableEntity';
/**
 * 拠点のパラメータ
 */
export default class BaseEntity extends AttackableEntity {
    baseId: number;
    constructor(baseId: number, isPlayer: boolean);
}