// router.js
import { createRouter, createWebHistory } from 'vue-router';
import { useLoadingStore } from '@/store/loading';
import HomeView from './views/HomeView.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'HomeView',
        component: HomeView,
        redirect: '/weapon',
        children: [
            {
                path: '/weapon',
                name: 'WeaponView',
                component: () => import('./views/WeaponView.vue'),
                redirect: '/weapon/WornShortsword',
                children: [
                    {
                        path: '/weapon/WornShortsword',
                        name: 'WornShortswordView',
                        component: () => import('./views/weapon/WornShortsword.vue')
                    },
                    {
                        path: '/weapon/StuddedGloves',
                        name: 'StuddedGloves',
                        component: () => import('./views/weapon/StuddedGloves.vue')
                    },
                    {
                        path: '/weapon/Dagger',
                        name: 'DaggerView',
                        component: () => import('./views/weapon/DaggerView.vue')
                    },
                    {
                        path: '/weapon/MageStaff',
                        name: 'MageStaff',
                        component: () => import('./views/weapon/MageStaff.vue')
                    },
                    {
                        path: '/weapon/RapierView',
                        name: 'RapierView',
                        component: () => import('./views/weapon/RapierView.vue')
                    },
                    {
                        path: '/weapon/ShortSword',
                        name: 'ShortSword',
                        component: () => import('./views/weapon/ShortSword.vue')
                    },
                    {
                        path: '/weapon/HandAxe',
                        name: 'HandAxe',
                        component: () => import('./views/weapon/HandAxe.vue')
                    },
                    {
                        path: '/weapon/SpearView',
                        name: 'SpearView',
                        component: () => import('./views/weapon/SpearView.vue')
                    },
                    {
                        path: '/weapon/QuarterstaffView',
                        name: 'QuarterstaffView',
                        component: () => import('./views/weapon/QuarterstaffView.vue')
                    },
                    {
                        path: '/weapon/DirkView',
                        name: 'DirkView',
                        component: () => import('./views/weapon/DirkView.vue')
                    },
                    {
                        path: '/weapon/SickleView',
                        name: 'SickleView',
                        component: () => import('./views/weapon/SickleView.vue')
                    },
                    {
                        path: '/weapon/SwordView',
                        name: 'SwordView',
                        component: () => import('./views/weapon/SwordView.vue')
                    },
                    {
                        path: '/weapon/MaceView',
                        name: 'MaceView',
                        component: () => import('./views/weapon/MaceView.vue')
                    },
                    {
                        path: '/weapon/ScimitarView',
                        name: 'ScimitarView',
                        component: () => import('./views/weapon/ScimitarView.vue')
                    },
                    {
                        path: '/weapon/RoundShield',
                        name: 'RoundShield',
                        component: () => import('./views/weapon/RoundShield.vue')
                    },
                    {
                        path: '/weapon/SaiView',
                        name: 'SaiView',
                        component: () => import('./views/weapon/SaiView.vue')
                    },
                    {
                        path: '/weapon/WhipView',
                        name: 'WhipView',
                        component: () => import('./views/weapon/WhipView.vue')
                    },
                    {
                        path: '/weapon/KatanaView',
                        name: 'KatanaView',
                        component: () => import('./views/weapon/KatanaView.vue')
                    },
                    {
                        path: '/weapon/LongSword',
                        name: 'LongSword',
                        component: () => import('./views/weapon/LongSword.vue')
                    },
                    {
                        path: '/weapon/BattleAxe',
                        name: 'BattleAxe',
                        component: () => import('./views/weapon/BattleAxe.vue')
                    },
                    {
                        path: '/weapon/FlailView',
                        name: 'FlailView',
                        component: () => import('./views/weapon/FlailView.vue')
                    },
                    {
                        path: '/weapon/RunicBlade',
                        name: 'RunicBlade',
                        component: () => import('./views/weapon/RunicBlade.vue')
                    },
                    {
                        path: '/weapon/AssassinsBlade',
                        name: 'AssassinsBlade',
                        component: () => import('./views/weapon/AssassinsBlade.vue')
                    },
                    {
                        path: '/weapon/CrossbowView',
                        name: 'CrossbowView',
                        component: () => import('./views/weapon/CrossbowView.vue')
                    },
                    {
                        path: '/weapon/WarScythe',
                        name: 'WarScythe',
                        component: () => import('./views/weapon/WarScythe.vue')
                    },
                    {
                        path: '/weapon/GreatSword',
                        name: 'GreatSword',
                        component: () => import('./views/weapon/GreatSword.vue')
                    },
                    {
                        path: '/weapon/WarHammer',
                        name: 'WarHammer',
                        component: () => import('./views/weapon/WarHammer.vue')
                    },
                    {
                        path: '/weapon/GlaiveView',
                        name: 'GlaiveView',
                        component: () => import('./views/weapon/GlaiveView.vue')
                    },
                    {
                        path: '/weapon/GreatAxe',
                        name: 'GreatAxe',
                        component: () => import('./views/weapon/GreatAxe.vue')
                    },
                    {
                        path: '/weapon/GreatShield',
                        name: 'GreatShield',
                        component: () => import('./views/weapon/GreatShield.vue')
                    },
                    {
                        path: '/weapon/StoneGauntlet',
                        name: 'StoneGauntlet',
                        component: () => import('./views/weapon/StoneGauntlet.vue')
                    },
                    {
                        path: '/weapon/DuelistAbility',
                        name: 'DuelistAbility',
                        component: () => import('./views/weapon/DuelistAbility.vue')
                    },
                    {
                        path: '/weapon/CommonWeaponench',
                        name: 'CommonWeaponench',
                        component: () => import('./views/weapon/CommonWeaponench.vue')
                    },
                    {
                        path: '/weapon/ScarceWeaponench',
                        name: 'ScarceWeaponench',
                        component: () => import('./views/weapon/ScarceWeaponench.vue')
                    },
                    {
                        path: '/weapon/RareWeaponench',
                        name: 'RareWeaponench',
                        component: () => import('./views/weapon/RareWeaponench.vue')
                    },
                    {
                        path: '/weapon/CurseWeaponench',
                        name: 'CurseWeaponench',
                        component: () => import('./views/weapon/CurseWeaponench.vue')
                    },
                    {
                        path: '/weapon/MissileDart',
                        name: 'MissileDart',
                        component: () => import('./views/weapon/MissileDart.vue')
                    },
                    {
                        path: '/weapon/MissileDarttipped',
                        name: 'MissileDarttipped',
                        component: () => import('./views/weapon/MissileDarttipped.vue')
                    },
                    {
                        path: '/weapon/MissileStone',
                        name: 'MissileStone',
                        component: () => import('./views/weapon/MissileStone.vue')
                    },
                    {
                        path: '/weapon/MissileKnife',
                        name: 'MissileKnife',
                        component: () => import('./views/weapon/MissileKnife.vue')
                    },
                    {
                        path: '/weapon/MissileFishing',
                        name: 'MissileFishing',
                        component: () => import('./views/weapon/MissileFishing.vue')
                    },
                    {
                        path: '/weapon/MissileShuriken',
                        name: 'MissileShuriken',
                        component: () => import('./views/weapon/MissileShuriken.vue')
                    },
                    {
                        path: '/weapon/MissileClub',
                        name: 'MissileClub',
                        component: () => import('./views/weapon/MissileClub.vue')
                    },
                    {
                        path: '/weapon/MissileSpear',
                        name: 'MissileSpear',
                        component: () => import('./views/weapon/MissileSpear.vue')
                    },
                    {
                        path: '/weapon/MissileKunai',
                        name: 'MissileKunai',
                        component: () => import('./views/weapon/MissileKunai.vue')
                    },
                    {
                        path: '/weapon/MissileBolas',
                        name: 'MissileBolas',
                        component: () => import('./views/weapon/MissileBolas.vue')
                    },
                    {
                        path: '/weapon/MissileJavelin',
                        name: 'MissileJavelin',
                        component: () => import('./views/weapon/MissileJavelin.vue')
                    },
                    {
                        path: '/weapon/MissileBoomerang',
                        name: 'MissileBoomerang',
                        component: () => import('./views/weapon/MissileBoomerang.vue')
                    },
                    {
                        path: '/weapon/MissileAxe',
                        name: 'MissileAxe',
                        component: () => import('./views/weapon/MissileAxe.vue')
                    },
                    {
                        path: '/weapon/MissileHammer',
                        name: 'MissileHammer',
                        component: () => import('./views/weapon/MissileHammer.vue')
                    },
                    {
                        path: '/weapon/MissileTrident',
                        name: 'MissileTrident',
                        component: () => import('./views/weapon/MissileTrident.vue')
                    },
                    {
                        path: '/weapon/MissileCube',
                        name: 'MissileCube',
                        component: () => import('./views/weapon/MissileCube.vue')
                    },
                    {
                        path: '/weapon/MissileSpiritbow',
                        name: 'MissileSpiritbow',
                        component: () => import('./views/weapon/MissileSpiritbow.vue')
                    }

                ]
            },

            {
                path: '/armor',
                name: 'ArmorView',
                component: () => import('./views/ArmorView.vue'),
                redirect: '/armor/ClothView',
                children: [
                    {
                        path: '/armor/ClothView',
                        name: 'ClothView',
                        component: () => import('./views/armor/ClothView.vue')
                    },
                    {
                        path: '/armor/LeatherView',
                        name: 'LeatherView',
                        component: () => import('./views/armor/LeatherView.vue')
                    },
                    {
                        path: '/armor/MailView',
                        name: 'MailView',
                        component: () => import('./views/armor/MailView.vue')
                    },
                    {
                        path: '/armor/ScaleView',
                        name: 'ScaleView',
                        component: () => import('./views/armor/ScaleView.vue')
                    },
                    {
                        path: '/armor/PlateView',
                        name: 'PlateView',
                        component: () => import('./views/armor/PlateView.vue')
                    },
                    {
                        path: '/armor/EpicView',
                        name: 'EpicView',
                        component: () => import('./views/armor/EpicView.vue')
                    },
                    {
                        path: '/armor/ArmorCommonglyph',
                        name: 'ArmorCommonglyph',
                        component: () => import('./views/armor/ArmorCommonglyph.vue')
                    },
                    {
                        path: '/armor/ArmorScarceglyph',
                        name: 'ArmorScarceglyph',
                        component: () => import('./views/armor/ArmorScarceglyph.vue')
                    },
                    {
                        path: '/armor/ArmorRareglyph',
                        name: 'ArmorRareglyph',
                        component: () => import('./views/armor/ArmorRareglyph.vue')
                    },
                    {
                        path: '/armor/ArmorCurseglyph',
                        name: 'ArmorCurseglyph',
                        component: () => import('./views/armor/ArmorCurseglyph.vue')
                    }
                ]
            },
            {
                path: '/wand',
                name: 'WandView',
                component: () => import('./views/WandView.vue'),
                redirect: '/wand/WandBlastwave',
                children: [
                    {
                        path: '/wand/WandBlastwave',
                        name: 'WandBlastwave',
                        component: () => import('./views/wand/WandBlastwave.vue')
                    },
                    {
                        path: '/wand/WandCorrosion',
                        name: 'WandCorrosion',
                        component: () => import('./views/wand/WandCorrosion.vue')
                    },
                    {
                        path: '/wand/WandCorruption',
                        name: 'WandCorruption',
                        component: () => import('./views/wand/WandCorruption.vue')
                    },
                    {
                        path: '/wand/WandBeam',
                        name: 'WandBeam',
                        component: () => import('./views/wand/WandBeam.vue')
                    },
                    {
                        path: '/wand/WandFireblast',
                        name: 'WandFireblast',
                        component: () => import('./views/wand/WandFireblast.vue')
                    },
                    {
                        path: '/wand/WandForst',
                        name: 'WandForst',
                        component: () => import('./views/wand/WandForst.vue')
                    },
                    {
                        path: '/wand/WandLightning',
                        name: 'WandLightning',
                        component: () => import('./views/wand/WandLightning.vue')
                    },
                    {
                        path: '/wand/WandSoil',
                        name: 'WandSoil',
                        component: () => import('./views/wand/WandSoil.vue')
                    },
                    {
                        path: '/wand/WandMagicmissile',
                        name: 'WandMagicmissile',
                        component: () => import('./views/wand/WandMagicmissile.vue')
                    },
                    {
                        path: '/wand/WandLight',
                        name: 'WandLight',
                        component: () => import('./views/wand/WandLight.vue')
                    },
                    {
                        path: '/wand/WandGrass',
                        name: 'WandGrass',
                        component: () => import('./views/wand/WandGrass.vue')
                    },
                    {
                        path: '/wand/WandTransfusion',
                        name: 'WandTransfusion',
                        component: () => import('./views/wand/WandTransfusion.vue')
                    },
                    {
                        path: '/wand/WandWarding',
                        name: 'WandWarding',
                        component: () => import('./views/wand/WandWarding.vue')
                    }

                ]
            },
            {
                path: '/ring',
                name: 'RingView',
                component: () => import('./views/RingView.vue'),
                redirect: '/ring/RingAccuracy',
                children: [
                    {
                        path: '/ring/RingAccuracy',
                        name: 'RingAccuracy',
                        component: () => import('./views/ring/RingAccuracy.vue')
                    },
                    {
                        path: '/ring/RingElement',
                        name: 'RingElement',
                        component: () => import('./views/ring/RingElement.vue')
                    },
                    {
                        path: '/ring/RingArcana',
                        name: 'RingArcana',
                        component: () => import('./views/ring/RingArcana.vue')
                    },
                    {
                        path: '/ring/RingEnergy',
                        name: 'RingEnergy',
                        component: () => import('./views/ring/RingEnergy.vue')
                    },
                    {
                        path: '/ring/RingEvasion',
                        name: 'RingEvasion',
                        component: () => import('./views/ring/RingEvasion.vue')
                    },
                    {
                        path: '/ring/RingForce',
                        name: 'RingForce',
                        component: () => import('./views/ring/RingForce.vue')
                    },
                    {
                        path: '/ring/RingFuror',
                        name: 'RingFuror',
                        component: () => import('./views/ring/RingFuror.vue')
                    },
                    {
                        path: '/ring/RingHaste',
                        name: 'RingHaste',
                        component: () => import('./views/ring/RingHaste.vue')
                    },
                    {
                        path: '/ring/RingMight',
                        name: 'RingMight',
                        component: () => import('./views/ring/RingMight.vue')
                    },
                    {
                        path: '/ring/RingShoot',
                        name: 'RingShoot',
                        component: () => import('./views/ring/RingShoot.vue')
                    },
                    {
                        path: '/ring/RingTenacity',
                        name: 'RingTenacity',
                        component: () => import('./views/ring/RingTenacity.vue')
                    },
                    {
                        path: '/ring/RingWealth',
                        name: 'RingWealth',
                        component: () => import('./views/ring/RingWealth.vue')
                    }

                ]
            },
            {
                path: '/artifact',
                name: 'ArtifactView',
                component: () => import('./views/ArtifactView.vue'),
                redirect: '/artifact/ToolkitView',
                children: [
                    {
                        path: '/artifact/ToolkitView',
                        name: 'ToolkitView',
                        component: () => import('./views/artifact/ToolkitView.vue')
                    },
                    {
                        path: '/artifact/ChaliceView',
                        name: 'ChaliceView',
                        component: () => import('./views/artifact/ChaliceView.vue')
                    },
                    {
                        path: '/artifact/CloakView',
                        name: 'CloakView',
                        component: () => import('./views/artifact/CloakView.vue')
                    },
                    {
                        path: '/artifact/RoseView',
                        name: 'RoseView',
                        component: () => import('./views/artifact/RoseView.vue')
                    },
                    {
                        path: '/artifact/ChainView',
                        name: 'ChainView',
                        component: () => import('./views/artifact/ChainView.vue')
                    },
                    {
                        path: '/artifact/HornView',
                        name: 'HornView',
                        component: () => import('./views/artifact/HornView.vue')
                    },
                    {
                        path: '/artifact/SandalView',
                        name: 'SandalView',
                        component: () => import('./views/artifact/SandalView.vue')
                    },
                    {
                        path: '/artifact/TalismanView',
                        name: 'TalismanView',
                        component: () => import('./views/artifact/TalismanView.vue')
                    },
                    {
                        path: '/artifact/ArmbandView',
                        name: 'ArmbandView',
                        component: () => import('./views/artifact/ArmbandView.vue')
                    },
                    {
                        path: '/artifact/HourglassView',
                        name: 'HourglassView',
                        component: () => import('./views/artifact/HourglassView.vue')
                    },
                    {
                        path: '/artifact/BookView',
                        name: 'BookView',
                        component: () => import('./views/artifact/BookView.vue')
                    }

                ]
            },
            {
                path: '/alchemy',
                name: 'AlchemyView',
                component: () => import('./views/AlchemyView.vue'),
                redirect: '/alchemy/BombView',
                children: [
                    {
                    path: '/alchemy/BombView',
                    name: 'BombView',
                    component: () => import('./views/alchemy/BombView.vue')
                    },
                    {
                    path: '/alchemy/BombFrost',
                    name: 'BombFrost',
                    component: () => import('./views/alchemy/BombFrost.vue')
                    },
                    {
                    path: '/alchemy/BombFlame',
                    name: 'BombFlame',
                    component: () => import('./views/alchemy/BombFlame.vue')
                    },
                    {
                    path: '/alchemy/BombWool',
                    name: 'BombWool',
                    component: () => import('./views/alchemy/BombWool.vue')
                    },
                    {
                    path: '/alchemy/BombNoise',
                    name: 'BombNoise',
                    component: () => import('./views/alchemy/BombNoise.vue')
                    },
                    {
                    path: '/alchemy/BombFlash',
                    name: 'BombFlash',
                    component: () => import('./views/alchemy/BombFlash.vue')
                    },
                    {
                    path: '/alchemy/BombShocking',
                    name: 'BombShocking',
                    component: () => import('./views/alchemy/BombShocking.vue')
                    },
                    {
                    path: '/alchemy/BombRegrowth',
                    name: 'BombRegrowth',
                    component: () => import('./views/alchemy/BombRegrowth.vue')
                    },
                    {
                    path: '/alchemy/BombHoly',
                    name: 'BombHoly',
                    component: () => import('./views/alchemy/BombHoly.vue')
                    },
                    {
                    path: '/alchemy/BombArcane',
                    name: 'BombArcane',
                    component: () => import('./views/alchemy/BombArcane.vue')
                    },
                    {
                    path: '/alchemy/BombShrapnel',
                    name: 'BombShrapnel',
                    component: () => import('./views/alchemy/BombShrapnel.vue')
                    },
                    {
                    path: '/alchemy/FoodRation',
                    name: 'FoodRation',
                    component: () => import('./views/alchemy/FoodRation.vue')
                    },
                    {
                    path: '/alchemy/FoodFrozen',
                    name: 'FoodFrozen',
                    component: () => import('./views/alchemy/FoodFrozen.vue')
                    },
                    {
                    path: '/alchemy/FoodPie',
                    name: 'FoodPie',
                    component: () => import('./views/alchemy/FoodPie.vue')
                    },
                    {
                    path: '/alchemy/FoodPasty',
                    name: 'FoodPasty',
                    component: () => import('./views/alchemy/FoodPasty.vue')
                    },
                    {
                    path: '/alchemy/FoodFruit',
                    name: 'FoodFruit',
                    component: () => import('./views/alchemy/FoodFruit.vue')
                    },
                    {
                    path: '/alchemy/FoodChunk',
                    name: 'FoodChunk',
                    component: () => import('./views/alchemy/FoodChunk.vue')
                    },
                    {
                    path: '/alchemy/FoodBerry',
                    name: 'FoodBerry',
                    component: () => import('./views/alchemy/FoodBerry.vue')
                    },
                    {
                    path: '/alchemy/PhantomMeat',
                    name: 'PhantomMeat',
                    component: () => import('./views/alchemy/PhantomMeat.vue')
                    },
                    {
                    path: '/alchemy/PotionExp',
                    name: 'PotionExp',
                    component: () => import('./views/alchemy/PotionExp.vue')
                    },
                    {
                    path: '/alchemy/PotionFrost',
                    name: 'PotionFrost',
                    component: () => import('./views/alchemy/PotionFrost.vue')
                    },
                    {
                    path: '/alchemy/PotionHaste',
                    name: 'PotionHaste',
                    component: () => import('./views/alchemy/PotionHaste.vue')
                    },
                    {
                    path: '/alchemy/PotionHealing',
                    name: 'PotionHealing',
                    component: () => import('./views/alchemy/PotionHealing.vue')
                    },
                    {
                    path: '/alchemy/PotionInv',
                    name: 'PotionInv',
                    component: () => import('./views/alchemy/PotionInv.vue')
                    },
                    {
                    path: '/alchemy/PotionFly',
                    name: 'PotionFly',
                    component: () => import('./views/alchemy/PotionFly.vue')
                    },
                    {
                    path: '/alchemy/PotionFire',
                    name: 'PotionFire',
                    component: () => import('./views/alchemy/PotionFire.vue')
                    },
                    {
                    path: '/alchemy/PotionVision',
                    name: 'PotionVision',
                    component: () => import('./views/alchemy/PotionVision.vue')
                    },
                    {
                    path: '/alchemy/PotionParalyse',
                    name: 'PotionParalyse',
                    component: () => import('./views/alchemy/PotionParalyse.vue')
                    },
                    {
                    path: '/alchemy/PotionPurify',
                    name: 'PotionPurify',
                    component: () => import('./views/alchemy/PotionPurify.vue')
                    },
                    {
                    path: '/alchemy/PotionStr',
                    name: 'PotionStr',
                    component: () => import('./views/alchemy/PotionStr.vue')
                    },
                    {
                    path: '/alchemy/PotionGas',
                    name: 'PotionGas',
                    component: () => import('./views/alchemy/PotionGas.vue')
                    },
                    {
                    path: '/alchemy/ScrollIdentify',
                    name: 'ScrollIdentify',
                    component: () => import('./views/alchemy/ScrollIdentify.vue')
                    },
                    {
                    path: '/alchemy/ScrollSleep',
                    name: 'ScrollSleep',
                    component: () => import('./views/alchemy/ScrollSleep.vue')
                    },
                    {
                    path: '/alchemy/ScrollImage',
                    name: 'ScrollImage',
                    component: () => import('./views/alchemy/ScrollImage.vue')
                    },
                    {
                    path: '/alchemy/ScrollMapping',
                    name: 'ScrollMapping',
                    component: () => import('./views/alchemy/ScrollMapping.vue')
                    },
                    {
                    path: '/alchemy/ScrollChallenge',
                    name: 'ScrollChallenge',
                    component: () => import('./views/alchemy/ScrollChallenge.vue')
                    },
                    {
                    path: '/alchemy/ScrollUncurse',
                    name: 'ScrollUncurse',
                    component: () => import('./views/alchemy/ScrollUncurse.vue')
                    },
                    {
                        path: '/alchemy/ScrollRecharging',
                        name: 'ScrollRecharging',
                        component: () => import('./views/alchemy/ScrollRecharging.vue')
                    },
                    {
                    path: '/alchemy/ScrollRetribution',
                    name: 'ScrollRetribution',
                    component: () => import('./views/alchemy/ScrollRetribution.vue')
                    },
                    {
                    path: '/alchemy/ScrollTerror',
                    name: 'ScrollTerror',
                    component: () => import('./views/alchemy/ScrollTerror.vue')
                    },
                    {
                    path: '/alchemy/ScrollTp',
                    name: 'ScrollTp',
                    component: () => import('./views/alchemy/ScrollTp.vue')
                    },
                    {
                    path: '/alchemy/ScrollAlter',
                    name: 'ScrollAlter',
                    component: () => import('./views/alchemy/ScrollAlter.vue')
                    },
                    {
                    path: '/alchemy/ScrollUpgrade',
                    name: 'ScrollUpgrade',
                    component: () => import('./views/alchemy/ScrollUpgrade.vue')
                    },
                    {
                    path: '/alchemy/PotionBrews',
                    name: 'PotionBrews',
                    component: () => import('./views/alchemy/PotionBrews.vue')
                    },
                    {
                    path: '/alchemy/PotionElixirs',
                    name: 'PotionElixirs',
                    component: () => import('./views/alchemy/PotionElixirs.vue')
                    },
                    {
                    path: '/alchemy/SpellSpells',
                    name: 'SpellSpells',
                    component: () => import('./views/alchemy/SpellSpells.vue')
                    },
                    {
                    path: '/alchemy/EnforcersDetails',
                    name: 'EnforcersDetails',
                    component: () => import('./views/alchemy/EnforcersDetails.vue')
                    }
                ]
            },
            {
                path: '/accessories',
                name: 'AccessoriesView',
                component: () => import('./views/AccessoriesView.vue'),
                redirect: '/accessories/TrinketTrintetcatalyst',
                children: [
                    {
                        path: '/accessories/TrinketTrintetcatalyst',
                        name: 'TrinketTrintetcatalyst',
                        component: () => import('./views/accessories/TrinketTrintetcatalyst.vue')
                    },
                    {
                        path: '/accessories/TrinketDimensionalsundial',
                        name: 'TrinketDimensionalsundial',
                        component: () => import('./views/accessories/TrinketDimensionalsundial.vue')
                    },
                    {
                        path: '/accessories/TrinketExoticcrystals',
                        name: 'TrinketExoticcrystals',
                        component: () => import('./views/accessories/TrinketExoticcrystals.vue')
                    },
                    {
                        path: '/accessories/TrinketEyeofnewt',
                        name: 'TrinketEyeofnewt',
                        component: () => import('./views/accessories/TrinketEyeofnewt.vue')
                    },
                    {
                        path: '/accessories/TrinketMimictooth',
                        name: 'TrinketMimictooth',
                        component: () => import('./views/accessories/TrinketMimictooth.vue')
                    },
                    {
                        path: '/accessories/TrinketMossyclump',
                        name: 'TrinketMossyclump',
                        component: () => import('./views/accessories/TrinketMossyclump.vue')
                    },
                    {
                        path: '/accessories/TrinketParchmentscrap',
                        name: 'TrinketParchmentscrap',
                        component: () => import('./views/accessories/TrinketParchmentscrap.vue')
                    },
                    {
                        path: '/accessories/TrinketPetrifiedseed',
                        name: 'TrinketPetrifiedseed',
                        component: () => import('./views/accessories/TrinketPetrifiedseed.vue')
                    },
                    {
                        path: '/accessories/TrinketSkull',
                        name: 'TrinketSkull',
                        component: () => import('./views/accessories/TrinketSkull.vue')
                    },
                    {
                        path: '/accessories/TrinketClover',
                        name: 'TrinketClover',
                        component: () => import('./views/accessories/TrinketClover.vue')
                    },
                    {
                        path: '/accessories/TrinketTrapmechanism',
                        name: 'TrinketTrapmechanism',
                        component: () => import('./views/accessories/TrinketTrapmechanism.vue')
                    },
                    {
                        path: '/accessories/TrinketWondrousresin',
                        name: 'TrinketWondrousresin',
                        component: () => import('./views/accessories/TrinketWondrousresin.vue')
                    },
                    {
                        path: '/accessories/Trinketvialofblood',
                        name: 'Trinketvialofblood',
                        component: () => import('./views/accessories/Trinketvialofblood.vue')
                    },
                    {
                        path: '/accessories/Trinketshardofoblivion',
                        name: 'Trinketshardofoblivion',
                        component: () => import('./views/accessories/Trinketshardofoblivion.vue')
                    },
                    {
                        path: '/accessories/Trinketchaoticcenser',
                        name: 'Trinketchaoticcenser',
                        component: () => import('./views/accessories/Trinketchaoticcenser.vue')
                    }
                ]
            },
            {
                path: '/monsterornpc',
                name: 'MonsterOrNPC',
                component: () => import('./views/MonsterOrNPC.vue'),
                redirect: '/monsterornpc/Ch1View',
                children: [
                    {
                        path: '/monsterornpc/Ch1View',
                        name: 'Ch1View',
                        component: () => import('./views/monsterornpc/Ch1View.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Rat',
                        name: 'Ch1Rat',
                        component: () => import('./views/monsterornpc/Ch1Rat.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Albino',
                        name: 'Ch1Albino',
                        component: () => import('./views/monsterornpc/Ch1Albino.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Snake',
                        name: 'Ch1Snake',
                        component: () => import('./views/monsterornpc/Ch1Snake.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Gnoll',
                        name: 'Ch1Gnoll',
                        component: () => import('./views/monsterornpc/Ch1Gnoll.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Frat',
                        name: 'Ch1Frat',
                        component: () => import('./views/monsterornpc/Ch1Frat.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Crab',
                        name: 'Ch1Crab',
                        component: () => import('./views/monsterornpc/Ch1Crab.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Gnolldarter',
                        name: 'Ch1Gnolldarter',
                        component: () => import('./views/monsterornpc/Ch1Gnolldarter.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Swarm',
                        name: 'Ch1Swarm',
                        component: () => import('./views/monsterornpc/Ch1Swarm.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Slime',
                        name: 'Ch1Slime',
                        component: () => import('./views/monsterornpc/Ch1Slime.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Causticslime',
                        name: 'Ch1Causticslime',
                        component: () => import('./views/monsterornpc/Ch1Causticslime.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Greatcrab',
                        name: 'Ch1Greatcrab',
                        component: () => import('./views/monsterornpc/Ch1Greatcrab.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Div',
                        name: 'Ch1Div',
                        component: () => import('./views/monsterornpc/Ch1Div.vue')
                    },
                    {
                        path: '/monsterornpc/Ch1Goo',
                        name: 'Ch1Goo',
                        component: () => import('./views/monsterornpc/Ch1Goo.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2View',
                        name: 'Ch2View',
                        component: () => import('./views/monsterornpc/Ch2View.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Thief',
                        name: 'Ch2Thief',
                        component: () => import('./views/monsterornpc/Ch2Thief.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Bandit',
                        name: 'Ch2Bandit',
                        component: () => import('./views/monsterornpc/Ch2Bandit.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Skeleton',
                        name: 'Ch2Skeleton',
                        component: () => import('./views/monsterornpc/Ch2Skeleton.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Dm100',
                        name: 'Ch2Dm100',
                        component: () => import('./views/monsterornpc/Ch2Dm100.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Guard',
                        name: 'Ch2Guard',
                        component: () => import('./views/monsterornpc/Ch2Guard.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Necro',
                        name: 'Ch2Necro',
                        component: () => import('./views/monsterornpc/Ch2Necro.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Spenecro',
                        name: 'Ch2Spenecro',
                        component: () => import('./views/monsterornpc/Ch2Spenecro.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Rotheart',
                        name: 'Ch2Rotheart',
                        component: () => import('./views/monsterornpc/Ch2Rotheart.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Rotlash',
                        name: 'Ch2Rotlash',
                        component: () => import('./views/monsterornpc/Ch2Rotlash.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Newelefire',
                        name: 'Ch2Newelefire',
                        component: () => import('./views/monsterornpc/Ch2Newelefire.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Div',
                        name: 'Ch2Div',
                        component: () => import('./views/monsterornpc/Ch2Div.vue')
                    },
                    {
                        path: '/monsterornpc/Ch2Tengu',
                        name: 'Ch2Tengu',
                        component: () => import('./views/monsterornpc/Ch2Tengu.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3View',
                        name: 'Ch3View',
                        component: () => import('./views/monsterornpc/Ch3View.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Bat',
                        name: 'Ch3Bat',
                        component: () => import('./views/monsterornpc/Ch3Bat.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Brute',
                        name: 'Ch3Brute',
                        component: () => import('./views/monsterornpc/Ch3Brute.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Armoredbrute',
                        name: 'Ch3Armoredbrute',
                        component: () => import('./views/monsterornpc/Ch3Armoredbrute.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Shaman',
                        name: 'Ch3Shaman',
                        component: () => import('./views/monsterornpc/Ch3Shaman.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Spinner',
                        name: 'Ch3Spinner',
                        component: () => import('./views/monsterornpc/Ch3Spinner.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Dm200',
                        name: 'Ch3Dm200',
                        component: () => import('./views/monsterornpc/Ch3Dm200.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Dm201',
                        name: 'Ch3Dm201',
                        component: () => import('./views/monsterornpc/Ch3Dm201.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Div',
                        name: 'Ch3Div',
                        component: () => import('./views/monsterornpc/Ch3Div.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Pylon',
                        name: 'Ch3Pylon',
                        component: () => import('./views/monsterornpc/Ch3Pylon.vue')
                    },
                    {
                        path: '/monsterornpc/Ch3Dm300',
                        name: 'Ch3Dm300',
                        component: () => import('./views/monsterornpc/Ch3Dm300.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4View',
                        name: 'Ch4View',
                        component: () => import('./views/monsterornpc/Ch4View.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Ghoul',
                        name: 'Ch4Ghoul',
                        component: () => import('./views/monsterornpc/Ch4Ghoul.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Warlock',
                        name: 'Ch4Warlock',
                        component: () => import('./views/monsterornpc/Ch4Warlock.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Elefire',
                        name: 'Ch4Elefire',
                        component: () => import('./views/monsterornpc/Ch4Elefire.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Elefrost',
                        name: 'Ch4Elefrost',
                        component: () => import('./views/monsterornpc/Ch4Elefrost.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Eleshock',
                        name: 'Ch4Eleshock',
                        component: () => import('./views/monsterornpc/Ch4Eleshock.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Elechaos',
                        name: 'Ch4Elechaos',
                        component: () => import('./views/monsterornpc/Ch4Elechaos.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Monk',
                        name: 'Ch4Monk',
                        component: () => import('./views/monsterornpc/Ch4Monk.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Senior',
                        name: 'Ch4Senior',
                        component: () => import('./views/monsterornpc/Ch4Senior.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Golem',
                        name: 'Ch4Golem',
                        component: () => import('./views/monsterornpc/Ch4Golem.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4Div',
                        name: 'Ch4Div',
                        component: () => import('./views/monsterornpc/Ch4Div.vue')
                    },
                    {
                        path: '/monsterornpc/Ch4King',
                        name: 'Ch4King',
                        component: () => import('./views/monsterornpc/Ch4King.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5View',
                        name: 'Ch5View',
                        component: () => import('./views/monsterornpc/Ch5View.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Spawner',
                        name: 'Ch5Spawner',
                        component: () => import('./views/monsterornpc/Ch5Spawner.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Ripper',
                        name: 'Ch5Ripper',
                        component: () => import('./views/monsterornpc/Ch5Ripper.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Succubus',
                        name: 'Ch5Succubus',
                        component: () => import('./views/monsterornpc/Ch5Succubus.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Eye',
                        name: 'Ch5Eye',
                        component: () => import('./views/monsterornpc/Ch5Eye.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Scorpio',
                        name: 'Ch5Scorpio',
                        component: () => import('./views/monsterornpc/Ch5Scorpio.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Acidic',
                        name: 'Ch5Acidic',
                        component: () => import('./views/monsterornpc/Ch5Acidic.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Div',
                        name: 'Ch5Div',
                        component: () => import('./views/monsterornpc/Ch5Div.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Fist1',
                        name: 'Ch5Fist1',
                        component: () => import('./views/monsterornpc/Ch5Fist1.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Fist2',
                        name: 'Ch5Fist2',
                        component: () => import('./views/monsterornpc/Ch5Fist2.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Fist3',
                        name: 'Ch5Fist3',
                        component: () => import('./views/monsterornpc/Ch5Fist3.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Larva',
                        name: 'Ch5Larva',
                        component: () => import('./views/monsterornpc/Ch5Larva.vue')
                    },
                    {
                        path: '/monsterornpc/Ch5Yog',
                        name: 'Ch5Yog',
                        component: () => import('./views/monsterornpc/Ch5Yog.vue')
                    },
                    {
                        path: '/monsterornpc/NeutralView',
                        name: 'NeutralView',
                        component: () => import('./views/monsterornpc/NeutralView.vue')
                    },
                    {
                        path: '/monsterornpc/StatueView',
                        name: 'StatueView',
                        component: () => import('./views/monsterornpc/StatueView.vue')
                    },
                    {
                        path: '/monsterornpc/ArmoredStatue',
                        name: 'ArmoredStatue',
                        component: () => import('./views/monsterornpc/ArmoredStatue.vue')
                    },
                    {
                        path: '/monsterornpc/FishView',
                        name: 'FishView',
                        component: () => import('./views/monsterornpc/FishView.vue')
                    },
                    {
                        path: '/monsterornpc/MimicView',
                        name: 'MimicView',
                        component: () => import('./views/monsterornpc/MimicView.vue')
                    },
                    {
                        path: '/monsterornpc/MimicGolden',
                        name: 'MimicGolden',
                        component: () => import('./views/monsterornpc/MimicGolden.vue')
                    },
                    {
                        path: '/monsterornpc/MimicCrystal',
                        name: 'MimicCrystal',
                        component: () => import('./views/monsterornpc/MimicCrystal.vue')
                    },
                    {
                        path: '/monsterornpc/WraithView',
                        name: 'WraithView',
                        component: () => import('./views/monsterornpc/WraithView.vue')
                    },
                    {
                        path: '/monsterornpc/BeeView',
                        name: 'BeeView',
                        component: () => import('./views/monsterornpc/BeeView.vue')
                    },
                    {
                        path: '/monsterornpc/TormentedSpirit',
                        name: 'TormentedSpirit',
                        component: () => import('./views/monsterornpc/TormentedSpirit.vue')
                    },
                    {
                        path: '/monsterornpc/PhantomPiranha',
                        name: 'PhantomPiranha',
                        component: () => import('./views/monsterornpc/PhantomPiranha.vue')
                    },
                    {
                        path: '/monsterornpc/GhostView',
                        name: 'GhostView',
                        component: () => import('./views/monsterornpc/GhostView.vue')
                    },
                    {
                        path: '/monsterornpc/WandMaker',
                        name: 'WandMaker',
                        component: () => import('./views/monsterornpc/WandMaker.vue')
                    },
                    {
                        path: '/monsterornpc/BlackSmith',
                        name: 'BlackSmith',
                        component: () => import('./views/monsterornpc/BlackSmith.vue')
                    },
                    {
                        path: '/monsterornpc/ImpView',
                        name: 'ImpView',
                        component: () => import('./views/monsterornpc/ImpView.vue')
                    },
                    {
                        path: '/monsterornpc/ImageView',
                        name: 'ImageView',
                        component: () => import('./views/monsterornpc/ImageView.vue')
                    },
                    {
                        path: '/monsterornpc/PrisImage',
                        name: 'PrisImage',
                        component: () => import('./views/monsterornpc/PrisImage.vue')
                    },
                    {
                        path: '/monsterornpc/RatKing',
                        name: 'RatKing',
                        component: () => import('./views/monsterornpc/RatKing.vue')
                    },
                    {
                        path: '/monsterornpc/SheepView',
                        name: 'SheepView',
                        component: () => import('./views/monsterornpc/SheepView.vue')
                    },
                    {
                        path: '/monsterornpc/RedSentry',
                        name: 'RedSentry',
                        component: () => import('./views/monsterornpc/RedSentry.vue')
                    },
                    {
                        path: '/monsterornpc/CrystalSpire',
                        name: 'CrystalSpire',
                        component: () => import('./views/monsterornpc/CrystalSpire.vue')
                    },
                    {
                        path: '/monsterornpc/CrystalGuardian',
                        name: 'CrystalGuardian',
                        component: () => import('./views/monsterornpc/CrystalGuardian.vue')
                    },
                    {
                        path: '/monsterornpc/CrystalWisp',
                        name: 'CrystalWisp',
                        component: () => import('./views/monsterornpc/CrystalWisp.vue')
                    },
                    {
                        path: '/monsterornpc/GnollGeomancer',
                        name: 'GnollGeomancer',
                        component: () => import('./views/monsterornpc/GnollGeomancer.vue')
                    },
                    {
                        path: '/monsterornpc/GnollGuard',
                        name: 'GnollGuard',
                        component: () => import('./views/monsterornpc/GnollGuard.vue')
                    },
                    {
                        path: '/monsterornpc/GnollSapper',
                        name: 'GnollSapper',
                        component: () => import('./views/monsterornpc/GnollSapper.vue')
                    }
                ]
            },
            {
                path: '/miscellaneous1',
                name: 'Miscellaneous1View',
                component: () => import('./views/Miscellaneous1View.vue'),
                redirect: '/miscellaneous1/BuffNeg1',
                children: [
                    {
                        path: '/miscellaneous1/BuffNeg1',
                        name: 'BuffNeg1',
                        component: () => import('./views/miscellaneous1/BuffNeg1.vue')
                    },
                    {
                        path: '/miscellaneous1/BuffPos1',
                        name: 'BuffPos1',
                        component: () => import('./views/miscellaneous1/BuffPos1.vue')
                    },
                    {
                        path: '/miscellaneous1/Trap1View',
                        name: 'Trap1View',
                        component: () => import('./views/miscellaneous1/Trap1View.vue')
                    },
                    {
                        path: '/miscellaneous1/AmuletCurse',
                        name: 'AmuletCurse',
                        component: () => import('./views/miscellaneous1/AmuletCurse.vue')
                    },
                    {
                        path: '/miscellaneous1/SacFire',
                        name: 'SacFire',
                        component: () => import('./views/miscellaneous1/SacFire.vue')
                    },
                    {
                        path: '/miscellaneous1/AnkhView',
                        name: 'AnkhView',
                        component: () => import('./views/miscellaneous1/AnkhView.vue')
                    },
                    {
                        path: '/miscellaneous1/SealView',
                        name: 'SealView',
                        component: () => import('./views/miscellaneous1/SealView.vue')
                    },
                    {
                        path: '/miscellaneous1/GoldView',
                        name: 'GoldView',
                        component: () => import('./views/miscellaneous1/GoldView.vue')
                    },
                    {
                        path: '/miscellaneous1/DustView',
                        name: 'DustView',
                        component: () => import('./views/miscellaneous1/DustView.vue')
                    },
                    {
                        path: '/miscellaneous1/OreView',
                        name: 'OreView',
                        component: () => import('./views/miscellaneous1/OreView.vue')
                    }
                ]
            },
            {
                path: '/miscellaneous2',
                name: 'Miscellaneous2View',
                component: () => import('./views/Miscellaneous2View.vue'),
                redirect: '/miscellaneous2/IntroView',
                children: [
                    {
                        path: '/miscellaneous2/IntroView',
                        name: 'IntroView',
                        component: () => import('./views/miscellaneous2/IntroView.vue')
                    },
                    {
                        path: '/miscellaneous2/TierView',
                        name: 'TierView',
                        component: () => import('./views/miscellaneous2/TierView.vue')
                    },
                    {
                        path: '/miscellaneous2/MeleeView',
                        name: 'MeleeView',
                        component: () => import('./views/miscellaneous2/MeleeView.vue')
                    },
                    {
                        path: '/miscellaneous2/RangedView',
                        name: 'RangedView',
                        component: () => import('./views/miscellaneous2/RangedView.vue')
                    },
                    {
                        path: '/miscellaneous2/ArmorView',
                        name: 'ArmorView1',
                        component: () => import('./views/miscellaneous2/ArmorView.vue')
                    },
                    {
                        path: '/miscellaneous2/WandView',
                        name: 'WandView1',
                        component: () => import('./views/miscellaneous2/WandView.vue')
                    },
                    {
                        path: '/miscellaneous2/WandCursed',
                        name: 'WandCursed1',
                        component: () => import('./views/miscellaneous2/WandCursed.vue')
                    },
                    {
                        path: '/miscellaneous2/RingView',
                        name: 'RingView1',
                        component: () => import('./views/miscellaneous2/RingView.vue')
                    },
                    {
                        path: '/miscellaneous2/ArtifactView',
                        name: 'ArtifactView1',
                        component: () => import('./views/miscellaneous2/ArtifactView.vue')
                    },
                    {
                        path: '/miscellaneous2/ScrollView',
                        name: 'ScrollView',
                        component: () => import('./views/miscellaneous2/ScrollView.vue')
                    },
                    {
                        path: '/miscellaneous2/PotionView',
                        name: 'PotionView',
                        component: () => import('./views/miscellaneous2/PotionView.vue')
                    },
                    {
                        path: '/miscellaneous2/LimDrop',
                        name: 'LimDrop',
                        component: () => import('./views/miscellaneous2/LimDrop.vue')
                    },
                    {
                        path: '/miscellaneous2/FoodView',
                        name: 'FoodView',
                        component: () => import('./views/miscellaneous2/FoodView.vue')
                    },
                    {
                        path: '/miscellaneous2/PriorityView',
                        name: 'PriorityView',
                        component: () => import('./views/miscellaneous2/PriorityView.vue')
                    },
                    {
                        path: '/miscellaneous2/HeroView',
                        name: 'HeroView',
                        component: () => import('./views/miscellaneous2/HeroView.vue')
                    },
                    {
                        path: '/miscellaneous2/MobView',
                        name: 'MobView',
                        component: () => import('./views/miscellaneous2/MobView.vue')
                    },
                    {
                        path: '/miscellaneous2/PropertyView',
                        name: 'PropertyView',
                        component: () => import('./views/miscellaneous2/PropertyView.vue')
                    },
                    {
                        path: '/miscellaneous2/SpawnView',
                        name: 'SpawnView',
                        component: () => import('./views/miscellaneous2/SpawnView.vue')
                    },
                    {
                        path: '/miscellaneous2/ShopView',
                        name: 'ShopView',
                        component: () => import('./views/miscellaneous2/ShopView.vue')
                    },
                    {
                        path: '/miscellaneous2/FeelingView',
                        name: 'FeelingView',
                        component: () => import('./views/miscellaneous2/FeelingView.vue')
                    },
                    {
                        path: '/miscellaneous2/ChasmView',
                        name: 'ChasmView',
                        component: () => import('./views/miscellaneous2/ChasmView.vue')
                    },
                    {
                        path: '/miscellaneous2/LckFloor',
                        name: 'LckFloor',
                        component: () => import('./views/miscellaneous2/LckFloor.vue')
                    },
                    {
                        path: '/miscellaneous2/RankingView',
                        name: 'RankingView',
                        component: () => import('./views/miscellaneous2/RankingView.vue')
                    },
                    {
                        path: '/miscellaneous2/BonesView',
                        name: 'BonesView',
                        component: () => import('./views/miscellaneous2/BonesView.vue')
                    },
                    {
                        path: '/miscellaneous2/MechView',
                        name: 'MechView',
                        component: () => import('./views/miscellaneous2/MechView.vue')
                    },
                    {
                        path: '/miscellaneous2/BlackSmith',
                        name: 'BlackSmith2',
                        component: () => import('./views/miscellaneous2/BlackSmith.vue')
                    },
                    {
                        path: '/miscellaneous2/BlackSmith1',
                        name: 'BlackSmith1',
                        component: () => import('./views/miscellaneous2/BlackSmith1.vue')
                    }

                ]
            },
            {
                path:'/BallisticSimulation',
                name:'BallisticSimulation',
                component:()=>import('./views/BallisticSimulation.vue'),
            },
            {
                path:'/TableList',
                name:'TableList',
                component:()=>import('./views/TableList.vue'),
            }

        ]

    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const loadingStore = useLoadingStore();
    loadingStore.setLoading(true);
    next();
});

router.afterEach(() => {
    const loadingStore = useLoadingStore();
    loadingStore.setLoading(false);
});

export default router;
