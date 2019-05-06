import Scene from 'example/Scene';

/**
 * リソースの URL や命名規則のマスタ
 */
const Resource = Object.freeze({
  /**
   * マスターデータ API 情報を有するオブジェクト
   */
  Api: {
    UserBattle: (userId: number): string => {
      const query = `?userId=${userId}`;
      return `api_mock/user_battle.json${query}`;
    },
    UnitAnimation: (unitIds: number[]): string => {
      const query = unitIds.join('&unitId[]=');
      return `master/unit_animation_master.json?unitId[]=${query}`;
    },
    AllUnit: (): string => {
      return 'master/unit_master.json';
    },
    Unit: (unitIds: number[]): string => {
      const query = unitIds.join('&unitId[]=');
      return `master/unit_master.json?unitId[]=${query}`;
    },
    Castle: (castleIds: number[]): string => {
      const query = castleIds.join('&castleId[]=');
      return `master/castle_master.json?castleId[]=${query}`;
    },
    Stage: (stageId: number): string => {
      return `master/stage_master_${stageId}.json`;
    }
  },

  /**
   * シーン名から UI Graph 用のファイル名を生成
   */
  SceneUiGraph: (scene: Scene): string => {
    const snake_case = scene.constructor.name.replace(
      /([A-Z])/g,
      (s) => { return `_${s.charAt(0).toLowerCase()}`; }
    ).replace(/^_/, '');

    return `ui_graph/${snake_case}.json`;
  },

  /**
   * 静的なリソースを有するオブジェクト
   */
  Static: {
    BattleBgFores: [
      'battle/bg_1_1.png',
      'battle/bg_1_2.png',
      'battle/bg_1_3.png',
      'battle/bg_1_4.png',
      'battle/bg_1_5.png',
      'battle/bg_1_6.png',
      'battle/bg_1_7.png',
      'battle/bg_1_8.png',
      'battle/bg_1_9.png',
      'battle/bg_1_10.png'
    ],
    BattleBgMiddles: [
      'battle/bg_2_1.png',
      'battle/bg_2_2.png',
      'battle/bg_2_3.png',
      'battle/bg_2_4.png',
      'battle/bg_2_5.png',
      'battle/bg_2_6.png'
    ],
    BattleBgBacks: [
      'battle/bg_3_1.png',
      'battle/bg_3_2.png',
      'battle/bg_3_3.png'
    ]
  },

  Dynamic: {
    Unit: (unitId: number): string => {
      return `units/${unitId}.json`;
    },
    Castle: (castleId: number): string => {
      return `battle/castle/${castleId}.json`;
    },
    UnitPanel: (unitId: number): string => {
      const id = (unitId > 0) ? unitId : 'empty';
      return `ui/units_panel/button/unit_${id}.png`;
    }
  },

  TextureFrame: {
    Castle: (castleId: number, index: number = 1): PIXI.Texture => {
      return PIXI.utils.TextureCache[`base_${castleId}_${index}.png`];
    }
  },

  Audio: {
    Bgm: {
      Title: 'audio/bgm_title.mp3',
      Battle: 'audio/bgm_battle.mp3'
    },
    Se: {
      Attack1: 'audio/se_attack_1.mp3',
      Attack2: 'audio/se_attack_2.mp3',
      UnitSpawn: 'audio/se_unit_spawn.mp3',
      Win: 'audio/se_win.mp3',
      Lose: 'audio/se_lose.mp3'
    }
  },

  AnimationTypes: {
    Unit: {
      WAIT: 'wait',
      WALK: 'walk',
      ATTACK: 'attack',
      DAMAGE: 'damage'
    }
  },

  FontFamily: {
    Css: 'base.css',
    Default: 'MisakiGothic'
  }
});

export default Resource;
